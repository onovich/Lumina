import * as THREE from 'three';

const LOGIC_GRID_WIDTH = 200;
const PARTICLE_COUNT = 7200;
const TENTACLE_COUNT = 11;
const TENTACLE_SEGMENTS = 30;
const PARAM_LERP_SPEED = 0.045;

export const DEFAULT_BIONIC_SKY_CREATURE_SETTINGS = {
  evolutionSpeed: 0.46,
  pointMotion: 0.42,
  depth: 0.34,
  ripple: 0.32,
  pulse: 0.34,
  bodyWidth: 0.78,
  bodyHeight: 0.42,
  pointSize: 2.05,
  opacity: 0.54,
  scale: 0.98,
  swimRange: 0.72,
  swimSpeed: 0.58,
  swimEase: 0.012,
  tentacleMotion: 0.42,
  tentacleOpacity: 0.72,
  light: 0.78
};

const PRESETS = {
  classicFusion: {
    naoki_mix: 0.8,
    harmonics: 4,
    field_dist: 60,
    tentacles: 1,
    pulse: 1.2,
    asymmetry: 0.2,
    twist: 0.5,
    speed: 0.04,
    scale: 70
  },
  octopusMutation: {
    naoki_mix: 0.9,
    harmonics: 8,
    field_dist: 99,
    tentacles: 8,
    pulse: 0.6,
    asymmetry: 0.4,
    twist: 0.2,
    speed: 0.03,
    scale: 100
  },
  astralSpirit: {
    naoki_mix: 0.2,
    harmonics: 15,
    field_dist: 40,
    tentacles: 5,
    pulse: 2.0,
    asymmetry: 0.9,
    twist: 1.5,
    speed: 0.06,
    scale: 60
  },
  abyssVelvet: {
    naoki_mix: 0.5,
    harmonics: 2,
    field_dist: 120,
    tentacles: 12,
    pulse: 0.3,
    asymmetry: 0.1,
    twist: 0.05,
    speed: 0.02,
    scale: 130
  }
};

const COLOR_CYAN = [180 / 255, 230 / 255, 255 / 255];
const COLOR_PINK = [255 / 255, 175 / 255, 204 / 255];
const COLOR_GOLD = [255 / 255, 226 / 255, 150 / 255];

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function cloneParams(params) {
  return { ...params };
}

function blendParams(currentParams, targetParams, speed) {
  const nextParams = {};

  Object.keys(currentParams).forEach((key) => {
    nextParams[key] = lerp(currentParams[key], targetParams[key], speed);
  });

  return nextParams;
}

function mixParams(startParams, endParams, amount) {
  const mixed = {};
  const ratio = clamp(amount, 0, 1);

  Object.keys(startParams).forEach((key) => {
    mixed[key] = lerp(startParams[key], endParams[key], ratio);
  });

  return mixed;
}

function getSkyOrganismTargetParams(progressRatio, time) {
  const awakened = clamp(progressRatio, 0, 1);
  const octopusBlend = clamp(0.22 + awakened * 0.84 + Math.sin(time * 0.08) * 0.08, 0, 1);
  const astralBlend = 0.12 + awakened * 0.18 + (Math.sin(time * 0.045 + 1.8) + 1) * 0.07;
  const abyssBlend = awakened * 0.22;
  const octopusCore = mixParams(PRESETS.classicFusion, PRESETS.octopusMutation, octopusBlend);
  const astralCore = mixParams(octopusCore, PRESETS.astralSpirit, astralBlend);

  return mixParams(astralCore, PRESETS.abyssVelvet, abyssBlend);
}

function resolveSettings(settings = {}) {
  return { ...DEFAULT_BIONIC_SKY_CREATURE_SETTINGS, ...settings };
}

function writeBionicParticle({
  index,
  time,
  params,
  progressRatio,
  pulse,
  settings,
  positions,
  colors
}) {
  const gridX = index % LOGIC_GRID_WIDTH;
  const gridY = index / 40;

  const fieldX =
    6 *
    Math.cos(gridX / 14) *
    (1 - params.naoki_mix + params.naoki_mix * Math.cos(gridY / 30));
  const fieldY = gridY / 8 - 12;

  const naokiDistance = (fieldX * fieldX + fieldY * fieldY) / params.field_dist + 2;
  const originalDistance = (index / PARTICLE_COUNT) * 10 + 2;
  const distance = lerp(originalDistance, naokiDistance, params.naoki_mix);

  const angleBase = Math.atan2(fieldX, fieldY);
  const motionTime = time * settings.pointMotion;
  const naokiRadius =
    params.scale -
    5 * Math.sin(angleBase * params.tentacles) +
    fieldX * (3 + (5 / distance) * Math.sin(distance * distance - motionTime * 2.5));
  let originalRadius =
    params.scale + Math.sin(angleBase * params.harmonics + motionTime) * 20 * params.pulse;
  originalRadius += Math.cos(angleBase * 3 - motionTime) * 15 * params.asymmetry;
  const radius = lerp(originalRadius, naokiRadius, params.naoki_mix);

  const naokiPhase = distance / 2 + fieldY / 90 - motionTime / 15;
  const originalPhase = angleBase + Math.sin(distance + motionTime) * params.twist;
  const angle = lerp(originalPhase, naokiPhase, params.naoki_mix);

  let pointX = radius * Math.sin(angle);
  const pointY = (radius + distance * 10) * Math.cos(angle);
  pointX += Math.sin(index + motionTime * 2) * (1 - params.naoki_mix) * 3 * settings.ripple;

  const alpha = clamp(200 - (distance / 20) * 180, 20, 200);
  const alphaWeight = alpha / 200;
  const centerX = params.scale * (0.72 + params.naoki_mix * 0.14);
  const centerY = 12 + progressRatio * 10;
  const lowerDrift = clamp((-pointY + 35) / 150, 0, 1);
  const harmonicDepth =
    (Math.sin(index * 0.023 + motionTime * 1.5) * (2 + lowerDrift * 14) +
      Math.cos(angleBase * (2.4 + params.tentacles * 0.16) - motionTime * 0.9) * (4 + progressRatio * 8)) *
    settings.depth;

  const base = index * 3;
  const mirror = index % 2 === 0 ? 1 : -1;
  const centeredX = (pointX - centerX) * (0.86 + progressRatio * 0.1) * settings.bodyWidth;
  positions[base] = centeredX * mirror;
  positions[base + 1] =
    (pointY - centerY) * settings.bodyHeight +
    Math.sin(motionTime * 0.9 + distance * 0.55) * (1.4 + progressRatio * 2.4) * settings.ripple;
  positions[base + 2] = harmonicDepth * (0.72 + pulse * 0.08 * settings.pulse) + centeredX * mirror * 0.04;

  const hue = 0.5 + Math.sin(angleBase * params.harmonics + distance * 0.42 - motionTime) * 0.5;
  const pinkBlend = clamp(0.14 + hue * 0.42 + progressRatio * 0.18, 0, 0.82);
  const goldBlend = progressRatio * (0.08 + lowerDrift * 0.14);
  const cyanBlend = 1 - pinkBlend;
  const intensity = 0.28 + alphaWeight * 0.94 + pulse * 0.08 * settings.pulse;

  let red = COLOR_CYAN[0] * cyanBlend + COLOR_PINK[0] * pinkBlend;
  let green = COLOR_CYAN[1] * cyanBlend + COLOR_PINK[1] * pinkBlend;
  let blue = COLOR_CYAN[2] * cyanBlend + COLOR_PINK[2] * pinkBlend;

  red = lerp(red, COLOR_GOLD[0], goldBlend);
  green = lerp(green, COLOR_GOLD[1], goldBlend);
  blue = lerp(blue, COLOR_GOLD[2], goldBlend);

  colors[base] = red * intensity;
  colors[base + 1] = green * intensity;
  colors[base + 2] = blue * intensity;
}

function createTentacles(glowColor) {
  return Array.from({ length: TENTACLE_COUNT }, (_, index) => {
    const positions = new Float32Array(TENTACLE_SEGMENTS * 3);
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({
      color: glowColor,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const line = new THREE.Line(geometry, material);

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    return {
      line,
      geometry,
      material,
      positions,
      phase: index * 0.74
    };
  });
}

function updateTentacles(tentacles, time, params, progressRatio, pulse, settings) {
  const spread = 34 + params.scale * 0.28;
  const drop = 44 + params.scale * 0.34 + progressRatio * 20;
  const motionTime = time * settings.tentacleMotion;

  tentacles.forEach((tentacle, index) => {
    const side = TENTACLE_COUNT === 1 ? 0 : index / (TENTACLE_COUNT - 1) * 2 - 1;
    const rootX = side * spread + Math.sin(motionTime * 0.55 + tentacle.phase) * 3;
    const rootY = -10 - Math.abs(side) * 7;

    for (let segmentIndex = 0; segmentIndex < TENTACLE_SEGMENTS; segmentIndex += 1) {
      const p = segmentIndex / (TENTACLE_SEGMENTS - 1);
      const wave = Math.sin(motionTime * 0.95 + tentacle.phase + p * 5.8);
      const curl = Math.cos(motionTime * 0.72 + tentacle.phase * 1.7 + p * 4.6);
      const base = segmentIndex * 3;

      tentacle.positions[base] = rootX + wave * (3 + p * 10) + curl * p * 3.5;
      tentacle.positions[base + 1] = rootY - drop * p + Math.sin(motionTime * 0.8 + p * 7 + index) * p * 4;
      tentacle.positions[base + 2] = (curl * (2 + p * 20) + Math.sin(motionTime * 0.64 + p * 4) * p * 5) * settings.depth;
    }

    tentacle.material.opacity =
      (0.07 + pulse * 0.08 * settings.pulse + progressRatio * 0.04) *
      (1 - Math.abs(side) * 0.24) *
      settings.tentacleOpacity;
    tentacle.geometry.attributes.position.needsUpdate = true;
  });
}

export function createBionicSkyCreature({ scene, glowTexture, colors }) {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const particleColors = new Float32Array(PARTICLE_COUNT * 3);
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.PointsMaterial({
    map: glowTexture,
    size: 2.65,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.68,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const group = new THREE.Group();
  const points = new THREE.Points(geometry, material);
  const creatureLight = new THREE.PointLight(colors.blue, 0.62, 210, 2);
  const targetPosition = new THREE.Vector3();
  const tentacles = createTentacles(colors.blue);
  let currentParams = cloneParams(PRESETS.classicFusion);
  let fusionTime = 0;
  let swimTime = 0;
  let lastUpdateTime = 0;

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  group.position.set(0, 118, -235);
  group.add(points);
  group.add(creatureLight);
  tentacles.forEach((tentacle) => group.add(tentacle.line));
  scene.add(group);

  return {
    update(time, progressRatio = 0, rawSettings) {
      const settings = resolveSettings(rawSettings);
      const deltaFrames = lastUpdateTime === 0 ? 1 : clamp((time - lastUpdateTime) / 16.667, 0.4, 2.4);
      lastUpdateTime = time;
      swimTime += (deltaFrames / 60) * settings.swimSpeed;
      const seconds = swimTime;

      const targetParams = getSkyOrganismTargetParams(progressRatio, seconds);
      currentParams = blendParams(currentParams, targetParams, PARAM_LERP_SPEED);
      fusionTime += currentParams.speed * deltaFrames * settings.evolutionSpeed;

      const pulse = 0.5 + Math.sin(fusionTime * 6.8 * settings.pointMotion) * 0.5;
      for (let index = 0; index < PARTICLE_COUNT; index += 1) {
        writeBionicParticle({
          index,
          time: fusionTime,
          params: currentParams,
          progressRatio,
          pulse,
          settings,
          positions,
          colors: particleColors
        });
      }
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;
      updateTentacles(tentacles, fusionTime, currentParams, progressRatio, pulse, settings);

      targetPosition.set(
        (Math.sin(seconds * 0.035) * 155 + Math.sin(seconds * 0.097 + 1.3) * 42) * settings.swimRange,
        118 + (Math.sin(seconds * 0.041 + 0.6) * 16 + Math.sin(seconds * 0.13) * 5) * settings.swimRange,
        -225 + (Math.sin(seconds * 0.028) * 92 + Math.sin(seconds * 0.073 + 2.1) * 32) * settings.swimRange
      );
      group.position.lerp(targetPosition, settings.swimEase);
      group.rotation.set(
        Math.sin(seconds * 0.11) * 0.035 * settings.swimRange,
        Math.sin(seconds * 0.04 + 0.8) * 0.15 * settings.swimRange,
        Math.sin(seconds * 0.09) * 0.045 * settings.swimRange
      );
      group.scale.setScalar(settings.scale * (1.04 + progressRatio * 0.14 + pulse * 0.03 * settings.pulse));

      material.size = settings.pointSize + progressRatio * 0.48 + pulse * 0.16 * settings.pulse;
      material.opacity = settings.opacity + pulse * 0.1 * settings.pulse + progressRatio * 0.1;
      creatureLight.intensity = (0.32 + pulse * 0.26 * settings.pulse + progressRatio * 0.2) * settings.light;
    },
    dispose() {
      scene.remove(group);
      geometry.dispose();
      material.dispose();
      tentacles.forEach((tentacle) => {
        tentacle.geometry.dispose();
        tentacle.material.dispose();
      });
    }
  };
}
