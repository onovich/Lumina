import { clamp, jitter, randomBetween } from './random.js';

export function createMasterBus(audioContext) {
  const master = audioContext.createGain();
  const compressor = audioContext.createDynamicsCompressor();

  master.gain.value = 0.72;
  compressor.threshold.value = -18;
  compressor.knee.value = 18;
  compressor.ratio.value = 4;
  compressor.attack.value = 0.012;
  compressor.release.value = 0.24;

  master.connect(compressor);
  compressor.connect(audioContext.destination);

  return {
    input: master,
    dispose() {
      master.disconnect();
      compressor.disconnect();
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
    gain.gain.value = 0.015 - index * 0.003;
    osc.connect(gain);
    gain.connect(baseGain);
    osc.start();

    return { osc, gain, frequency };
  });

  const noise = createNoiseSource(audioContext, 2);
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
    update({ playerSpeed, progressRatio, isWon }, time) {
      const progress = clamp(progressRatio, 0, 1);
      const speed = clamp(playerSpeed, 0, 1);
      const shimmer = Math.sin(time * 0.00022) * 0.5 + 0.5;

      oscillators.forEach((voice, index) => {
        const targetFrequency = voice.frequency * (1 + progress * 0.12 + shimmer * 0.01 * (index + 1));
        voice.osc.frequency.setTargetAtTime(targetFrequency, audioContext.currentTime, 0.8);
        voice.gain.gain.setTargetAtTime((0.012 + progress * 0.014) / (index + 1), audioContext.currentTime, 0.45);
      });

      windGain.gain.setTargetAtTime(0.008 + speed * 0.035 + (isWon ? 0.02 : 0), audioContext.currentTime, 0.18);
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

export function playShrineIgniteVoice(audioContext, destination, { progress = 0, total = 1, isFinal = false } = {}) {
  const now = audioContext.currentTime;
  const ratio = clamp(progress / Math.max(1, total), 0, 1);
  const root = 174.61 * (1 + ratio * 0.4);
  const notes = isFinal
    ? [root, root * 1.5, root * 2, root * 2.5]
    : [root, root * 1.25, root * 1.5];
  const duration = isFinal ? 3.2 : 1.65;

  notes.forEach((frequency, index) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const start = now + index * 0.055;

    osc.type = index % 2 === 0 ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(jitter(frequency, 0.015), start);
    osc.frequency.exponentialRampToValueAtTime(jitter(frequency * (isFinal ? 2.1 : 1.42), 0.01), start + duration * 0.72);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(420 + ratio * 900, start);
    filter.frequency.exponentialRampToValueAtTime(4200 + ratio * 2600, start + duration * 0.62);

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.08 / (index + 1), start + 0.035);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(destination);
    osc.start(start);
    osc.stop(start + duration + 0.05);
    osc.addEventListener('ended', () => {
      osc.disconnect();
      filter.disconnect();
      gain.disconnect();
    }, { once: true });
  });

  playSparkNoise(audioContext, destination, now, ratio, isFinal);
}

function createNoiseSource(audioContext, seconds = 1) {
  const sampleCount = Math.max(1, Math.floor(audioContext.sampleRate * seconds));
  const buffer = audioContext.createBuffer(1, sampleCount, audioContext.sampleRate);
  const channel = buffer.getChannelData(0);
  let previous = 0;

  for (let i = 0; i < sampleCount; i += 1) {
    previous = previous * 0.92 + randomBetween(-1, 1) * 0.08;
    channel[i] = previous;
  }

  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  return source;
}

function playSparkNoise(audioContext, destination, startTime, progressRatio, isFinal) {
  const noise = createNoiseSource(audioContext, 0.6);
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const duration = isFinal ? 1.2 : 0.62;

  filter.type = 'bandpass';
  filter.Q.value = 8;
  filter.frequency.setValueAtTime(1600 + progressRatio * 800, startTime);
  filter.frequency.exponentialRampToValueAtTime(7200, startTime + duration * 0.7);

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(isFinal ? 0.06 : 0.038, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(destination);
  noise.start(startTime);
  noise.stop(startTime + duration + 0.02);
  noise.addEventListener('ended', () => {
    noise.disconnect();
    filter.disconnect();
    gain.disconnect();
  }, { once: true });
}
