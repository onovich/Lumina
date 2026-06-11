export const DEFAULT_SOUND_SETTINGS = {
  master: {
    volume: 0.78,
    dry: 0.72,
    delayTime: 0.29,
    delayFeedback: 0.23,
    delayReturn: 0.24,
    reverbReturn: 0.34,
    compressorThreshold: -18
  },
  echo: {
    ripple: {
      level: 0.2,
      time: 0.34,
      feedback: 0.24,
      tone: 2600,
      tail: 1.35
    },
    chime: {
      level: 0.3,
      time: 0.42,
      feedback: 0.34,
      tone: 4200,
      tail: 2
    },
    woodfish: {
      level: 0.16,
      time: 0.13,
      feedback: 0.18,
      tone: 1800,
      tail: 0.75
    },
    frog: {
      level: 0.18,
      time: 0.27,
      feedback: 0.22,
      tone: 1400,
      tail: 1
    },
    cricket: {
      level: 0.12,
      time: 0.08,
      feedback: 0.28,
      tone: 5200,
      tail: 0.65
    },
    windGust: {
      level: 0.2,
      time: 0.48,
      feedback: 0.26,
      tone: 1900,
      tail: 1.8
    },
    footsteps: {
      level: 0.08,
      time: 0.11,
      feedback: 0.14,
      tone: 1200,
      tail: 0.55
    }
  },
  ambient: {
    droneVolume: 0.01,
    droneProgressLift: 0.012,
    dronePitchLift: 0.12,
    windBase: 0.008,
    windSpeedGain: 0.032,
    windWonBoost: 0.018,
    windLowBase: 520,
    windLowSpeed: 1200,
    windLowProgress: 380,
    pulseBase: 0.012,
    pulseAmount: 0.08,
    pulseReleaseMin: 0.7,
    pulseReleaseMax: 1.25
  },
  footsteps: {
    enabled: true,
    threshold: 0.06,
    layerBase: 0.018,
    layerSpeedGain: 0.032,
    layerAttack: 0.055,
    fadeOut: 0.5,
    rustleBase: 0.18,
    rustleSpeedGain: 0.32,
    rustleHighpass: 260,
    rustleLowBase: 1200,
    rustleLowSpeed: 1200,
    cadenceBase: 0.52,
    cadenceSpeed: 0.18,
    cadenceRandom: 0.16,
    velocityMin: 0.62,
    velocityMax: 0.95,
    scrapeGain: 0.18,
    scrapeDurationMin: 0.09,
    scrapeDurationMax: 0.16,
    scrapeHighpassMin: 220,
    scrapeHighpassMax: 420,
    scrapeLowpassMin: 1350,
    scrapeLowpassMax: 2400,
    thumpGain: 0.045,
    thumpDurationMin: 0.055,
    thumpDurationMax: 0.095,
    thumpFreqMin: 65,
    thumpFreqMax: 92,
    panSpread: 0.34,
    previewHold: 1.5
  },
  ripple: {
    enabled: true,
    velocity: 0.52,
    duration: 1.9,
    durationRandom: 0.22,
    attackMin: 0.035,
    attackMax: 0.07,
    decayMin: 0.35,
    decayMax: 0.58,
    releaseMin: 1.1,
    releaseMax: 1.65,
    sustainMin: 0.08,
    sustainMax: 0.16,
    harmonicityMin: 2.6,
    harmonicityMax: 3.25,
    modIndexMin: 1.1,
    modIndexMax: 2.3,
    detune: 8
  },
  chime: {
    enabled: true,
    velocity: 0.42,
    duration: 1.55,
    durationRandom: 0.25,
    decayMin: 0.7,
    decayMax: 1.05,
    releaseMin: 0.42,
    releaseMax: 0.78,
    sustainMin: 0.035,
    sustainMax: 0.08,
    partialGainMin: 0.42,
    partialGainMax: 0.9,
    detune: 14,
    forceBend: 0.08
  },
  woodfish: {
    enabled: true,
    velocity: 0.64,
    duration: 0.22,
    durationRandom: 0.22,
    pitchMin: 1.35,
    pitchMax: 1.78,
    pitchDropMin: 0.38,
    pitchDropMax: 0.54,
    noiseMin: 0.1,
    noiseMax: 0.2,
    noiseFilterMin: 760,
    noiseFilterMax: 1120,
    releaseMin: 0.07,
    releaseMax: 0.12
  },
  frog: {
    enabled: true,
    velocity: 0.3,
    duration: 0.48,
    durationRandom: 0.3,
    bendStart: 0.72,
    bendPeakMin: 1.24,
    bendPeakMax: 1.62,
    bendEndMin: 0.76,
    bendEndMax: 0.95,
    wobbleRateMin: 18,
    wobbleRateMax: 34,
    wobbleDepthMin: 28,
    wobbleDepthMax: 52,
    filterStartMin: 420,
    filterStartMax: 680,
    filterPeakMin: 900,
    filterPeakMax: 1250,
    filterEndMin: 260,
    filterEndMax: 420
  },
  cricket: {
    enabled: true,
    velocity: 0.22,
    countMin: 2,
    countMax: 5,
    frequencyMin: 2600,
    frequencyMax: 3900,
    chirpGapMin: 0.045,
    chirpGapMax: 0.074,
    durationMin: 0.026,
    durationMax: 0.052,
    detune: 24
  },
  windGust: {
    enabled: true,
    amount: 0.5,
    durationMin: 0.55,
    durationMax: 1.1,
    gainBase: 0.03,
    gainAmount: 0.055,
    filterStart: 420,
    filterStartAmount: 480,
    filterEnd: 1600,
    filterEndAmount: 1800
  },
  timing: {
    shrineStartDelay: 0.004,
    woodfishDelay: 0,
    rippleDelayMin: 0.035,
    rippleDelayMax: 0.075,
    chimeOneDelayMin: 0.1,
    chimeOneDelayMax: 0.16,
    chimeTwoDelayMin: 0.18,
    chimeTwoDelayMax: 0.32,
    windDelay: 0,
    cricketChance: 0.45,
    cricketProgressChance: 0.16,
    cricketDelayMin: 0.24,
    cricketDelayMax: 0.52,
    frogChance: 0.24,
    frogProgressChance: 0.34,
    frogDelayMin: 0.12,
    frogDelayMax: 0.34,
    finalDelay: 0.18,
    finalSpacingMin: 0.045,
    finalSpacingMax: 0.085,
    ambientAccentMin: 4.5,
    ambientAccentMax: 12,
    ambientProgressShorten: 0.25
  }
};

export const SOUND_PREVIEW_OPTIONS = [
  { id: 'shrine', label: 'Shrine' },
  { id: 'final', label: 'Final' },
  { id: 'ripple', label: 'Ripple' },
  { id: 'chime', label: 'Chime' },
  { id: 'woodfish', label: 'Woodfish' },
  { id: 'frog', label: 'Frog' },
  { id: 'cricket', label: 'Cricket' },
  { id: 'wind', label: 'Wind' },
  { id: 'footstep', label: 'Step' },
  { id: 'footstepFade', label: 'Stop Fade' },
  { id: 'ambient', label: 'Accent' }
];

export const SOUND_TUNING_GROUPS = [
  {
    id: 'mix',
    label: 'Mix',
    sections: [
      {
        title: 'Master',
        controls: [
          range('master.volume', 'Master', 0, 1.2, 0.01, 2),
          range('master.dry', 'Dry', 0, 1.2, 0.01, 2),
          range('master.delayTime', 'Delay Time', 0.05, 0.8, 0.01, 2),
          range('master.delayFeedback', 'Feedback', 0, 0.75, 0.01, 2),
          range('master.delayReturn', 'Delay Return', 0, 0.8, 0.01, 2),
          range('master.reverbReturn', 'Reverb', 0, 0.9, 0.01, 2),
          range('master.compressorThreshold', 'Comp Thresh', -36, -6, 1, 0)
        ]
      },
      {
        title: 'Ambient',
        controls: [
          range('ambient.droneVolume', 'Drone', 0, 0.05, 0.001, 3),
          range('ambient.windBase', 'Wind Base', 0, 0.08, 0.001, 3),
          range('ambient.windSpeedGain', 'Wind Speed', 0, 0.12, 0.001, 3),
          range('ambient.windWonBoost', 'Win Boost', 0, 0.08, 0.001, 3),
          range('ambient.pulseAmount', 'Pulse', 0, 0.16, 0.005, 3)
        ]
      }
    ]
  },
  {
    id: 'echo',
    label: 'Echo',
    sections: [
      echoSection('Ripple', 'ripple'),
      echoSection('Chime', 'chime'),
      echoSection('Woodfish', 'woodfish'),
      echoSection('Frog', 'frog'),
      echoSection('Cricket', 'cricket'),
      echoSection('Wind Gust', 'windGust'),
      echoSection('Sand Steps', 'footsteps')
    ]
  },
  {
    id: 'voices',
    label: 'Voices',
    sections: [
      {
        title: 'Ripple',
        controls: [
          toggle('ripple.enabled', 'Enabled'),
          range('ripple.velocity', 'Level', 0, 1, 0.01, 2),
          range('ripple.duration', 'Duration', 0.4, 4, 0.05, 2),
          range('ripple.releaseMax', 'Tail Max', 0.2, 3, 0.05, 2),
          range('ripple.harmonicityMin', 'Harm Min', 1, 5, 0.05, 2),
          range('ripple.harmonicityMax', 'Harm Max', 1, 6, 0.05, 2),
          range('ripple.modIndexMax', 'Mod Max', 0.2, 5, 0.05, 2)
        ]
      },
      {
        title: 'Chime',
        controls: [
          toggle('chime.enabled', 'Enabled'),
          range('chime.velocity', 'Level', 0, 1, 0.01, 2),
          range('chime.duration', 'Duration', 0.3, 4, 0.05, 2),
          range('chime.partialGainMax', 'Partials', 0.1, 1.4, 0.01, 2),
          range('chime.detune', 'Detune', 0, 40, 1, 0),
          range('chime.forceBend', 'Force Bend', 0, 0.3, 0.005, 3)
        ]
      },
      {
        title: 'Woodfish',
        controls: [
          toggle('woodfish.enabled', 'Enabled'),
          range('woodfish.velocity', 'Level', 0, 1, 0.01, 2),
          range('woodfish.duration', 'Duration', 0.06, 0.8, 0.01, 2),
          range('woodfish.noiseMax', 'Click Noise', 0, 0.5, 0.01, 2),
          range('woodfish.noiseFilterMin', 'Filter Min', 240, 2200, 20, 0),
          range('woodfish.noiseFilterMax', 'Filter Max', 300, 3200, 20, 0)
        ]
      },
      {
        title: 'Frog',
        controls: [
          toggle('frog.enabled', 'Enabled'),
          range('frog.velocity', 'Level', 0, 1, 0.01, 2),
          range('frog.duration', 'Duration', 0.12, 1.4, 0.01, 2),
          range('frog.wobbleRateMax', 'Wobble Rate', 8, 60, 1, 0),
          range('frog.wobbleDepthMax', 'Wobble Depth', 5, 90, 1, 0),
          range('frog.filterPeakMax', 'Filter Peak', 400, 2400, 20, 0)
        ]
      },
      {
        title: 'Cricket',
        controls: [
          toggle('cricket.enabled', 'Enabled'),
          range('cricket.velocity', 'Level', 0, 0.7, 0.01, 2),
          range('cricket.countMin', 'Count Min', 1, 8, 1, 0),
          range('cricket.countMax', 'Count Max', 1, 10, 1, 0),
          range('cricket.frequencyMin', 'Freq Min', 1200, 5200, 50, 0),
          range('cricket.frequencyMax', 'Freq Max', 1800, 6800, 50, 0)
        ]
      }
    ]
  },
  {
    id: 'motion',
    label: 'Motion',
    sections: [
      {
        title: 'Sand Steps',
        controls: [
          toggle('footsteps.enabled', 'Enabled'),
          range('footsteps.threshold', 'Start Gate', 0, 0.3, 0.005, 3),
          range('footsteps.layerBase', 'Bed Base', 0, 0.08, 0.001, 3),
          range('footsteps.layerSpeedGain', 'Bed Speed', 0, 0.12, 0.001, 3),
          range('footsteps.fadeOut', 'Stop Fade', 0.05, 2, 0.05, 2),
          range('footsteps.cadenceBase', 'Cadence', 0.2, 1.1, 0.01, 2),
          range('footsteps.cadenceSpeed', 'Speed Pull', 0, 0.45, 0.01, 2),
          range('footsteps.scrapeGain', 'Scrape', 0, 0.5, 0.01, 2),
          range('footsteps.thumpGain', 'Thump', 0, 0.18, 0.005, 3),
          range('footsteps.panSpread', 'Pan', 0, 1, 0.01, 2),
          range('footsteps.previewHold', 'Preview Hold', 0.3, 4, 0.1, 1)
        ]
      },
      {
        title: 'Wind Gust',
        controls: [
          toggle('windGust.enabled', 'Enabled'),
          range('windGust.amount', 'Amount', 0, 1.2, 0.01, 2),
          range('windGust.durationMin', 'Dur Min', 0.2, 2, 0.05, 2),
          range('windGust.durationMax', 'Dur Max', 0.2, 3, 0.05, 2),
          range('windGust.gainBase', 'Gain Base', 0, 0.12, 0.005, 3),
          range('windGust.gainAmount', 'Gain Amt', 0, 0.16, 0.005, 3)
        ]
      }
    ]
  },
  {
    id: 'timing',
    label: 'Timing',
    sections: [
      {
        title: 'Shrine Chain',
        controls: [
          range('timing.shrineStartDelay', 'Start Delay', 0, 0.2, 0.005, 3),
          range('timing.rippleDelayMin', 'Ripple Min', 0, 0.6, 0.005, 3),
          range('timing.rippleDelayMax', 'Ripple Max', 0, 0.8, 0.005, 3),
          range('timing.chimeOneDelayMin', 'Chime1 Min', 0, 0.8, 0.005, 3),
          range('timing.chimeOneDelayMax', 'Chime1 Max', 0, 1, 0.005, 3),
          range('timing.chimeTwoDelayMin', 'Chime2 Min', 0, 1.2, 0.005, 3),
          range('timing.chimeTwoDelayMax', 'Chime2 Max', 0, 1.5, 0.005, 3)
        ]
      },
      {
        title: 'Chance And Ambient',
        controls: [
          range('timing.cricketChance', 'Cricket %', 0, 1, 0.01, 2),
          range('timing.frogChance', 'Frog %', 0, 1, 0.01, 2),
          range('timing.finalDelay', 'Final Delay', 0, 1, 0.01, 2),
          range('timing.finalSpacingMin', 'Final Gap Min', 0.01, 0.4, 0.005, 3),
          range('timing.finalSpacingMax', 'Final Gap Max', 0.01, 0.6, 0.005, 3),
          range('timing.ambientAccentMin', 'Accent Min', 1, 20, 0.5, 1),
          range('timing.ambientAccentMax', 'Accent Max', 2, 40, 0.5, 1)
        ]
      }
    ]
  }
];

function echoSection(title, key) {
  return {
    title,
    controls: [
      range(`echo.${key}.level`, 'Return', 0, 0.9, 0.01, 2),
      range(`echo.${key}.time`, 'Time', 0.03, 1.2, 0.01, 2),
      range(`echo.${key}.feedback`, 'Feedback', 0, 0.85, 0.01, 2),
      range(`echo.${key}.tone`, 'Tone', 400, 9000, 50, 0),
      range(`echo.${key}.tail`, 'Tail', 0, 4, 0.05, 2)
    ]
  };
}

function range(path, label, min, max, step, precision) {
  return { type: 'range', path, label, min, max, step, precision };
}

function toggle(path, label) {
  return { type: 'toggle', path, label };
}

export function mergeSoundSettings(base = DEFAULT_SOUND_SETTINGS, patch = {}) {
  return deepMerge(base, patch);
}

export function cloneSoundSettings(settings = DEFAULT_SOUND_SETTINGS) {
  return deepMerge({}, settings);
}

function deepMerge(base, patch) {
  const output = Array.isArray(base) ? [...base] : { ...base };

  Object.entries(patch ?? {}).forEach(([key, value]) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      output[key] = deepMerge(output[key] ?? {}, value);
    } else {
      output[key] = value;
    }
  });

  return output;
}
