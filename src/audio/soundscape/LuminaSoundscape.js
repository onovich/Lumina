import { clamp, randomBetween } from './random.js';
import { DEFAULT_SOUND_SETTINGS, mergeSoundSettings } from './soundSettings.js';
import {
  createAmbientBed,
  createMasterBus,
  createSandFootstepLayer,
  playAmbientAccent,
  playChimeVoice,
  playCricketVoice,
  playFrogVoice,
  playRippleVoice,
  playShrineIgniteVoice,
  playWindGustVoice,
  playWoodfishVoice
} from './synthVoices.js';

export class LuminaSoundscape {
  constructor() {
    this.audioContext = null;
    this.masterBus = null;
    this.ambientBed = null;
    this.footstepLayer = null;
    this.settings = mergeSoundSettings(DEFAULT_SOUND_SETTINGS);
    this.isDisposed = false;
    this.isUnlocked = false;
    this.lastState = {
      playerSpeed: 0,
      progressRatio: 0,
      isWon: false
    };
    this.nextAccentAt = 0;
  }

  async unlock() {
    if (this.isDisposed || typeof window === 'undefined') {
      return false;
    }

    if (!this.audioContext) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        return false;
      }

      this.audioContext = new AudioContextClass();
      this.masterBus = createMasterBus(this.audioContext, this.settings);
      this.ambientBed = createAmbientBed(this.audioContext, this.masterBus.input, this.settings);
      this.footstepLayer = createSandFootstepLayer(this.audioContext, this.masterBus.input, this.settings);
      this.nextAccentAt = this.audioContext.currentTime + randomBetween(4, 9);
    }

    if (this.audioContext.state !== 'running') {
      await this.audioContext.resume();
    }

    this.isUnlocked = this.audioContext.state === 'running';
    this.ambientBed?.update(this.lastState, Date.now());
    return this.isUnlocked;
  }

  setSettings(settings) {
    this.settings = mergeSoundSettings(DEFAULT_SOUND_SETTINGS, settings);
    this.masterBus?.updateSettings(this.settings);
    this.ambientBed?.updateSettings(this.settings);
    this.footstepLayer?.updateSettings(this.settings);
  }

  update(nextState) {
    this.lastState = {
      playerSpeed: clamp(nextState.playerSpeed ?? this.lastState.playerSpeed, 0, 1),
      progressRatio: clamp(nextState.progressRatio ?? this.lastState.progressRatio, 0, 1),
      isWon: Boolean(nextState.isWon)
    };

    if (!this.isUnlocked || !this.ambientBed) {
      return;
    }

    this.ambientBed.update(this.lastState, Date.now(), this.settings);
    this.footstepLayer?.update(this.lastState, this.settings);

    const now = this.audioContext.currentTime;
    if (now >= this.nextAccentAt) {
      playAmbientAccent(this.audioContext, this.masterBus.input, {
        progressRatio: this.lastState.progressRatio
      }, this.settings);
      this.nextAccentAt = now + randomBetween(
        this.settings.timing.ambientAccentMin,
        this.settings.timing.ambientAccentMax
      ) * (1 - this.lastState.progressRatio * this.settings.timing.ambientProgressShorten);
    }
  }

  async playShrineIgnite(payload) {
    const unlocked = await this.unlock();
    if (!unlocked || !this.audioContext || !this.masterBus) {
      return;
    }

    playShrineIgniteVoice(this.audioContext, this.masterBus.input, payload, this.settings);
    this.ambientBed?.pulse(payload?.isFinal ? 0.78 : 0.45, this.settings);
  }

  async preview(effectId) {
    const unlocked = await this.unlock();
    if (!unlocked || !this.audioContext || !this.masterBus) {
      return;
    }

    const now = this.audioContext.currentTime;
    switch (effectId) {
      case 'shrine':
        playShrineIgniteVoice(this.audioContext, this.masterBus.input, {
          progress: Math.max(1, Math.round(this.lastState.progressRatio * 5)),
          total: 5,
          isFinal: false
        }, this.settings);
        this.ambientBed?.pulse(0.45, this.settings);
        break;
      case 'final':
        playShrineIgniteVoice(this.audioContext, this.masterBus.input, {
          progress: 5,
          total: 5,
          isFinal: true
        }, this.settings);
        this.ambientBed?.pulse(0.78, this.settings);
        break;
      case 'ripple':
        playRippleVoice(this.audioContext, this.masterBus.input, { time: now }, this.settings);
        break;
      case 'chime':
        playChimeVoice(this.audioContext, this.masterBus.input, { time: now, force: randomBetween(-45, 45) }, this.settings);
        break;
      case 'woodfish':
        playWoodfishVoice(this.audioContext, this.masterBus.input, { time: now }, this.settings);
        break;
      case 'frog':
        playFrogVoice(this.audioContext, this.masterBus.input, { time: now }, this.settings);
        break;
      case 'cricket':
        playCricketVoice(this.audioContext, this.masterBus.input, { time: now }, this.settings);
        break;
      case 'wind':
        playWindGustVoice(this.audioContext, this.masterBus.input, { time: now }, this.settings);
        break;
      case 'footstep':
        this.footstepLayer?.previewStep(this.settings);
        break;
      case 'footstepFade':
        this.footstepLayer?.previewFade(this.settings);
        break;
      case 'ambient':
        playAmbientAccent(this.audioContext, this.masterBus.input, {
          progressRatio: this.lastState.progressRatio
        }, this.settings);
        break;
      default:
        break;
    }
  }

  dispose() {
    this.isDisposed = true;
    this.ambientBed?.dispose();
    this.footstepLayer?.dispose();
    this.masterBus?.dispose();

    if (this.audioContext && this.audioContext.state !== 'closed') {
      void this.audioContext.close();
    }

    this.audioContext = null;
    this.masterBus = null;
    this.ambientBed = null;
    this.footstepLayer = null;
  }
}

export function createLuminaSoundscape() {
  return new LuminaSoundscape();
}
