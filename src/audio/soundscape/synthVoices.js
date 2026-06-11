import { chance, clamp, jitter, pick, randomBetween } from './random.js';

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

function cleanupOnEnded(source, nodes) {
  source.addEventListener('ended', () => {
    nodes.forEach((node) => {
      try {
        node.disconnect();
      } catch {
        // Nodes can already be disconnected when React tears down the scene.
      }
    });
  }, { once: true });
}

function rampPercussive(gain, start, { peak, attack, decay, release, sustain = 0.08 }) {
  gain.setValueAtTime(MIN_GAIN, start);
  gain.exponentialRampToValueAtTime(Math.max(MIN_GAIN, peak), start + attack);
  gain.exponentialRampToValueAtTime(Math.max(MIN_GAIN, peak * sustain), start + attack + decay);
  gain.exponentialRampToValueAtTime(MIN_GAIN, start + attack + decay + release);
}

export function createMasterBus(audioContext) {
  const input = audioContext.createGain();
  const dry = audioContext.createGain();
  const delay = audioContext.createDelay(1.2);
  const feedback = audioContext.createGain();
  const delayReturn = audioContext.createGain();
  const convolver = audioContext.createConvolver();
  const reverbReturn = audioContext.createGain();
  const master = audioContext.createGain();
  const compressor = audioContext.createDynamicsCompressor();

  dry.gain.value = 0.72;
  delay.delayTime.value = 0.29;
  feedback.gain.value = 0.23;
  delayReturn.gain.value = 0.24;
  convolver.buffer = createImpulseResponse(audioContext);
  reverbReturn.gain.value = 0.34;
  master.gain.value = 0.78;
  compressor.threshold.value = -18;
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

export function createAmbientBed(audioContext, destination) {
  const baseGain = audioContext.createGain();
  const windGain = audioContext.createGain();
  const low = audioContext.createBiquadFilter();
  const high = audioContext.createBiquadFilter();
  const oscillators = [55, 82.5, 110].map((frequency, index) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = index === 1 ? 'triangle' : 'sine';
    osc.frequency.value = frequency;
    gain.gain.value = 0.012 - index * 0.003;
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
  windGain.gain.value = 0.01;

  noise.connect(high);
  high.connect(low);
  low.connect(windGain);
  baseGain.connect(destination);
  windGain.connect(destination);
  noise.start();

  return {
    pulse(amount = 0.45) {
      const now = audioContext.currentTime;
      windGain.gain.cancelScheduledValues(now);
      windGain.gain.setValueAtTime(Math.max(windGain.gain.value, 0.012 + amount * 0.08), now);
      windGain.gain.exponentialRampToValueAtTime(0.014, now + randomBetween(0.7, 1.25));
    },
    update({ playerSpeed, progressRatio, isWon }, time) {
      const progress = clamp(progressRatio, 0, 1);
      const speed = clamp(playerSpeed, 0, 1);
      const shimmer = Math.sin(time * 0.00022) * 0.5 + 0.5;

      oscillators.forEach((voice, index) => {
        const targetFrequency = voice.frequency * (1 + progress * 0.12 + shimmer * 0.01 * (index + 1));
        voice.osc.frequency.setTargetAtTime(targetFrequency, audioContext.currentTime, 0.8);
        voice.gain.gain.setTargetAtTime((0.01 + progress * 0.012) / (index + 1), audioContext.currentTime, 0.45);
      });

      windGain.gain.setTargetAtTime(0.008 + speed * 0.032 + (isWon ? 0.018 : 0), audioContext.currentTime, 0.18);
      low.frequency.setTargetAtTime(520 + speed * 1200 + progress * 380, audioContext.currentTime, 0.2);
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

export function createSandFootstepLayer(audioContext, destination) {
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
  rustleHigh.frequency.value = 260;
  rustleLow.type = 'lowpass';
  rustleLow.frequency.value = 1800;

  rustleNoise.connect(rustleHigh);
  rustleHigh.connect(rustleLow);
  rustleLow.connect(rustleGain);
  rustleGain.connect(movementGain);
  movementGain.connect(destination);
  rustleNoise.start();

  return {
    update({ playerSpeed }) {
      const now = audioContext.currentTime;
      const speed = clamp(playerSpeed, 0, 1);
      const isMoving = speed > 0.06;

      if (isMoving) {
        const target = 0.018 + speed * 0.032;
        movementGain.gain.cancelScheduledValues(now);
        movementGain.gain.setTargetAtTime(target, now, 0.055);
        rustleGain.gain.setTargetAtTime(0.18 + speed * 0.32, now, 0.08);
        rustleLow.frequency.setTargetAtTime(1200 + speed * 1200, now, 0.12);

        if (!wasMoving) {
          nextStepAt = now + randomBetween(0.04, 0.12);
        }

        if (now >= nextStepAt) {
          playSandStepVoice(audioContext, movementGain, {
            time: now,
            velocity: randomBetween(0.62, 0.95) * (0.65 + speed * 0.35)
          });
          const cadence = 0.52 - speed * 0.18;
          nextStepAt = now + randomBetween(cadence * 0.86, cadence * 1.16);
        }
      } else if (wasMoving) {
        movementGain.gain.cancelScheduledValues(now);
        movementGain.gain.setValueAtTime(Math.max(MIN_GAIN, movementGain.gain.value), now);
        movementGain.gain.linearRampToValueAtTime(MIN_GAIN, now + 0.5);
        rustleGain.gain.setTargetAtTime(MIN_GAIN, now, 0.16);
      }

      wasMoving = isMoving;
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

function playSandStepVoice(audioContext, destination, { time = audioContext.currentTime, velocity = 0.75 } = {}) {
  const scrapeNoise = createNoiseSource(audioContext, 0.16, 'pink', false);
  const scrapeHigh = audioContext.createBiquadFilter();
  const scrapeLow = audioContext.createBiquadFilter();
  const scrapeGain = audioContext.createGain();
  const thump = audioContext.createOscillator();
  const thumpGain = audioContext.createGain();
  const pan = audioContext.createStereoPanner?.();
  const output = pan ?? audioContext.createGain();
  const scrapeDuration = randomBetween(0.09, 0.16);
  const thumpDuration = randomBetween(0.055, 0.095);
  const scrapeStopAt = time + scrapeDuration + 0.01;
  const thumpStopAt = time + thumpDuration + 0.01;

  scrapeHigh.type = 'highpass';
  scrapeHigh.frequency.value = randomBetween(220, 420);
  scrapeLow.type = 'lowpass';
  scrapeLow.frequency.value = randomBetween(1350, 2400);
  scrapeLow.Q.value = randomBetween(0.6, 1.4);
  scrapeGain.gain.setValueAtTime(MIN_GAIN, time);
  scrapeGain.gain.exponentialRampToValueAtTime(0.18 * velocity, time + randomBetween(0.008, 0.016));
  scrapeGain.gain.exponentialRampToValueAtTime(MIN_GAIN, time + scrapeDuration);

  thump.type = 'sine';
  thump.frequency.setValueAtTime(randomBetween(65, 92), time);
  thump.frequency.exponentialRampToValueAtTime(randomBetween(42, 58), time + thumpDuration);
  thumpGain.gain.setValueAtTime(MIN_GAIN, time);
  thumpGain.gain.exponentialRampToValueAtTime(0.045 * velocity, time + 0.006);
  thumpGain.gain.exponentialRampToValueAtTime(MIN_GAIN, time + thumpDuration);

  if (pan) {
    pan.pan.setValueAtTime(randomBetween(-0.34, 0.34), time);
  }

  scrapeNoise.connect(scrapeHigh);
  scrapeHigh.connect(scrapeLow);
  scrapeLow.connect(scrapeGain);
  scrapeGain.connect(output);
  thump.connect(thumpGain);
  thumpGain.connect(output);
  output.connect(destination);
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
    output
  ]);
}

export function playRippleVoice(audioContext, destination, { time = audioContext.currentTime, note = pick(SCALE), velocity = 0.52 } = {}) {
  const carrier = audioContext.createOscillator();
  const modulator = audioContext.createOscillator();
  const modGain = audioContext.createGain();
  const gain = audioContext.createGain();
  const duration = jitter(1.9, 0.22);
  const frequency = noteToFrequency(note) * randomBetween(0.985, 1.018);

  carrier.type = 'sine';
  carrier.frequency.setValueAtTime(frequency, time);
  carrier.detune.setValueAtTime(randomBetween(-8, 8), time);
  modulator.type = 'triangle';
  modulator.frequency.setValueAtTime(frequency * randomBetween(2.6, 3.25), time);
  modGain.gain.setValueAtTime(frequency * randomBetween(1.1, 2.3), time);
  modGain.gain.exponentialRampToValueAtTime(frequency * 0.08, time + duration * 0.7);

  rampPercussive(gain.gain, time, {
    peak: velocity,
    attack: randomBetween(0.035, 0.07),
    decay: randomBetween(0.35, 0.58),
    release: randomBetween(1.1, 1.65),
    sustain: randomBetween(0.08, 0.16)
  });

  modulator.connect(modGain);
  modGain.connect(carrier.frequency);
  carrier.connect(gain);
  gain.connect(destination);
  carrier.start(time);
  modulator.start(time);
  carrier.stop(time + duration);
  modulator.stop(time + duration);
  cleanupOnEnded(carrier, [carrier, modulator, modGain, gain]);
}

export function playChimeVoice(audioContext, destination, { time = audioContext.currentTime, note = pick(CHIME_NOTES), velocity = 0.42, force = 0 } = {}) {
  const duration = jitter(1.55, 0.25);
  const baseFrequency = noteToFrequency(note) * randomBetween(0.98, 1.025);
  const gain = audioContext.createGain();
  const nodes = [gain];

  rampPercussive(gain.gain, time, {
    peak: velocity,
    attack: 0.002,
    decay: randomBetween(0.7, 1.05),
    release: randomBetween(0.42, 0.78),
    sustain: randomBetween(0.035, 0.08)
  });

  let cleanupSource = null;
  let latestStopAt = time;
  [1, 2.01, 2.98, 4.12, 5.43].forEach((ratio, index) => {
    const osc = audioContext.createOscillator();
    const partial = audioContext.createGain();
    const stopAt = time + duration + randomBetween(0, 0.14);
    osc.type = index % 2 === 0 ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(baseFrequency * ratio + force * 0.08, time);
    osc.detune.setValueAtTime(randomBetween(-14, 14), time);
    partial.gain.value = (1 / (index + 1)) * randomBetween(0.42, 0.9);
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

  gain.connect(destination);
  cleanupOnEnded(cleanupSource, nodes);
}

export function playWoodfishVoice(audioContext, destination, { time = audioContext.currentTime, pitch = pick(WOODFISH_NOTES), velocity = 0.64 } = {}) {
  const osc = audioContext.createOscillator();
  const noise = createNoiseSource(audioContext, 0.08);
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const noiseGain = audioContext.createGain();
  const duration = jitter(0.22, 0.22);
  const frequency = noteToFrequency(pitch) * randomBetween(1.35, 1.78);

  osc.type = 'sine';
  osc.frequency.setValueAtTime(frequency * randomBetween(1.05, 1.2), time);
  osc.frequency.exponentialRampToValueAtTime(frequency * randomBetween(0.38, 0.54), time + duration);
  filter.type = 'bandpass';
  filter.frequency.value = randomBetween(760, 1120);
  filter.Q.value = randomBetween(5, 9);
  noiseGain.gain.setValueAtTime(velocity * randomBetween(0.1, 0.2), time);
  noiseGain.gain.exponentialRampToValueAtTime(MIN_GAIN, time + randomBetween(0.035, 0.075));

  rampPercussive(gain.gain, time, {
    peak: velocity,
    attack: 0.001,
    decay: randomBetween(0.08, 0.15),
    release: randomBetween(0.07, 0.12),
    sustain: 0.01
  });

  osc.connect(gain);
  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(gain);
  gain.connect(destination);
  osc.start(time);
  noise.start(time);
  osc.stop(time + duration);
  noise.stop(time + 0.09);
  cleanupOnEnded(osc, [osc, noise, filter, gain, noiseGain]);
}

export function playFrogVoice(audioContext, destination, { time = audioContext.currentTime, pitch = pick(FROG_NOTES), velocity = 0.3 } = {}) {
  const osc = audioContext.createOscillator();
  const wobble = audioContext.createOscillator();
  const wobbleGain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const duration = jitter(0.48, 0.3);
  const frequency = noteToFrequency(pitch) * randomBetween(0.92, 1.08);

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(frequency * 0.72, time);
  osc.frequency.linearRampToValueAtTime(frequency * randomBetween(1.24, 1.62), time + duration * 0.33);
  osc.frequency.exponentialRampToValueAtTime(frequency * randomBetween(0.76, 0.95), time + duration);
  wobble.type = 'sine';
  wobble.frequency.value = randomBetween(18, 34);
  wobbleGain.gain.value = randomBetween(28, 52);
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(randomBetween(420, 680), time);
  filter.frequency.linearRampToValueAtTime(randomBetween(900, 1250), time + duration * 0.36);
  filter.frequency.exponentialRampToValueAtTime(randomBetween(260, 420), time + duration);
  filter.Q.value = randomBetween(4, 8);

  rampPercussive(gain.gain, time, {
    peak: velocity,
    attack: randomBetween(0.025, 0.06),
    decay: randomBetween(0.14, 0.24),
    release: randomBetween(0.12, 0.2),
    sustain: randomBetween(0.06, 0.13)
  });

  wobble.connect(wobbleGain);
  wobbleGain.connect(osc.frequency);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(destination);
  wobble.start(time);
  osc.start(time);
  wobble.stop(time + duration);
  osc.stop(time + duration);
  cleanupOnEnded(osc, [osc, wobble, wobbleGain, filter, gain]);
}

export function playCricketVoice(audioContext, destination, { time = audioContext.currentTime, velocity = 0.22 } = {}) {
  const count = Math.floor(randomBetween(2, 5));
  const baseFrequency = randomBetween(2600, 3900);

  for (let i = 0; i < count; i += 1) {
    const start = time + i * randomBetween(0.045, 0.074);
    const duration = randomBetween(0.026, 0.052);
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(baseFrequency * randomBetween(0.95, 1.08), start);
    osc.detune.setValueAtTime(randomBetween(-24, 24), start);
    gain.gain.setValueAtTime(MIN_GAIN, start);
    gain.gain.exponentialRampToValueAtTime(Math.max(MIN_GAIN, velocity * randomBetween(0.55, 1)), start + 0.004);
    gain.gain.exponentialRampToValueAtTime(MIN_GAIN, start + duration);
    osc.connect(gain);
    gain.connect(destination);
    osc.start(start);
    osc.stop(start + duration + 0.01);
    cleanupOnEnded(osc, [osc, gain]);
  }
}

export function playWindGustVoice(audioContext, destination, { time = audioContext.currentTime, amount = 0.5 } = {}) {
  const noise = createNoiseSource(audioContext, 0.75, 'pink');
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const duration = randomBetween(0.55, 1.1);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(420 + amount * 480, time);
  filter.frequency.exponentialRampToValueAtTime(1600 + amount * 1800, time + duration * 0.45);
  gain.gain.setValueAtTime(MIN_GAIN, time);
  gain.gain.exponentialRampToValueAtTime(0.03 + amount * 0.055, time + 0.04);
  gain.gain.exponentialRampToValueAtTime(MIN_GAIN, time + duration);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(destination);
  noise.start(time);
  noise.stop(time + duration + 0.02);
  cleanupOnEnded(noise, [noise, filter, gain]);
}

export function playAmbientAccent(audioContext, destination, { progressRatio = 0 } = {}) {
  const now = audioContext.currentTime + randomBetween(0.01, 0.08);

  if (chance(0.55)) {
    playCricketVoice(audioContext, destination, { time: now, velocity: randomBetween(0.08, 0.2) });
    return;
  }

  if (progressRatio > 0.18 && chance(0.55)) {
    playFrogVoice(audioContext, destination, {
      time: now,
      pitch: pick(FROG_NOTES),
      velocity: randomBetween(0.12, 0.26)
    });
    return;
  }

  playChimeVoice(audioContext, destination, {
    time: now,
    note: pick(CHIME_NOTES),
    velocity: randomBetween(0.12, 0.28),
    force: randomBetween(-45, 45)
  });
}

export function playShrineIgniteVoice(audioContext, destination, { progress = 0, total = 1, isFinal = false } = {}) {
  const now = audioContext.currentTime + randomBetween(0.004, 0.018);
  const ratio = clamp(progress / Math.max(1, total), 0, 1);
  const noteIndex = clamp(Math.round(ratio * (SCALE.length - 2) + randomBetween(-1.1, 1.1)), 0, SCALE.length - 1);

  playWoodfishVoice(audioContext, destination, {
    time: now,
    pitch: pick(WOODFISH_NOTES),
    velocity: randomBetween(0.48, 0.78)
  });
  playRippleVoice(audioContext, destination, {
    time: now + randomBetween(0.035, 0.075),
    note: SCALE[noteIndex],
    velocity: randomBetween(0.42, 0.68)
  });
  playChimeVoice(audioContext, destination, {
    time: now + randomBetween(0.1, 0.16),
    note: pick(CHIME_NOTES),
    velocity: randomBetween(0.28, 0.52),
    force: randomBetween(-35, 35)
  });
  playChimeVoice(audioContext, destination, {
    time: now + randomBetween(0.18, 0.32),
    note: CHIME_NOTES[clamp(Math.floor(ratio * CHIME_NOTES.length), 0, CHIME_NOTES.length - 1)],
    velocity: randomBetween(0.18, 0.42),
    force: randomBetween(-60, 60)
  });
  playWindGustVoice(audioContext, destination, {
    time: now,
    amount: isFinal ? 0.78 : randomBetween(0.34, 0.55)
  });

  if (chance(0.45 + ratio * 0.16)) {
    playCricketVoice(audioContext, destination, {
      time: now + randomBetween(0.24, 0.52),
      velocity: randomBetween(0.14, 0.28)
    });
  }

  if (chance(0.24 + ratio * 0.34)) {
    playFrogVoice(audioContext, destination, {
      time: now + randomBetween(0.12, 0.34),
      pitch: pick(FROG_NOTES),
      velocity: randomBetween(0.16, 0.34)
    });
  }

  if (isFinal) {
    ['C5', 'E5', 'G5', 'C6'].forEach((note, index) => {
      playChimeVoice(audioContext, destination, {
        time: now + 0.18 + index * randomBetween(0.045, 0.085),
        note,
        velocity: randomBetween(0.3, 0.55),
        force: randomBetween(-80, 80)
      });
    });
  }
}
