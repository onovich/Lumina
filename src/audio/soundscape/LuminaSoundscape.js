import { clamp, randomBetween } from './random.js';
import {
  createAmbientBed,
  createMasterBus,
  createSandFootstepLayer,
  playAmbientAccent,
  playShrineIgniteVoice
} from './synthVoices.js';

export class LuminaSoundscape {
  constructor() {
    this.audioContext = null;
    this.masterBus = null;
    this.ambientBed = null;
    this.footstepLayer = null;
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
      this.masterBus = createMasterBus(this.audioContext);
      this.ambientBed = createAmbientBed(this.audioContext, this.masterBus.input);
      this.footstepLayer = createSandFootstepLayer(this.audioContext, this.masterBus.input);
      this.nextAccentAt = this.audioContext.currentTime + randomBetween(4, 9);
    }

    if (this.audioContext.state !== 'running') {
      await this.audioContext.resume();
    }

    this.isUnlocked = this.audioContext.state === 'running';
    this.ambientBed?.update(this.lastState, Date.now());
    return this.isUnlocked;
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

    this.ambientBed.update(this.lastState, Date.now());
    this.footstepLayer?.update(this.lastState);

    const now = this.audioContext.currentTime;
    if (now >= this.nextAccentAt) {
      playAmbientAccent(this.audioContext, this.masterBus.input, {
        progressRatio: this.lastState.progressRatio
      });
      this.nextAccentAt = now + randomBetween(4.5, 12) * (1 - this.lastState.progressRatio * 0.25);
    }
  }

  async playShrineIgnite(payload) {
    const unlocked = await this.unlock();
    if (!unlocked || !this.audioContext || !this.masterBus) {
      return;
    }

    playShrineIgniteVoice(this.audioContext, this.masterBus.input, payload);
    this.ambientBed?.pulse(payload?.isFinal ? 0.78 : 0.45);
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
