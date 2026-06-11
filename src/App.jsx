import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  SOUND_PREVIEW_OPTIONS,
  SOUND_TUNING_GROUPS,
  cloneSoundSettings,
  createLuminaSoundscape
} from './audio/soundscape';
import {
  DEFAULT_BIONIC_SKY_CREATURE_SETTINGS,
  createBionicSkyCreature
} from './visuals/bionicSkyCreature';

const INITIAL_FLOCK_SETTINGS = {
  shrineAirLift: 12,
  startShrineAirLift: 10,
  orbitRadius: 10.5,
  orbitVerticalSpan: 2.6,
  orbitSpeed: 0.001,
  orbitHoldDistance: 48,
  perceptionRadius: 22,
  minSpeed: 0.18,
  maxSpeed: 0.38,
  cohesionWeight: 0.024,
  alignmentWeight: 0.032,
  separationWeight: 0.088,
  targetWeight: 0.068,
  noiseWeight: 0.01,
  groundClearance: 8
};

const INITIAL_LIGHT_SETTINGS = {
  intensity: 0.32,
  distance: 18,
  decay: 2,
  pulse: 0.12
};

const FLOCK_CONTROL_FIELDS = [
  { key: 'orbitRadius', label: 'Orbit Radius', min: 7, max: 16, step: 0.1, precision: 1 },
  { key: 'orbitVerticalSpan', label: 'Orbit Height', min: 1.2, max: 5, step: 0.1, precision: 1 },
  { key: 'perceptionRadius', label: 'Perception', min: 10, max: 30, step: 0.5, precision: 1 },
  { key: 'cohesionWeight', label: 'Cohesion', min: 0.004, max: 0.05, step: 0.001, precision: 3 },
  { key: 'alignmentWeight', label: 'Alignment', min: 0.004, max: 0.05, step: 0.001, precision: 3 },
  { key: 'separationWeight', label: 'Separation', min: 0.03, max: 0.18, step: 0.002, precision: 3 },
  { key: 'targetWeight', label: 'Target Pull', min: 0.02, max: 0.12, step: 0.001, precision: 3 },
  { key: 'noiseWeight', label: 'Noise', min: 0, max: 0.04, step: 0.001, precision: 3 },
  { key: 'minSpeed', label: 'Min Speed', min: 0.08, max: 0.3, step: 0.01, precision: 2 },
  { key: 'maxSpeed', label: 'Max Speed', min: 0.24, max: 0.6, step: 0.01, precision: 2 }
];

const LIGHT_CONTROL_FIELDS = [
  { key: 'intensity', label: 'Light Intensity', min: 0, max: 0.8, step: 0.01, precision: 2 },
  { key: 'distance', label: 'Light Distance', min: 6, max: 28, step: 0.5, precision: 1 },
  { key: 'decay', label: 'Light Decay', min: 1, max: 3, step: 0.1, precision: 1 },
  { key: 'pulse', label: 'Pulse', min: 0, max: 0.35, step: 0.01, precision: 2 }
];

const INITIAL_CREATURE_SETTINGS = { ...DEFAULT_BIONIC_SKY_CREATURE_SETTINGS };

const CREATURE_CONTROL_SECTIONS = [
  {
    title: 'Stability',
    accent: 'accent-teal-300',
    fields: [
      { key: 'evolutionSpeed', label: 'Evolution', min: 0.08, max: 1.2, step: 0.01, precision: 2 },
      { key: 'pointMotion', label: 'Point Motion', min: 0.05, max: 1.2, step: 0.01, precision: 2 },
      { key: 'depth', label: 'Depth Drift', min: 0, max: 1.2, step: 0.01, precision: 2 },
      { key: 'ripple', label: 'Ripple', min: 0, max: 1.2, step: 0.01, precision: 2 }
    ]
  },
  {
    title: 'Body',
    accent: 'accent-sky-300',
    fields: [
      { key: 'pulse', label: 'Pulse', min: 0, max: 1.2, step: 0.01, precision: 2 },
      { key: 'bodyWidth', label: 'Width', min: 0.45, max: 1.45, step: 0.01, precision: 2 },
      { key: 'bodyHeight', label: 'Height', min: 0.24, max: 0.72, step: 0.01, precision: 2 },
      { key: 'scale', label: 'Scale', min: 0.72, max: 1.4, step: 0.01, precision: 2 },
      { key: 'pointSize', label: 'Point Size', min: 0.8, max: 4.2, step: 0.01, precision: 2 },
      { key: 'opacity', label: 'Opacity', min: 0.12, max: 0.9, step: 0.01, precision: 2 }
    ]
  },
  {
    title: 'Swim',
    accent: 'accent-indigo-300',
    fields: [
      { key: 'swimRange', label: 'Range', min: 0, max: 1.5, step: 0.01, precision: 2 },
      { key: 'swimSpeed', label: 'Speed', min: 0, max: 1.4, step: 0.01, precision: 2 },
      { key: 'swimEase', label: 'Ease', min: 0.002, max: 0.06, step: 0.001, precision: 3 }
    ]
  },
  {
    title: 'Tendrils',
    accent: 'accent-violet-300',
    fields: [
      { key: 'tentacleMotion', label: 'Motion', min: 0, max: 1.4, step: 0.01, precision: 2 },
      { key: 'tentacleOpacity', label: 'Opacity', min: 0, max: 1.2, step: 0.01, precision: 2 },
      { key: 'light', label: 'Light', min: 0, max: 1.4, step: 0.01, precision: 2 }
    ]
  }
];

const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1']);

const getPathValue = (source, path) => path
  .split('.')
  .reduce((value, key) => value?.[key], source);

const updatePathValue = (source, path, value) => {
  const keys = path.split('.');
  const next = { ...source };
  let cursor = next;

  keys.slice(0, -1).forEach((key) => {
    cursor[key] = { ...cursor[key] };
    cursor = cursor[key];
  });

  cursor[keys.at(-1)] = value;
  return next;
};

const App = () => {
  const containerRef = useRef();
  const [progress, setProgress] = useState(0);
  const [total, setTotal] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isAiming, setIsAiming] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [flockSettings, setFlockSettings] = useState(INITIAL_FLOCK_SETTINGS);
  const [lightSettings, setLightSettings] = useState(INITIAL_LIGHT_SETTINGS);
  const [creatureSettings, setCreatureSettings] = useState(INITIAL_CREATURE_SETTINGS);
  const [soundSettings, setSoundSettings] = useState(() => cloneSoundSettings());
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isCreaturePanelOpen, setIsCreaturePanelOpen] = useState(false);
  const [isSoundPanelOpen, setIsSoundPanelOpen] = useState(false);
  const [soundPanelGroup, setSoundPanelGroup] = useState(SOUND_TUNING_GROUPS[0].id);
  const flockSettingsRef = useRef(INITIAL_FLOCK_SETTINGS);
  const lightSettingsRef = useRef(INITIAL_LIGHT_SETTINGS);
  const creatureSettingsRef = useRef(INITIAL_CREATURE_SETTINGS);
  const soundSettingsRef = useRef(soundSettings);
  const soundscapeRef = useRef(null);

  // 核心配置
  const CONFIG = {
    worldSize: 500,
    segments: 100,
    obeliskHeight: 85,
    playerHeight: 2.2,
    moveSpeed: 0.38,
    gravity: 0.008,
    interactDist: 15,
    obeliskCount: 5,
    fireflyCount: 20,
    trailLength: 50 
  };

  const COLORS = {
    skyTwilight: 0x0f172a,
    fogColor: 0x020617,
    snow: new THREE.Color(0x222226),
    pink: new THREE.Color(0xffafcc),
    blue: new THREE.Color(0xa2d2ff),
    glow: 0x60a5fa,
    fire: 0xef4444
  };

  const isLocalPreview = typeof window !== 'undefined' && LOCAL_HOSTS.has(window.location.hostname);

  useEffect(() => {
    flockSettingsRef.current = flockSettings;
  }, [flockSettings]);

  useEffect(() => {
    lightSettingsRef.current = lightSettings;
  }, [lightSettings]);

  useEffect(() => {
    creatureSettingsRef.current = creatureSettings;
  }, [creatureSettings]);

  useEffect(() => {
    soundSettingsRef.current = soundSettings;
    soundscapeRef.current?.setSettings(soundSettings);
  }, [soundSettings]);

  const updateFlockSetting = (key, value) => {
    setFlockSettings(prev => ({ ...prev, [key]: value }));
  };

  const updateLightSetting = (key, value) => {
    setLightSettings(prev => ({ ...prev, [key]: value }));
  };

  const updateCreatureSetting = (key, value) => {
    setCreatureSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetTuning = () => {
    setFlockSettings(INITIAL_FLOCK_SETTINGS);
    setLightSettings(INITIAL_LIGHT_SETTINGS);
  };

  const resetCreatureSettings = () => {
    setCreatureSettings(INITIAL_CREATURE_SETTINGS);
  };

  const updateSoundSetting = (path, value) => {
    setSoundSettings(prev => updatePathValue(prev, path, value));
  };

  const resetSoundSettings = () => {
    setSoundSettings(cloneSoundSettings());
  };

  const previewSound = (effectId) => {
    void soundscapeRef.current?.preview(effectId);
  };

  const formatPanelValue = (value, precision) => Number(value).toFixed(precision);
  const activeSoundGroup = SOUND_TUNING_GROUPS.find(group => group.id === soundPanelGroup) ?? SOUND_TUNING_GROUPS[0];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    const updateInputMode = () => {
      setIsTouchDevice(mediaQuery.matches || navigator.maxTouchPoints > 0);
    };

    updateInputMode();
    mediaQuery.addEventListener?.('change', updateInputMode);

    return () => {
      mediaQuery.removeEventListener?.('change', updateInputMode);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    let animationFrameId = 0;
    let disposed = false;
    const soundscape = createLuminaSoundscape();
    soundscapeRef.current = soundscape;
    soundscape.setSettings(soundSettingsRef.current);

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    // --- 1. 场景基础 ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(COLORS.skyTwilight);
    scene.fog = new THREE.FogExp2(COLORS.fogColor, 0.006);
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x111122, 1.1);
    scene.add(hemisphereLight);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- 2. 模拟 Bloom 的辉光纹理生成 ---
    const createGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64; canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };
    const glowTex = createGlowTexture();

    // --- 3. 地形系统 ---
    const getH = (x, z) => {
      const s1 = Math.sin(x * 0.045) * Math.cos(z * 0.045) * 2.8;
      const s2 = Math.cos(x * 0.02 + z * 0.03) * 3.5;
      return s1 + s2;
    };

    const geometry = new THREE.PlaneGeometry(1200, 1200, CONFIG.segments, CONFIG.segments);
    geometry.rotateX(-Math.PI / 2);
    const positions = geometry.attributes.position.array;
    const colors = [];
    for (let i = 0; i < positions.length / 3; i++) {
      const x = positions[i * 3];
      const z = positions[i * 3 + 2];
      const h = getH(x, z);
      positions[i * 3 + 1] = h;
      const c = COLORS.snow.clone().multiplyScalar(0.4 + h * 0.1);
      colors.push(c.r, c.g, c.b);
    }
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const terrainMaterial = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1.0 });
    const terrain = new THREE.Mesh(geometry, terrainMaterial);
    scene.add(terrain);

    // --- 4. 目标方尖碑与辉光 ---
    const player = { pos: new THREE.Vector3(0, 10, 20), vel: new THREE.Vector3(), yaw: 0, pitch: 0 };
    const obeliskGroups = [];
    const interactables = [];
    const particles = [];

    const createBloomSprite = (color, size) => {
      const mat = new THREE.SpriteMaterial({ 
        map: glowTex, color: color, transparent: true, opacity: 0, blending: THREE.AdditiveBlending 
      });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(size, size, 1);
      return sprite;
    };

    const generateObelisks = () => {
      const locs = [];
      for(let i=0; i<CONFIG.obeliskCount; i++) {
        let x, z;
        do {
          x = (Math.random() - 0.5) * CONFIG.worldSize;
          z = (Math.random() - 0.5) * CONFIG.worldSize;
        } while (Math.hypot(x, z) < 100 || locs.some(l => Math.hypot(l.x - x, l.z - z) < 130));
        locs.push({ x, z });
      }
      setTotal(CONFIG.obeliskCount);
      return locs;
    };

    const setupShrine = (x, z, isStart = false) => {
      const h = getH(x, z);
      const group = new THREE.Group();
      group.position.set(x, h, z);

      if (!isStart) {
        const pillar = new THREE.Mesh(
          new THREE.BoxGeometry(5.5, CONFIG.obeliskHeight, 5.5),
          new THREE.MeshStandardMaterial({ color: 0x010101 })
        );
        pillar.position.y = CONFIG.obeliskHeight / 2 - 2;
        group.add(pillar);

        const tip = new THREE.Mesh(new THREE.OctahedronGeometry(2.5), new THREE.MeshStandardMaterial({ color: 0x111111 }));
        tip.position.y = CONFIG.obeliskHeight + 2;
        group.add(tip);

        // 顶端辉光
        const tipGlow = createBloomSprite(COLORS.blue, 15);
        tipGlow.position.y = CONFIG.obeliskHeight + 2;
        group.add(tipGlow);

        const shrine = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshStandardMaterial({ color: 0x080808 }));
        shrine.position.set(0, 1.5, 12);
        shrine.userData = { id: obeliskGroups.length };
        group.add(shrine);
        interactables.push(shrine);
        const flock = flockSettingsRef.current;
        const shrinePos = new THREE.Vector3(x, h + 1.5, z + 12);
        const shrineAirPos = shrinePos.clone().add(new THREE.Vector3(0, flock.shrineAirLift, 0));

        // 神龛辉光
        const shrineGlow = createBloomSprite(COLORS.pink, 12);
        shrineGlow.position.set(0, 3, 12);
        group.add(shrineGlow);

        scene.add(group);
        obeliskGroups.push({ pillar, shrine, tipGlow, shrineGlow, pos: new THREE.Vector3(x, h, z), tipPos: new THREE.Vector3(x, h + CONFIG.obeliskHeight + 2, z), shrinePos, shrineAirPos, activated: false });
      } else {
        const startShrine = new THREE.Mesh(new THREE.BoxGeometry(3.5, 3.5, 3.5), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2.0 }));
        startShrine.position.set(0, 1.75, 0);
        group.add(startShrine);
        const glow = createBloomSprite(0xffffff, 20);
        glow.position.y = 3;
        glow.material.opacity = 0.5;
        group.add(glow);
        scene.add(group);
        const shrinePos = new THREE.Vector3(x, h + 1.75, z);
        const shrineAirPos = shrinePos.clone().add(new THREE.Vector3(0, flockSettingsRef.current.startShrineAirLift, 0));
        obeliskGroups.push({ pillar: null, shrine: startShrine, tipGlow: glow, shrineGlow: glow, pos: new THREE.Vector3(x, h, z), tipPos: new THREE.Vector3(x, h+5, z), shrinePos, shrineAirPos, activated: true });
      }
    };

    setupShrine(0, 0, true);
    generateObelisks().forEach(l => setupShrine(l.x, l.z));

    // --- 5. 萤火虫及其渐变拖尾 ---
    class Firefly {
      constructor(spawnCenter, index) {
        const flock = flockSettingsRef.current;
        const light = lightSettingsRef.current;
        this.mesh = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        this.index = index;
        this.orbitOffset = Math.random() * Math.PI * 2;
        this.orbitRadius = flock.orbitRadius + (Math.random() - 0.5) * 2.4;
        this.orbitDirection = Math.random() > 0.5 ? 1 : -1;
        this.turnRate = 0.032 + Math.random() * 0.018;
        this.cruiseSpeed = THREE.MathUtils.lerp(flock.minSpeed, flock.maxSpeed, 0.36 + Math.random() * 0.28);
        this.speed = this.cruiseSpeed;
        this.noiseSeed = Math.random() * 1000;
        this.lightPhase = Math.random() * Math.PI * 2;
        const spawnOffset = new THREE.Vector3(
          (Math.random() - 0.5) * 6.5,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 6.5
        );
        this.pos = spawnCenter.clone().add(spawnOffset);
        this.forward = new THREE.Vector3(
          Math.random() - 0.5,
          (Math.random() - 0.5) * 0.2,
          Math.random() - 0.5
        ).normalize();
        this.vel = this.forward.clone().multiplyScalar(this.speed);
        
        // 拖尾：使用 ShaderMaterial 实现 alpha 渐变
        this.trailPoints = [];
        for(let i=0; i<CONFIG.trailLength; i++) this.trailPoints.push(this.pos.clone());
        
        const alphas = new Float32Array(CONFIG.trailLength);
        for(let i=0; i<CONFIG.trailLength; i++) alphas[i] = 1.0 - (i / CONFIG.trailLength);

        this.trailGeo = new THREE.BufferGeometry().setFromPoints(this.trailPoints);
        this.trailGeo.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));

        this.trailMat = new THREE.ShaderMaterial({
          transparent: true,
          uniforms: { color: { value: new THREE.Color(COLORS.glow) } },
          vertexShader: `
            attribute float alpha;
            varying float vAlpha;
            void main() {
              vAlpha = alpha;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            varying float vAlpha;
            uniform vec3 color;
            void main() {
              gl_FragColor = vec4(color, vAlpha * 0.8);
            }
          `,
          blending: THREE.AdditiveBlending
        });

        this.line = new THREE.Line(this.trailGeo, this.trailMat);
        this.localLight = new THREE.PointLight(COLORS.blue, light.intensity, light.distance, light.decay);
        this.localLight.position.copy(this.pos);
        this.mesh.position.copy(this.pos);
        
        scene.add(this.mesh);
        scene.add(this.line);
        scene.add(this.localLight);
      }

      update(flockState, others, time) {
        const flock = flockSettingsRef.current;
        const light = lightSettingsRef.current;
        const cohesion = new THREE.Vector3();
        const separation = new THREE.Vector3();
        const alignment = new THREE.Vector3();
        let count = 0;
        others.forEach(o => {
          const d = this.pos.distanceTo(o.pos);
          if (d > 0 && d < flock.perceptionRadius) {
            const separationWeight = 1 - d / flock.perceptionRadius;
            cohesion.add(o.pos);
            alignment.add(o.forward);
            separation.add(this.pos.clone().sub(o.pos).normalize().multiplyScalar(separationWeight));
            count++;
          }
        });

        if (count > 0) {
          cohesion.divideScalar(count).sub(this.pos).multiplyScalar(flock.cohesionWeight);
          alignment.divideScalar(count).sub(this.forward).multiplyScalar(flock.alignmentWeight);
          separation.divideScalar(count).multiplyScalar(flock.separationWeight);
        }

        let navigation = new THREE.Vector3();
        if (flockState.mode === 'orbit') {
          const angle = time * flock.orbitSpeed * this.orbitDirection + this.orbitOffset;
          const orbitPoint = flockState.center.clone().add(new THREE.Vector3(
            Math.cos(angle) * this.orbitRadius,
            Math.sin(time * 0.0017 + this.orbitOffset) * flockState.verticalSpan,
            Math.sin(angle) * this.orbitRadius
          ));
          const tangent = new THREE.Vector3(
            -Math.sin(angle) * this.orbitDirection,
            0,
            Math.cos(angle) * this.orbitDirection
          ).multiplyScalar(this.orbitRadius * 0.4);
          navigation.copy(orbitPoint.add(tangent).sub(this.pos)).multiplyScalar(flock.targetWeight);
        } else {
          navigation.copy(flockState.destination).sub(this.pos).multiplyScalar(flock.targetWeight);
        }

        const noise = new THREE.Vector3(
          Math.sin(time * 0.0012 + this.noiseSeed),
          Math.sin(time * 0.0017 + this.noiseSeed * 1.7) * 0.35,
          Math.cos(time * 0.001 + this.noiseSeed * 0.7)
        ).multiplyScalar(flock.noiseWeight);

        const desiredForward = this.forward.clone()
          .add(navigation)
          .add(cohesion)
          .add(alignment)
          .add(separation)
          .add(noise);

        if (desiredForward.lengthSq() > 0) {
          desiredForward.normalize();
          this.forward.lerp(desiredForward, this.turnRate).normalize();
        }

        const desiredSpeed = flockState.mode === 'orbit'
          ? this.cruiseSpeed * 0.92
          : this.cruiseSpeed * 1.06;
        this.speed = THREE.MathUtils.lerp(this.speed, clamp(desiredSpeed, flock.minSpeed, flock.maxSpeed), 0.04);
        this.vel.copy(this.forward).multiplyScalar(this.speed);
        this.pos.add(this.vel);

        const minHeight = getH(this.pos.x, this.pos.z) + flock.groundClearance;
        if (this.pos.y < minHeight) {
          this.pos.y = THREE.MathUtils.lerp(this.pos.y, minHeight, 0.28);
          this.forward.y = Math.abs(this.forward.y) + 0.18;
          this.forward.normalize();
        }

        this.mesh.position.copy(this.pos);
        this.localLight.position.copy(this.pos);
        this.localLight.intensity = light.intensity * (0.82 + Math.sin(time * 0.006 + this.lightPhase) * light.pulse);
        this.localLight.distance = light.distance;
        this.localLight.decay = light.decay;

        // 更新轨迹
        for(let i=CONFIG.trailLength-1; i>0; i--) this.trailPoints[i].copy(this.trailPoints[i-1]);
        this.trailPoints[0].copy(this.pos);
        this.trailGeo.setFromPoints(this.trailPoints);
        this.trailGeo.attributes.position.needsUpdate = true;
      }

      dispose() {
        scene.remove(this.mesh);
        scene.remove(this.line);
        scene.remove(this.localLight);
        this.mesh.geometry.dispose();
        this.mesh.material.dispose();
        this.trailGeo.dispose();
        this.trailMat.dispose();
      }
    }

    const fireflies = [];
    const initialFlockCenter = obeliskGroups[0].shrineAirPos;
    for(let i=0; i<CONFIG.fireflyCount; i++) fireflies.push(new Firefly(initialFlockCenter, i));
    const skyCreature = createBionicSkyCreature({ scene, glowTexture: glowTex, colors: COLORS });

    // --- 6. 输入系统 ---
    const touchInput = { moveX: 0, moveY: 0 };
    const touch = { left: -1, right: -1, lx: 0, ly: 0, rx: 0, ry: 0 };
    const keyboard = {
      KeyW: false,
      KeyA: false,
      KeyS: false,
      KeyD: false,
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
      KeyQ: false,
      KeyE: false
    };
    const mouse = { locked: false, dragging: false, lastX: 0, lastY: 0 };
    const MOUSE_LOOK_SENSITIVITY = 0.0024;
    const DRAG_LOOK_SENSITIVITY = 0.005;
    const KEYBOARD_TURN_SPEED = 0.032;

    const applyLookDelta = (deltaX, deltaY, sensitivity) => {
      player.yaw -= deltaX * sensitivity;
      player.pitch = clamp(player.pitch - deltaY * sensitivity, -1.4, 1.4);
    };

    const getKeyboardAxes = () => ({
      moveX: ((keyboard.KeyD || keyboard.ArrowRight) ? 1 : 0) - ((keyboard.KeyA || keyboard.ArrowLeft) ? 1 : 0),
      moveY: ((keyboard.KeyW || keyboard.ArrowUp) ? 1 : 0) - ((keyboard.KeyS || keyboard.ArrowDown) ? 1 : 0),
      turn: (keyboard.KeyQ ? 1 : 0) - (keyboard.KeyE ? 1 : 0)
    });

    const handleAction = () => {
      const ray = new THREE.Raycaster();
      ray.setFromCamera(new THREE.Vector2(0, 0), camera);
      const hits = ray.intersectObjects(interactables);
      if (hits.length > 0) {
        const id = hits[0].object.userData.id;
        const ob = obeliskGroups[id];
        if (player.pos.distanceTo(ob.pos) < CONFIG.interactDist && !ob.activated) {
          ob.activated = true;
          ob.pillar.material.color.set(0xffffff);
          ob.pillar.material.emissive.set(0xffffff);
          ob.pillar.material.emissiveIntensity = 2.0;
          ob.shrine.material.color.set(0xffffff);
          ob.shrine.material.emissive.set(0xffffff);
          ob.shrine.material.emissiveIntensity = 2.0;
          ob.tipGlow.material.opacity = 0.6;
          ob.shrineGlow.material.opacity = 0.6;
          const nextProgress = obeliskGroups.reduce((count, item) => count + (item.pillar && item.activated ? 1 : 0), 0);
          void soundscape.playShrineIgnite({
            progress: nextProgress,
            total: CONFIG.obeliskCount,
            isFinal: nextProgress === CONFIG.obeliskCount
          });
          setProgress(p => (p + 1 === CONFIG.obeliskCount ? (setIsWon(true), p + 1) : p + 1));
        }
      }
    };

    const onStart = (e) => {
      e.preventDefault();
      void soundscape.unlock();
      for (let t of e.changedTouches) {
        if (t.clientX < window.innerWidth / 2) {
          touch.left = t.identifier; touch.lx = t.clientX; touch.ly = t.clientY;
        } else {
          touch.right = t.identifier; touch.rx = t.clientX; touch.ry = t.clientY;
          handleAction();
        }
      }
    };
    const onMove = (e) => {
      e.preventDefault();
      for (let t of e.changedTouches) {
        if (t.identifier === touch.left) {
          touchInput.moveX = clamp((t.clientX - touch.lx) / 50, -1, 1);
          touchInput.moveY = clamp(-(t.clientY - touch.ly) / 50, -1, 1);
        } else if (t.identifier === touch.right) {
          applyLookDelta(t.clientX - touch.rx, t.clientY - touch.ry, DRAG_LOOK_SENSITIVITY);
          touch.rx = t.clientX; touch.ry = t.clientY;
        }
      }
    };
    const onEnd = (e) => {
      for (let t of e.changedTouches) {
        if (t.identifier === touch.left) {
          touch.left = -1;
          touchInput.moveX = 0;
          touchInput.moveY = 0;
        } else if (t.identifier === touch.right) {
          touch.right = -1;
        }
      }
    };

    const onKeyDown = (e) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }
      if (!e.repeat) void soundscape.unlock();
      if (Object.hasOwn(keyboard, e.code)) keyboard[e.code] = true;
      if (e.code === 'Space' && !e.repeat) handleAction();
    };

    const onKeyUp = (e) => {
      if (Object.hasOwn(keyboard, e.code)) keyboard[e.code] = false;
    };

    const onPointerLockChange = () => {
      mouse.locked = document.pointerLockElement === renderer.domElement;
      if (!mouse.locked) mouse.dragging = false;
    };

    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      void soundscape.unlock();
      mouse.dragging = true;
      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;
      renderer.domElement.requestPointerLock?.();
    };

    const onMouseMove = (e) => {
      if (mouse.locked) {
        applyLookDelta(e.movementX, e.movementY, MOUSE_LOOK_SENSITIVITY);
        return;
      }
      if (!mouse.dragging) return;
      applyLookDelta(e.clientX - mouse.lastX, e.clientY - mouse.lastY, DRAG_LOOK_SENSITIVITY);
      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;
    };

    const onMouseUp = () => {
      mouse.dragging = false;
    };

    const onCanvasClick = (e) => {
      if (e.button !== 0) return;
      handleAction();
    };

    const onContextMenu = (e) => {
      e.preventDefault();
    };

    window.addEventListener('touchstart', onStart, { passive: false });
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);
    window.addEventListener('touchcancel', onEnd);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('pointerlockchange', onPointerLockChange);
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('click', onCanvasClick);
    renderer.domElement.addEventListener('contextmenu', onContextMenu);

    // --- 7. 渲染循环 ---
    const animate = () => {
      if (disposed) return;
      animationFrameId = requestAnimationFrame(animate);

      const keyboardAxes = getKeyboardAxes();
      if (keyboardAxes.turn !== 0) player.yaw += keyboardAxes.turn * KEYBOARD_TURN_SPEED;

      // 位移
      const forward = new THREE.Vector3(-Math.sin(player.yaw), 0, -Math.cos(player.yaw));
      const right = new THREE.Vector3(-Math.cos(player.yaw), 0, Math.sin(player.yaw));
      const moveX = clamp(touchInput.moveX + keyboardAxes.moveX, -1, 1);
      const moveY = clamp(touchInput.moveY + keyboardAxes.moveY, -1, 1);
      const dir = new THREE.Vector3().addScaledVector(forward, moveY).addScaledVector(right, -moveX);
      const moveIntent = clamp(dir.length(), 0, 1);
      if (moveIntent > 0) player.pos.addScaledVector(dir.normalize(), CONFIG.moveSpeed);

      const gH = getH(player.pos.x, player.pos.z) + CONFIG.playerHeight;
      player.vel.y -= CONFIG.gravity;
      player.pos.y += player.vel.y;
      if (player.pos.y < gH) { player.pos.y = gH; player.vel.y = 0; }

      camera.position.copy(player.pos);
      camera.rotation.set(player.pitch, player.yaw, 0, 'YXZ');

      // 更新萤火虫与目标
      let activeShrine = obeliskGroups[0];
      let targetOb = null;
      let minD = Infinity;
      let activatedShrineCount = 0;
      obeliskGroups.forEach(ob => {
        if(ob.activated) {
          activeShrine = ob;
          if (ob.pillar) activatedShrineCount += 1;
        }
        else {
          const d = player.pos.distanceTo(ob.pos);
          if(d < minD) { minD = d; targetOb = ob; }
        }
      });
      const now = Date.now();
      skyCreature.update(now, activatedShrineCount / CONFIG.obeliskCount, creatureSettingsRef.current);
      const flock = flockSettingsRef.current;
      const playerNearActiveShrine = player.pos.distanceTo(activeShrine.shrinePos) < flock.orbitHoldDistance;
      const flockState = !targetOb || playerNearActiveShrine
        ? {
            mode: 'orbit',
            center: activeShrine.shrineAirPos,
            verticalSpan: flock.orbitVerticalSpan
          }
        : {
            mode: 'travel',
            destination: targetOb.tipPos
          };
      fireflies.forEach(f => f.update(flockState, fireflies, now));

      // Visual effects and glow
      let skyL = 0.6;
      soundscape.update({
        playerSpeed: moveIntent,
        progressRatio: activatedShrineCount / CONFIG.obeliskCount,
        isWon: activatedShrineCount >= CONFIG.obeliskCount
      });

      const colorAttr = geometry.attributes.color;
      const posAttr = geometry.attributes.position;
      let terrainUpdate = false;

      obeliskGroups.forEach(ob => {
        if(ob.activated) {
          // 燃烧粒子
          if(Math.random()>0.86) {
            const p = new THREE.Mesh(new THREE.SphereGeometry(0.12), new THREE.MeshBasicMaterial({ color: COLORS.fire, transparent: true }));
            p.position.copy(ob.shrinePos).add(new THREE.Vector3((Math.random()-0.5)*2, 0.5, (Math.random()-0.5)*2));
            p.userData = { v: new THREE.Vector3((Math.random()-0.5)*0.03, 0.08, (Math.random()-0.5)*0.03), l: 1.0 };
            scene.add(p); particles.push(p);
          }
          skyL += Math.max(0, 1 - player.pos.distanceTo(ob.pos)/160)*0.7;

          // 辉光闪烁
          ob.tipGlow.material.opacity = 0.4 + Math.sin(Date.now()*0.003)*0.2;
          ob.shrineGlow.material.opacity = 0.4 + Math.sin(Date.now()*0.003 + 1)*0.2;

          // 地形颜色扩散
          for (let j=0; j<posAttr.count; j++) {
            const vx = posAttr.getX(j); const vz = posAttr.getZ(j);
            const dist = Math.hypot(vx-ob.pos.x, vz-ob.pos.z);
            if(dist < 65) {
              const weight = Math.max(0, 1 - dist/65);
              const target = COLORS.pink.clone().lerp(COLORS.blue, Math.sin(vx*0.1)*0.5+0.5);
              colorAttr.setXYZ(j, THREE.MathUtils.lerp(colorAttr.getX(j), target.r, weight*0.06), THREE.MathUtils.lerp(colorAttr.getY(j), target.g, weight*0.06), THREE.MathUtils.lerp(colorAttr.getZ(j), target.b, weight*0.06));
              terrainUpdate = true;
            }
          }
        }
      });
      if(terrainUpdate) colorAttr.needsUpdate = true;

      // 粒子系统维护
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]; p.position.add(p.userData.v); p.userData.l -= 0.015; p.material.opacity = p.userData.l; p.scale.setScalar(p.userData.l);
        if(p.userData.l <= 0) { scene.remove(p); particles.splice(i, 1); }
      }

      // 天空色动态渐变
      const skyCol = new THREE.Color(COLORS.skyTwilight).multiplyScalar(Math.max(0.4, Math.min(1.6, skyL)));
      scene.background.lerp(skyCol, 0.04); scene.fog.color.lerp(skyCol, 0.04);

      // 十字准星交互
      const ray = new THREE.Raycaster(); ray.setFromCamera(new THREE.Vector2(0,0), camera);
      const hit = ray.intersectObjects(interactables);
      const nextIsAiming = hit.length > 0 && player.pos.distanceTo(hit[0].object.parent.position) < CONFIG.interactDist;
      setIsAiming(prev => (prev === nextIsAiming ? prev : nextIsAiming));

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      soundscape.dispose();
      if (soundscapeRef.current === soundscape) soundscapeRef.current = null;
      fireflies.forEach(firefly => firefly.dispose());
      skyCreature.dispose();
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
      window.removeEventListener('touchcancel', onEnd);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('pointerlockchange', onPointerLockChange);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('click', onCanvasClick);
      renderer.domElement.removeEventListener('contextmenu', onContextMenu);
      if (document.pointerLockElement === renderer.domElement) document.exitPointerLock?.();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#050510] select-none touch-none">
      <div ref={containerRef} className="w-full h-full" />

      {/* 极简 HUD */}
      <div className="absolute top-14 left-10 text-white pointer-events-none tracking-[0.5em] uppercase">
        <h1 className="text-3xl font-extralight drop-shadow-2xl">Lumina</h1>
        <div className="h-[2px] w-12 bg-white/30 my-4" />
        <p className="text-[9px] opacity-40">Follow the celestial threads</p>
      </div>

      <div className="absolute top-14 right-8 z-20 flex flex-col items-end gap-2">
        <div className="pointer-events-auto flex items-center gap-2">
          {isLocalPreview && (
            <button
              onPointerDown={(e) => {
                e.stopPropagation();
                const nextOpen = !isPanelOpen;
                setIsPanelOpen(nextOpen);
                if (nextOpen) {
                  setIsCreaturePanelOpen(false);
                  setIsSoundPanelOpen(false);
                }
              }}
              className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-cyan-100 backdrop-blur-3xl transition hover:bg-cyan-300/16"
            >
              {isPanelOpen ? 'Hide Tuner' : 'Tune Flock'}
            </button>
          )}
          {isLocalPreview && (
            <button
              onPointerDown={(e) => {
                e.stopPropagation();
                const nextOpen = !isCreaturePanelOpen;
                setIsCreaturePanelOpen(nextOpen);
                if (nextOpen) {
                  setIsPanelOpen(false);
                  setIsSoundPanelOpen(false);
                }
              }}
              className="rounded-full border border-teal-200/25 bg-teal-300/10 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-teal-100 backdrop-blur-3xl transition hover:bg-teal-300/16"
            >
              {isCreaturePanelOpen ? 'Hide Creature' : 'Creature Lab'}
            </button>
          )}
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              const nextOpen = !isSoundPanelOpen;
              setIsSoundPanelOpen(nextOpen);
              if (nextOpen) {
                setIsPanelOpen(false);
                setIsCreaturePanelOpen(false);
              }
            }}
            className="rounded-full border border-fuchsia-200/25 bg-fuchsia-300/10 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-fuchsia-100 backdrop-blur-3xl transition hover:bg-fuchsia-300/16"
          >
            {isSoundPanelOpen ? 'Hide Audio' : 'Audio Lab'}
          </button>
        </div>
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-6 py-2 text-white flex items-center gap-3">
          <span className="text-[9px] opacity-25 tracking-widest">SIGILS</span>
          <span className="text-xl font-bold">{progress} / {total}</span>
        </div>

        {isLocalPreview && isCreaturePanelOpen && (
          <div className="pointer-events-auto max-h-[calc(100vh-7.5rem)] w-[min(29rem,calc(100vw-1.75rem))] overflow-y-auto rounded-[1.25rem] border border-white/10 bg-slate-950/72 p-4 text-white shadow-[0_18px_80px_rgba(0,0,0,0.48)] backdrop-blur-3xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-teal-200/70">World organism</p>
                <h2 className="mt-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/90">Creature Lab</h2>
              </div>
              <button
                onPointerDown={(e) => {
                  e.stopPropagation();
                  resetCreatureSettings();
                }}
                className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-white/75 transition hover:bg-white/8"
              >
                Reset
              </button>
            </div>

            <div className="mt-4 space-y-5">
              {CREATURE_CONTROL_SECTIONS.map(section => (
                <section key={section.title}>
                  <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-teal-100/70">{section.title}</p>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                    {section.fields.map(field => (
                      <label key={field.key} className="block">
                        <div className="mb-1 flex items-center justify-between gap-2 text-[9px] uppercase tracking-[0.14em] text-white/55">
                          <span>{field.label}</span>
                          <span className="text-white/95">{formatPanelValue(creatureSettings[field.key], field.precision)}</span>
                        </div>
                        <input
                          type="range"
                          min={field.min}
                          max={field.max}
                          step={field.step}
                          value={creatureSettings[field.key]}
                          onChange={(e) => updateCreatureSetting(field.key, Number(e.target.value))}
                          className={`h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 ${section.accent}`}
                        />
                      </label>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        )}

        {isSoundPanelOpen && (
          <div className="pointer-events-auto max-h-[calc(100vh-7.5rem)] w-[min(31rem,calc(100vw-1.75rem))] overflow-y-auto rounded-[1.25rem] border border-white/10 bg-slate-950/72 p-4 text-white shadow-[0_18px_80px_rgba(0,0,0,0.48)] backdrop-blur-3xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-fuchsia-200/70">Runtime audio</p>
                <h2 className="mt-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/90">Audio Lab</h2>
              </div>
              <button
                onPointerDown={(e) => {
                  e.stopPropagation();
                  resetSoundSettings();
                }}
                className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-white/75 transition hover:bg-white/8"
              >
                Reset
              </button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {SOUND_PREVIEW_OPTIONS.map(option => (
                <button
                  key={option.id}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    previewSound(option.id);
                  }}
                  className="min-h-9 rounded-md border border-white/10 bg-white/5 px-2 py-2 text-[9px] uppercase tracking-[0.16em] text-white/75 transition hover:border-fuchsia-200/30 hover:bg-fuchsia-300/12 hover:text-white"
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {SOUND_TUNING_GROUPS.map(group => (
                <button
                  key={group.id}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setSoundPanelGroup(group.id);
                  }}
                  className={`rounded-full border px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] transition ${
                    group.id === soundPanelGroup
                      ? 'border-fuchsia-200/40 bg-fuchsia-300/16 text-fuchsia-50'
                      : 'border-white/10 bg-white/5 text-white/55 hover:bg-white/8'
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>

            <div className="mt-4 space-y-5">
              {activeSoundGroup.sections.map(section => (
                <section key={section.title}>
                  <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-fuchsia-100/70">{section.title}</p>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                    {section.controls.map(control => {
                      const value = getPathValue(soundSettings, control.path);

                      if (control.type === 'toggle') {
                        return (
                          <label key={control.path} className="flex min-h-9 items-center justify-between gap-3 rounded-md border border-white/8 bg-white/4 px-3 py-2">
                            <span className="text-[9px] uppercase tracking-[0.16em] text-white/62">{control.label}</span>
                            <input
                              type="checkbox"
                              checked={Boolean(value)}
                              onChange={(e) => updateSoundSetting(control.path, e.target.checked)}
                              className="h-4 w-4 cursor-pointer accent-fuchsia-300"
                            />
                          </label>
                        );
                      }

                      return (
                        <label key={control.path} className="block">
                          <div className="mb-1 flex items-center justify-between gap-2 text-[9px] uppercase tracking-[0.14em] text-white/55">
                            <span>{control.label}</span>
                            <span className="text-white/95">{formatPanelValue(value, control.precision)}</span>
                          </div>
                          <input
                            type="range"
                            min={control.min}
                            max={control.max}
                            step={control.step}
                            value={value}
                            onChange={(e) => updateSoundSetting(control.path, Number(e.target.value))}
                            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-fuchsia-300"
                          />
                        </label>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        )}

        {isLocalPreview && isPanelOpen && (
          <div className="pointer-events-auto max-h-[calc(100vh-7.5rem)] w-[min(23rem,calc(100vw-1.75rem))] overflow-y-auto rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-4 text-white shadow-[0_18px_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-cyan-200/70">Localhost only</p>
                <h2 className="mt-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/90">Flock Tuner</h2>
              </div>
              <button
                onPointerDown={(e) => {
                  e.stopPropagation();
                  resetTuning();
                }}
                className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-white/75 transition hover:bg-white/8"
              >
                Reset
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
              {FLOCK_CONTROL_FIELDS.map(field => (
                <label key={field.key} className="block">
                  <div className="mb-1 flex items-center justify-between text-[9px] uppercase tracking-[0.14em] text-white/55">
                    <span>{field.label}</span>
                    <span className="text-white/95">{formatPanelValue(flockSettings[field.key], field.precision)}</span>
                  </div>
                  <input
                    type="range"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={flockSettings[field.key]}
                    onChange={(e) => updateFlockSetting(field.key, Number(e.target.value))}
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-300"
                  />
                </label>
              ))}
            </div>

            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-amber-100/70">Light</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                {LIGHT_CONTROL_FIELDS.map(field => (
                  <label key={field.key} className="block">
                    <div className="mb-1 flex items-center justify-between text-[9px] uppercase tracking-[0.14em] text-white/55">
                      <span>{field.label}</span>
                      <span className="text-white/95">{formatPanelValue(lightSettings[field.key], field.precision)}</span>
                    </div>
                    <input
                      type="range"
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      value={lightSettings[field.key]}
                      onChange={(e) => updateLightSetting(field.key, Number(e.target.value))}
                      className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-amber-300"
                    />
                  </label>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

      {/* 准星 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isAiming ? 'bg-white scale-[3.5] shadow-[0_0_30px_#fff]' : 'bg-white/10'}`} />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${isAiming ? 'opacity-100 -top-10' : 'opacity-0'}`} />
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${isAiming ? 'opacity-100 -bottom-10' : 'opacity-0'}`} />
      </div>

      {/* 交互提示 */}
      <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 transition-all duration-700 ${isAiming ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-3 rounded-full text-white text-[10px] tracking-[0.4em] uppercase flex items-center gap-3">
          {isTouchDevice ? (
            <span className="flex items-center gap-3">
              <strong className="font-semibold text-white">Ignite</strong>
              <span className="text-white/60 tracking-[0.2em]">Tap Right Half</span>
            </span>
          ) : (
            <span className="flex items-center gap-3">
              <strong className="font-semibold text-white">Ignite</strong>
              <span className="text-white/60 tracking-[0.2em]">Space / Click</span>
            </span>
          )}
          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
        </div>
      </div>

      <div className={`absolute bottom-8 left-8 right-8 flex ${isTouchDevice ? 'justify-end' : 'justify-start'} text-white/75 text-[10px] tracking-[0.25em] uppercase pointer-events-none`}>
        <div className={`max-w-sm rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl ${isTouchDevice ? 'text-right' : ''}`}>
          <p className="text-white/35">{isTouchDevice ? 'Touch' : 'Desktop'}</p>
          {isTouchDevice ? (
            <>
              <p className="mt-2 leading-relaxed">
                <strong className="font-semibold text-white">Move</strong>
                <span className="ml-3 text-white/60 tracking-[0.15em]">Drag Left Half</span>
              </p>
              <p className="leading-relaxed">
                <strong className="font-semibold text-white">Look</strong>
                <span className="ml-3 text-white/60 tracking-[0.15em]">Drag Right Half</span>
              </p>
              <p className="leading-relaxed">
                <strong className="font-semibold text-white">Interact</strong>
                <span className="ml-3 text-white/60 tracking-[0.15em]">Tap Right Half</span>
              </p>
            </>
          ) : (
            <>
              <p className="mt-2 leading-relaxed">
                <strong className="font-semibold text-white">Move</strong>
                <span className="ml-3 text-white/60 tracking-[0.15em]">WASD / Arrows</span>
              </p>
              <p className="leading-relaxed">
                <strong className="font-semibold text-white">Rotate</strong>
                <span className="ml-3 text-white/60 tracking-[0.15em]">Q / E</span>
              </p>
              <p className="leading-relaxed">
                <strong className="font-semibold text-white">Look</strong>
                <span className="ml-3 text-white/60 tracking-[0.15em]">Mouse</span>
              </p>
              <p className="leading-relaxed">
                <strong className="font-semibold text-white">Interact</strong>
                <span className="ml-3 text-white/60 tracking-[0.15em]">Space / Click</span>
              </p>
            </>
          )}
        </div>
      </div>

      {/* 通关成功 */}
      {isWon && (
        <div className="absolute inset-0 bg-white z-[999] flex flex-col items-center justify-center animate-in fade-in duration-[3000ms]">
          <div className="text-blue-400 text-6xl mb-10 font-thin italic tracking-widest">AETHER</div>
          <h2 className="text-4xl font-extralight text-slate-800 tracking-[0.6em] uppercase text-center ml-[0.6em]">极境归元</h2>
          <p className="text-slate-400 mt-6 max-w-xs text-center text-[11px] tracking-widest px-8 font-light leading-loose">
            光之脉络已编织完成。世界重获灵魂，温暖与色彩将永驻这片山脉。
          </p>
          <button 
            onPointerDown={(e) => { e.stopPropagation(); window.location.reload(); }}
            className="mt-16 px-16 py-4 bg-slate-900 text-white rounded-full text-[10px] tracking-[0.5em] uppercase active:scale-95 transition-transform"
          >
            Restart the Dream
          </button>
        </div>
      )}

      <style>{`
        canvas { touch-action: none; -webkit-user-select: none; }
        body { margin: 0; background: #050510; height: 100vh; overflow: hidden; }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </div>
  );
};

export default App;
