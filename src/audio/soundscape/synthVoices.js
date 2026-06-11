import { chance, clamp, jitter, pick, randomBetween } from './random.js';
import { DEFAULT_SOUND_SETTINGS } from './soundSettings.js';

const MIN_GAIN = 0.0001;
const SCALE = ['C4', 'D4', 'E4', 'G4', 'A4', 'C5', 'D5', 'E5', 'G5', 'A5', 'C6'];
const CHIME_NOTES = ['C5', 'D5', 'E5', 'G5', 'A5', 'C6'];
const FROG_NOTES = ['F2', 'G2', 'A2'];
const WOODFISH_NOTES = ['E4', 'G4', 'A4'];
const NOTE_OFFSETS = {
  C: 0,
  'C#': 1,
  Db: 1,
  D: 2,
  'D#': 3,
  Eb: 3,
  E: 4,
  F: 5,
  'F#': 6,
  Gb: 6,
  G: 7,
  'G#': 8,
  Ab: 8,
  A: 9,
  'A#': 10,
  Bb: 10,
  B: 11,
};

function noteToFrequency(note) {
  const match = /^([A-G])([#b]?)(-?\d+)$/.exec(note);
  if (!match) return 440;

  const [, letter, accidental, octaveText] = match;
  const midi = (Number(octaveText) + 1) * 12 + NOTE_OFFSETS[`${letter}${accidental}`];
  return 440 * 2 ** ((midi - 69) / 12);
}

function createImpulseResponse(audioContext, seconds = 3.2, decay = 2.8) {
  const sampleCount = Math.floor(audioContext.sampleRate * seconds);
  const impulse = audioContext.createBuffer(2, sampleCount, audioContext.sampleRate);

  for (let channelIndex = 0; channelIndex < impulse.numberOfChannels; channelIndex += 1) {
    const channel = impulse.getChannelData(channelIndex);
    for (let i = 0; i < sampleCount; i += 1) {
      const t = i / sampleCount;
      const fadeIn = Math.min(1, i / 700);
      channel[i] = randomBetween(-1, 1) * fadeIn * (1 - t) ** decay;
    }
  }

  return impulse;
}

function createNoiseSource(audioContext, seconds = 1, color = 'white', loop = true) {
  const sampleCount = Math.max(1, Math.floor(audioContext.sampleRate * seconds));
  const buffer = audioContext.createBuffer(1, sampleCount, audioContext.sampleRate);
  const channel = buffer.getChannelData(0);
  let previous = 0;

  for (let i = 0; i < sampleCount; i += 1) {
    const white = randomBetween(-1, 1);
    previous = color === 'pink' ? previous * 0.92 + white * 0.08 : white;
    channel[i] = previous;
  }

  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.loop = loop;
  return source;
}

function disconnectNodes(nodes) {
  nodes.forEach((node) => {
    try {
      node.disconnect();
    } catch {
      // Nodes can already be disconnected when React tears down the scene.
    }
  });
}

function scheduleDisconnect(nodes, tail = 0) {
  const delayMs = Math.max(0, tail) * 1000;
  if (delayMs > 0) {
    globalThis.setTimeout(() => disconnectNodes(nodes), delayMs);
    return;
  }

  disconnectNodes(nodes);
}

function cleanupOnEnded(source, nodes, tail = 0) {
  if (!source) {
    scheduleDisconnect(nodes, tail);
    return;
  }

  source.addEventListener('ended', () => {
    scheduleDisconnect(nodes, tail);
  }, { once: true });
}

function getEchoSettings(settings, key) {
  return settings.echo?.[key] ?? DEFAULT_SOUND_SETTINGS.echo?.[key];
}

function getEchoTail(settings, key) {
  return Math.max(0, getEchoSettings(settings, key)?.tail ?? 0);
}

function connectWithEcho(audioContext, output, destination, key, settings, echoDestination = destination) {
  const echo = getEchoSettings(settings, key);
  output.connect(destination);

  if (!echo || echo.level <= 0 || echo.time <= 0) {
    return [];
  }

  const delayTime = clamp(echo.time * randomBetween(0.92, 1.08), 0.01, 1.4);
  const maxDelay = Math.max(0.05, delayTime + 0.25);
  const delay = audioContext.createDelay(maxDelay);
  const feedback = audioContext.createGain();
  const tone = audioContext.createBiquadFilter();
  const returnGain = audioContext.createGain();

  delay.delayTime.value = delayTime;
  feedback.gain.value = clamp(echo.feedback * randomBetween(0.9, 1.08), 0, 0.9);
  tone.type = 'lowpass';
  tone.frequency.value = clamp(echo.tone * randomBetween(0.82, 1.18), 80, 12000);
  tone.Q.value = 0.72;
  returnGain.gain.value = Math.max(0, echo.level * randomBetween(0.88, 1.08));

  output.connect(delay);
  delay.connect(tone);
  tone.connect(feedback);
  feedback.connect(delay);
  tone.connect(returnGain);
  returnGain.connect(echoDestination);

  return [delay, feedback, tone, returnGain];
}

function rampPercussive(gain, start, { peak, attack, decay, release, sustain = 0.08 }) {
  gain.setValueAtTime(MIN_GAIN, start);
  gain.exponentialRampToValueAtTime(Math.max(MIN_GAIN, peak), start + attack);
  gain.exponentialRampToValueAtTime(Math.max(MIN_GAIN, peak * sustain), start + attack + decay);
  gain.exponentialRampToValueAtTime(MIN_GAIN, start + attack + decay + release);
}

export function createMasterBus(audioContext, settings = DEFAULT_SOUND_SETTINGS) {
  const cfg = settings.master;
  const input = audioContext.createGain();
  const dry = audioContext.createGain();
  const delay = audioContext.createDelay(1.2);
  const feedback = audioContext.createGain();
  const delayReturn = audioContext.createGain();
  const convolver = audioContext.createConvolver();
  const reverbReturn = audioContext.createGain();
  const master = audioContext.createGain();
  const compressor = audioContext.createDynamicsCompressor();

  dry.gain.value = cfg.dry;
  delay.delayTime.value = cfg.delayTime;
  feedback.gain.value = cfg.delayFeedback;
  delayReturn.gain.value = cfg.delayReturn;
  convolver.buffer = createImpulseResponse(audioContext);
  reverbReturn.gain.value = cfg.reverbReturn;
  master.gain.value = cfg.volume;
  compressor.threshold.value = cfg.compressorThreshold;
  compressor.knee.value = 18;
  compressor.ratio.value = 4;
  compressor.attack.value = 0.012;
  compressor.release.value = 0.24;

  input.connect(dry);
  dry.connect(master);
  input.connect(delay);
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(delayReturn);
  delayReturn.connect(master);
  input.connect(convolver);
  convolver.connect(reverbReturn);
  reverbReturn.connect(master);
  master.connect(compressor);
  compressor.connect(audioContext.destination);

  return {
    input,
    updateSettings(nextSettings) {
      const next = nextSettings.master;
      const now = audioContext.currentTime;
      master.gain.setTargetAtTime(next.volume, now, 0.04);
      dry.gain.setTargetAtTime(next.dry, now, 0.04);
      delay.delayTime.setTargetAtTime(next.delayTime, now, 0.04);
      feedback.gain.setTargetAtTime(next.delayFeedback, now, 0.04);
      delayReturn.gain.setTargetAtTime(next.delayReturn, now, 0.04);
      reverbReturn.gain.setTargetAtTime(next.reverbReturn, now, 0.04);
      compressor.threshold.setTargetAtTime(next.compressorThreshold, now, 0.04);
    },
    dispose() {
      [input, dry, delay, feedback, delayReturn, convolver, reverbReturn, master, compressor].forEach((node) => {
        try {
          node.disconnect();
        } catch {
          // Best-effort audio cleanup.
        }
      });
    }
  };
}

export function createAmbientBed(audioContext, destination, settings = DEFAULT_SOUND_SETTINGS) {
  let ambientSettings = settings.ambient;
  const baseGain = audioContext.createGain();
  const windGain = audioContext.createGain();
  const low = audioContext.createBiquadFilter();
  const high = audioContext.createBiquadFilter();
  const oscillators = [55, 82.5, 110].map((frequency, index) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = index === 1 ? 'triangle' : 'sine';
    osc.frequency.value = frequency;
    gain.gain.value = ambientSettings.droneVolume / (index + 1);
    osc.connect(gain);
    gain.connect(baseGain);
    osc.start();

    return { osc, gain, frequency };
  });

  const noise = createNoiseSource(audioContext, 2, 'pink');
  low.type = 'lowpass';
  low.frequency.value = 820;
  high.type = 'highpass';
  high.frequency.value = 120;
  windGain.gain.value = ambientSettings.windBase;

  noise.connect(high);
  high.connect(low);
  low.connect(windGain);
  baseGain.connect(destination);
  windGain.connect(destination);
  noise.start();

  return {
    updateSettings(nextSettings) {
      ambientSettings = nextSettings.ambient;
    },
    pulse(amount = 0.45, nextSettings = settings) {
      const cfg = nextSettings.ambient;
      const now = audioContext.currentTime;
      windGain.gain.cancelScheduledValues(now);
      windGain.gain.setValueAtTime(Math.max(windGain.gain.value, cfg.pulseBase + amount * cfg.pulseAmount), now);
      windGain.gain.exponentialRampToValueAtTime(
        cfg.windBase + cfg.pulseBase * 0.5,
        now + randomBetween(cfg.pulseReleaseMin, cfg.pulseReleaseMax)
      );
    },
    update({ playerSpeed, progressRatio, isWon }, time, nextSettings = settings) {
      const cfg = nextSettings.ambient;
      const progress = clamp(progressRatio, 0, 1);
      const speed = clamp(playerSpeed, 0, 1);
      const shimmer = Math.sin(time * 0.00022) * 0.5 + 0.5;

      oscillators.forEach((voice, index) => {
        const targetFrequency = voice.frequency * (1 + progress * cfg.dronePitchLift + shimmer * 0.01 * (index + 1));
        voice.osc.frequency.setTargetAtTime(targetFrequency, audioContext.currentTime, 0.8);
        voice.gain.gain.setTargetAtTime((cfg.droneVolume + progress * cfg.droneProgressLift) / (index + 1), audioContext.currentTime, 0.45);
      });

      windGain.gain.setTargetAtTime(cfg.windBase + speed * cfg.windSpeedGain + (isWon ? cfg.windWonBoost : 0), audioContext.currentTime, 0.18);
      low.frequency.setTargetAtTime(cfg.windLowBase + speed * cfg.windLowSpeed + progress * cfg.windLowProgress, audioContext.currentTime, 0.2);
    },
    dispose() {
      oscillators.forEach(({ osc, gain }) => {
        osc.stop();
        osc.disconnect();
        gain.disconnect();
      });
      noise.stop();
      noise.disconnect();
      low.disconnect();
      high.disconnect();
      baseGain.disconnect();
      windGain.disconnect();
    }
  };
}

export function createSandFootstepLayer(audioContext, destination, settings = DEFAULT_SOUND_SETTINGS) {
  let footstepSettings = settings.footsteps;
  const movementGain = audioContext.createGain();
  const rustleGain = audioContext.createGain();
  const rustleLow = audioContext.createBiquadFilter();
  const rustleHigh = audioContext.createBiquadFilter();
  const rustleNoise = createNoiseSource(audioContext, 1.5, 'pink');
  let nextStepAt = 0;
  let wasMoving = false;

  movementGain.gain.value = MIN_GAIN;
  rustleGain.gain.value = MIN_GAIN;
  rustleHigh.type = 'highpass';
  rustleHigh.frequency.value = footstepSettings.rustleHighpass;
  rustleLow.type = 'lowpass';
  rustleLow.frequency.value = footstepSettings.rustleLowBase;

  rustleNoise.connect(rustleHigh);
  rustleHigh.connect(rustleLow);
  rustleLow.connect(rustleGain);
  rustleGain.connect(movementGain);
  movementGain.connect(destination);
  rustleNoise.start();

  return {
    updateSettings(nextSettings) {
      footstepSettings = nextSettings.footsteps;
      rustleHigh.frequency.setTargetAtTime(footstepSettings.rustleHighpass, audioContext.currentTime, 0.05);
    },
    update({ playerSpeed }, nextSettings = settings) {
      const cfg = nextSettings.footsteps;
      const now = audioContext.currentTime;
      const speed = clamp(playerSpeed, 0, 1);
      const isMoving = cfg.enabled && speed > cfg.threshold;

      if (isMoving) {
        const target = cfg.layerBase + speed * cfg.layerSpeedGain;
        movementGain.gain.cancelScheduledValues(now);
        movementGain.gain.setTargetAtTime(target, now, cfg.layerAttack);
        rustleGain.gain.setTargetAtTime(cfg.rustleBase + speed * cfg.rustleSpeedGain, now, 0.08);
        rustleLow.frequency.setTargetAtTime(cfg.rustleLowBase + speed * cfg.rustleLowSpeed, now, 0.12);

        if (!wasMoving) {
          nextStepAt = now + randomBetween(0.04, 0.12);
        }

        if (now >= nextStepAt) {
          playSandStepVoice(audioContext, movementGain, {
            time: now,
            velocity: randomBetween(cfg.velocityMin, cfg.velocityMax) * (0.65 + speed * 0.35)
          }, nextSettings, destination);
          const cadence = Math.max(0.08, cfg.cadenceBase - speed * cfg.cadenceSpeed);
          nextStepAt = now + randomBetween(cadence * (1 - cfg.cadenceRandom), cadence * (1 + cfg.cadenceRandom));
        }
      } else if (wasMoving) {
        movementGain.gain.cancelScheduledValues(now);
        movementGain.gain.setValueAtTime(Math.max(MIN_GAIN, movementGain.gain.value), now);
        movementGain.gain.linearRampToValueAtTime(MIN_GAIN, now + cfg.fadeOut);
        rustleGain.gain.setTargetAtTime(MIN_GAIN, now, 0.16);
      }

      wasMoving = isMoving;
    },
    previewStep(nextSettings = settings) {
      playSandStepVoice(audioContext, movementGain, {
        time: audioContext.currentTime,
        velocity: randomBetween(nextSettings.footsteps.velocityMin, nextSettings.footsteps.velocityMax)
      }, nextSettings, destination);
    },
    previewFade(nextSettings = settings) {
      const cfg = nextSettings.footsteps;
      const now = audioContext.currentTime;
      movementGain.gain.cancelScheduledValues(now);
      movementGain.gain.setValueAtTime(cfg.layerBase + cfg.layerSpeedGain, now);
      rustleGain.gain.setValueAtTime(cfg.rustleBase + cfg.rustleSpeedGain, now);
      playSandStepVoice(audioContext, movementGain, {
        time: now + 0.02,
        velocity: cfg.velocityMax
      }, nextSettings, destination);
      window.setTimeout(() => {
        const stopAt = audioContext.currentTime;
        movementGain.gain.cancelScheduledValues(stopAt);
        movementGain.gain.setValueAtTime(Math.max(MIN_GAIN, movementGain.gain.value), stopAt);
        movementGain.gain.linearRampToValueAtTime(MIN_GAIN, stopAt + cfg.fadeOut);
        rustleGain.gain.setTargetAtTime(MIN_GAIN, stopAt, 0.16);
      }, Math.max(0, cfg.previewHold * 1000));
    },
    dispose() {
      rustleNoise.stop();
      rustleNoise.disconnect();
      rustleHigh.disconnect();
      rustleLow.disconnect();
      rustleGain.disconnect();
      movementGain.disconnect();
    }
  };
}

export function playSandStepVoice(audioContext, destination, { time = audioContext.currentTime, velocity = 0.75 } = {}, settings = DEFAULT_SOUND_SETTINGS, echoDestination = destination) {
  const cfg = settings.footsteps;
  const scrapeNoise = createNoiseSource(audioContext, 0.16, 'pink', false);
  const scrapeHigh = audioContext.createBiquadFilter();
  const scrapeLow = audioContext.createBiquadFilter();
  const scrapeGain = audioContext.createGain();
  const thump = audioContext.createOscillator();
  const thumpGain = audioContext.createGain();
  const pan = audioContext.createStereoPanner?.();
  const output = pan ?? audioContext.createGain();
  const scrapeDuration = randomBetween(cfg.scrapeDurationMin, cfg.scrapeDurationMax);
  const thumpDuration = randomBetween(cfg.thumpDurationMin, cfg.thumpDurationMax);
  const scrapeStopAt = time + scrapeDuration + 0.01;
  const thumpStopAt = time + thumpDuration + 0.01;

  scrapeHigh.type = 'highpass';
  scrapeHigh.frequency.value = randomBetween(cfg.scrapeHighpassMin, cfg.scrapeHighpassMax);
  scrapeLow.type = 'lowpass';
  scrapeLow.frequency.value = randomBetween(cfg.scrapeLowpassMin, cfg.scrapeLowpassMax);
  scrapeLow.Q.value = randomBetween(0.6, 1.4);
  scrapeGain.gain.setValueAtTime(MIN_GAIN, time);
  scrapeGain.gain.exponentialRampToValueAtTime(cfg.scrapeGain * velocity, time + randomBetween(0.008, 0.016));
  scrapeGain.gain.exponentialRampToValueAtTime(MIN_GAIN, time + scrapeDuration);

  thump.type = 'sine';
  thump.frequency.setValueAtTime(randomBetween(cfg.thumpFreqMin, cfg.thumpFreqMax), time);
  thump.frequency.exponentialRampToValueAtTime(randomBetween(42, 58), time + thumpDuration);
  thumpGain.gain.setValueAtTime(MIN_GAIN, time);
  thumpGain.gain.exponentialRampToValueAtTime(cfg.thumpGain * velocity, time + 0.006);
  thumpGain.gain.exponentialRampToValueAtTime(MIN_GAIN, time + thumpDuration);

  if (pan) {
    pan.pan.setValueAtTime(randomBetween(-cfg.panSpread, cfg.panSpread), time);
  }

  scrapeNoise.connect(scrapeHigh);
  scrapeHigh.connect(scrapeLow);
  scrapeLow.connect(scrapeGain);
  scrapeGain.connect(output);
  thump.connect(thumpGain);
  thumpGain.connect(output);
  const echoNodes = connectWithEcho(audioContext, output, destination, 'footsteps', settings, echoDestination);
  scrapeNoise.start(time);
  thump.start(time);
  scrapeNoise.stop(scrapeStopAt);
  thump.stop(thumpStopAt);
  cleanupOnEnded(scrapeStopAt >= thumpStopAt ? scrapeNoise : thump, [
    scrapeNoise,
    scrapeHigh,
    scrapeLow,
    scrapeGain,
    thump,
    thumpGain,
    output,
    ...echoNodes
  ], getEchoTail(settings, 'footsteps'));
}

export function playRippleVoice(audioContext, destination, { time = audioContext.currentTime, note = pick(SCALE), velocity } = {}, settings = DEFAULT_SOUND_SETTINGS) {
  const cfg = settings.ripple;
  if (!cfg.enabled) return;
  const carrier = audioContext.createOscillator();
  const modulator = audioContext.createOscillator();
  const modGain = audioContext.createGain();
  const gain = audioContext.createGain();
  const duration = jitter(cfg.duration, cfg.durationRandom);
  const frequency = noteToFrequency(note) * randomBetween(0.985, 1.018);
  const level = velocity ?? cfg.velocity;

  carrier.type = 'sine';
  carrier.frequency.setValueAtTime(frequency, time);
  carrier.detune.setValueAtTime(randomBetween(-cfg.detune, cfg.detune), time);
  modulator.type = 'triangle';
  modulator.frequency.setValueAtTime(frequency * randomBetween(cfg.harmonicityMin, cfg.harmonicityMax), time);
  modGain.gain.setValueAtTime(frequency * randomBetween(cfg.modIndexMin, cfg.modIndexMax), time);
  modGain.gain.exponentialRampToValueAtTime(frequency * 0.08, time + duration * 0.7);

  rampPercussive(gain.gain, time, {
    peak: level,
    attack: randomBetween(cfg.attackMin, cfg.attackMax),
    decay: randomBetween(cfg.decayMin, cfg.decayMax),
    release: randomBetween(cfg.releaseMin, cfg.releaseMax),
    sustain: randomBetween(cfg.sustainMin, cfg.sustainMax)
  });

  modulator.connect(modGain);
  modGain.connect(carrier.frequency);
  carrier.connect(gain);
  const echoNodes = connectWithEcho(audioContext, gain, destination, 'ripple', settings);
  carrier.start(time);
  modulator.start(time);
  carrier.stop(time + duration);
  modulator.stop(time + duration);
  cleanupOnEnded(carrier, [carrier, modulator, modGain, gain, ...echoNodes], getEchoTail(settings, 'ripple'));
}

export function playChimeVoice(audioContext, destination, { time = audioContext.currentTime, note = pick(CHIME_NOTES), velocity, force = 0 } = {}, settings = DEFAULT_SOUND_SETTINGS) {
  const cfg = settings.chime;
  if (!cfg.enabled) return;
  const duration = jitter(cfg.duration, cfg.durationRandom);
  const baseFrequency = noteToFrequency(note) * randomBetween(0.98, 1.025);
  const gain = audioContext.createGain();
  const nodes = [gain];
  const level = velocity ?? cfg.velocity;

  rampPercussive(gain.gain, time, {
    peak: level,
    attack: 0.002,
    decay: randomBetween(cfg.decayMin, cfg.decayMax),
    release: randomBetween(cfg.releaseMin, cfg.releaseMax),
    sustain: randomBetween(cfg.sustainMin, cfg.sustainMax)
  });

  let cleanupSource = null;
  let latestStopAt = time;
  [1, 2.01, 2.98, 4.12, 5.43].forEach((ratio, index) => {
    const osc = audioContext.createOscillator();
    const partial = audioContext.createGain();
    const stopAt = time + duration + randomBetween(0, 0.14);
    osc.type = index % 2 === 0 ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(baseFrequency * ratio + force * cfg.forceBend, time);
    osc.detune.setValueAtTime(randomBetween(-cfg.detune, cfg.detune), time);
    partial.gain.value = (1 / (index + 1)) * randomBetween(cfg.partialGainMin, cfg.partialGainMax);
    osc.connect(partial);
    partial.connect(gain);
    osc.start(time + randomBetween(0, 0.009));
    osc.stop(stopAt);
    if (stopAt >= latestStopAt) {
      cleanupSource = osc;
      latestStopAt = stopAt;
    }
    nodes.push(osc, partial);
  });

  const echoNodes = connectWithEcho(audioContext, gain, destination, 'chime', settings);
  cleanupOnEnded(cleanupSource, [...nodes, ...echoNodes], getEchoTail(settings, 'chime'));
}

export function playWoodfishVoice(audioContext, destination, { time = audioContext.currentTime, pitch = pick(WOODFISH_NOTES), velocity } = {}, settings = DEFAULT_SOUND_SETTINGS) {
  const cfg = settings.woodfish;
  if (!cfg.enabled) return;
  const osc = audioContext.createOscillator();
  const noise = createNoiseSource(audioContext, 0.08);
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const noiseGain = audioContext.createGain();
  const duration = jitter(cfg.duration, cfg.durationRandom);
  const frequency = noteToFrequency(pitch) * randomBetween(cfg.pitchMin, cfg.pitchMax);
  const level = velocity ?? cfg.velocity;

  osc.type = 'sine';
  osc.frequency.setValueAtTime(frequency * randomBetween(1.05, 1.2), time);
  osc.frequency.exponentialRampToValueAtTime(frequency * randomBetween(cfg.pitchDropMin, cfg.pitchDropMax), time + duration);
  filter.type = 'bandpass';
  filter.frequency.value = randomBetween(cfg.noiseFilterMin, cfg.noiseFilterMax);
  filter.Q.value = randomBetween(5, 9);
  noiseGain.gain.setValueAtTime(level * randomBetween(cfg.noiseMin, cfg.noiseMax), time);
  noiseGain.gain.exponentialRampToValueAtTime(MIN_GAIN, time + randomBetween(0.035, 0.075));

  rampPercussive(gain.gain, time, {
    peak: level,
    attack: 0.001,
    decay: randomBetween(0.08, 0.15),
    release: randomBetween(cfg.releaseMin, cfg.releaseMax),
    sustain: 0.01
  });

  osc.connect(gain);
  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(gain);
  const echoNodes = connectWithEcho(audioContext, gain, destination, 'woodfish', settings);
  osc.start(time);
  noise.start(time);
  osc.stop(time + duration);
  noise.stop(time + 0.09);
  cleanupOnEnded(osc, [osc, noise, filter, gain, noiseGain, ...echoNodes], getEchoTail(settings, 'woodfish'));
}

export function playFrogVoice(audioContext, destination, { time = audioContext.currentTime, pitch = pick(FROG_NOTES), velocity } = {}, settings = DEFAULT_SOUND_SETTINGS) {
  const cfg = settings.frog;
  if (!cfg.enabled) return;
  const osc = audioContext.createOscillator();
  const wobble = audioContext.createOscillator();
  const wobbleGain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const duration = jitter(cfg.duration, cfg.durationRandom);
  const frequency = noteToFrequency(pitch) * randomBetween(0.92, 1.08);
  const level = velocity ?? cfg.velocity;

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(frequency * cfg.bendStart, time);
  osc.frequency.linearRampToValueAtTime(frequency * randomBetween(cfg.bendPeakMin, cfg.bendPeakMax), time + duration * 0.33);
  osc.frequency.exponentialRampToValueAtTime(frequency * randomBetween(cfg.bendEndMin, cfg.bendEndMax), time + duration);
  wobble.type = 'sine';
  wobble.frequency.value = randomBetween(cfg.wobbleRateMin, cfg.wobbleRateMax);
  wobbleGain.gain.value = randomBetween(cfg.wobbleDepthMin, cfg.wobbleDepthMax);
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(randomBetween(cfg.filterStartMin, cfg.filterStartMax), time);
  filter.frequency.linearRampToValueAtTime(randomBetween(cfg.filterPeakMin, cfg.filterPeakMax), time + duration * 0.36);
  filter.frequency.exponentialRampToValueAtTime(randomBetween(cfg.filterEndMin, cfg.filterEndMax), time + duration);
  filter.Q.value = randomBetween(4, 8);

  rampPercussive(gain.gain, time, {
    peak: level,
    attack: randomBetween(0.025, 0.06),
    decay: randomBetween(0.14, 0.24),
    release: randomBetween(0.12, 0.2),
    sustain: randomBetween(0.06, 0.13)
  });

  wobble.connect(wobbleGain);
  wobbleGain.connect(osc.frequency);
  osc.connect(filter);
  filter.connect(gain);
  const echoNodes = connectWithEcho(audioContext, gain, destination, 'frog', settings);
  wobble.start(time);
  osc.start(time);
  wobble.stop(time + duration);
  osc.stop(time + duration);
  cleanupOnEnded(osc, [osc, wobble, wobbleGain, filter, gain, ...echoNodes], getEchoTail(settings, 'frog'));
}

export function playCricketVoice(audioContext, destination, { time = audioContext.currentTime, velocity } = {}, settings = DEFAULT_SOUND_SETTINGS) {
  const cfg = settings.cricket;
  if (!cfg.enabled) return;
  const count = Math.floor(randomBetween(cfg.countMin, cfg.countMax));
  const baseFrequency = randomBetween(cfg.frequencyMin, cfg.frequencyMax);
  const level = velocity ?? cfg.velocity;

  for (let i = 0; i < count; i += 1) {
    const start = time + i * randomBetween(cfg.chirpGapMin, cfg.chirpGapMax);
    const duration = randomBetween(cfg.durationMin, cfg.durationMax);
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(baseFrequency * randomBetween(0.95, 1.08), start);
    osc.detune.setValueAtTime(randomBetween(-cfg.detune, cfg.detune), start);
    gain.gain.setValueAtTime(MIN_GAIN, start);
    gain.gain.exponentialRampToValueAtTime(Math.max(MIN_GAIN, level * randomBetween(0.55, 1)), start + 0.004);
    gain.gain.exponentialRampToValueAtTime(MIN_GAIN, start + duration);
    osc.connect(gain);
    const echoNodes = connectWithEcho(audioContext, gain, destination, 'cricket', settings);
    osc.start(start);
    osc.stop(start + duration + 0.01);
    cleanupOnEnded(osc, [osc, gain, ...echoNodes], getEchoTail(settings, 'cricket'));
  }
}

export function playWindGustVoice(audioContext, destination, { time = audioContext.currentTime, amount } = {}, settings = DEFAULT_SOUND_SETTINGS) {
  const cfg = settings.windGust;
  if (!cfg.enabled) return;
  const noise = createNoiseSource(audioContext, 0.75, 'pink');
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const duration = randomBetween(cfg.durationMin, cfg.durationMax);
  const level = amount ?? cfg.amount;

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(cfg.filterStart + level * cfg.filterStartAmount, time);
  filter.frequency.exponentialRampToValueAtTime(cfg.filterEnd + level * cfg.filterEndAmount, time + duration * 0.45);
  gain.gain.setValueAtTime(MIN_GAIN, time);
  gain.gain.exponentialRampToValueAtTime(cfg.gainBase + level * cfg.gainAmount, time + 0.04);
  gain.gain.exponentialRampToValueAtTime(MIN_GAIN, time + duration);
  noise.connect(filter);
  filter.connect(gain);
  const echoNodes = connectWithEcho(audioContext, gain, destination, 'windGust', settings);
  noise.start(time);
  noise.stop(time + duration + 0.02);
  cleanupOnEnded(noise, [noise, filter, gain, ...echoNodes], getEchoTail(settings, 'windGust'));
}

export function playAmbientAccent(audioContext, destination, { progressRatio = 0 } = {}, settings = DEFAULT_SOUND_SETTINGS) {
  const now = audioContext.currentTime + randomBetween(0.01, 0.08);

  if (chance(0.55)) {
    playCricketVoice(audioContext, destination, { time: now, velocity: randomBetween(0.08, 0.2) }, settings);
    return;
  }

  if (progressRatio > 0.18 && chance(0.55)) {
    playFrogVoice(audioContext, destination, {
      time: now,
      pitch: pick(FROG_NOTES),
      velocity: randomBetween(0.12, 0.26)
    }, settings);
    return;
  }

  playChimeVoice(audioContext, destination, {
    time: now,
    note: pick(CHIME_NOTES),
    velocity: randomBetween(0.12, 0.28),
    force: randomBetween(-45, 45)
  }, settings);
}

export function playShrineIgniteVoice(audioContext, destination, { progress = 0, total = 1, isFinal = false } = {}, settings = DEFAULT_SOUND_SETTINGS) {
  const timing = settings.timing;
  const now = audioContext.currentTime + timing.shrineStartDelay;
  const ratio = clamp(progress / Math.max(1, total), 0, 1);
  const noteIndex = clamp(Math.round(ratio * (SCALE.length - 2) + randomBetween(-1.1, 1.1)), 0, SCALE.length - 1);

  playWoodfishVoice(audioContext, destination, {
    time: now + timing.woodfishDelay,
    pitch: pick(WOODFISH_NOTES),
    velocity: randomBetween(0.48, 0.78)
  }, settings);
  playRippleVoice(audioContext, destination, {
    time: now + randomBetween(timing.rippleDelayMin, timing.rippleDelayMax),
    note: SCALE[noteIndex],
    velocity: randomBetween(0.42, 0.68)
  }, settings);
  playChimeVoice(audioContext, destination, {
    time: now + randomBetween(timing.chimeOneDelayMin, timing.chimeOneDelayMax),
    note: pick(CHIME_NOTES),
    velocity: randomBetween(0.28, 0.52),
    force: randomBetween(-35, 35)
  }, settings);
  playChimeVoice(audioContext, destination, {
    time: now + randomBetween(timing.chimeTwoDelayMin, timing.chimeTwoDelayMax),
    note: CHIME_NOTES[clamp(Math.floor(ratio * CHIME_NOTES.length), 0, CHIME_NOTES.length - 1)],
    velocity: randomBetween(0.18, 0.42),
    force: randomBetween(-60, 60)
  }, settings);
  playWindGustVoice(audioContext, destination, {
    time: now + timing.windDelay,
    amount: isFinal ? 0.78 : randomBetween(0.34, 0.55)
  }, settings);

  if (chance(timing.cricketChance + ratio * timing.cricketProgressChance)) {
    playCricketVoice(audioContext, destination, {
      time: now + randomBetween(timing.cricketDelayMin, timing.cricketDelayMax),
      velocity: randomBetween(0.14, 0.28)
    }, settings);
  }

  if (chance(timing.frogChance + ratio * timing.frogProgressChance)) {
    playFrogVoice(audioContext, destination, {
      time: now + randomBetween(timing.frogDelayMin, timing.frogDelayMax),
      pitch: pick(FROG_NOTES),
      velocity: randomBetween(0.16, 0.34)
    }, settings);
  }

  if (isFinal) {
    ['C5', 'E5', 'G5', 'C6'].forEach((note, index) => {
      playChimeVoice(audioContext, destination, {
        time: now + timing.finalDelay + index * randomBetween(timing.finalSpacingMin, timing.finalSpacingMax),
        note,
        velocity: randomBetween(0.3, 0.55),
        force: randomBetween(-80, 80)
      }, settings);
    });
  }
}
