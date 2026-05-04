import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const App = () => {
  const containerRef = useRef();
  const [progress, setProgress] = useState(0);
  const [total, setTotal] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isAiming, setIsAiming] = useState(false);

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

  useEffect(() => {
    if (!containerRef.current) return;

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    // --- 1. 场景基础 ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(COLORS.skyTwilight);
    scene.fog = new THREE.FogExp2(COLORS.fogColor, 0.006);

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

        // 神龛辉光
        const shrineGlow = createBloomSprite(COLORS.pink, 12);
        shrineGlow.position.set(0, 3, 12);
        group.add(shrineGlow);

        scene.add(group);
        obeliskGroups.push({ pillar, shrine, tipGlow, shrineGlow, pos: new THREE.Vector3(x, h, z), tipPos: new THREE.Vector3(x, h + CONFIG.obeliskHeight + 2, z), shrinePos: new THREE.Vector3(x, h + 1.5, z + 12), activated: false });
      } else {
        const startShrine = new THREE.Mesh(new THREE.BoxGeometry(3.5, 3.5, 3.5), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2.0 }));
        startShrine.position.set(0, 1.75, 0);
        group.add(startShrine);
        const glow = createBloomSprite(0xffffff, 20);
        glow.position.y = 3;
        glow.material.opacity = 0.5;
        group.add(glow);
        scene.add(group);
        obeliskGroups.push({ pillar: null, shrine: startShrine, tipGlow: glow, shrineGlow: glow, pos: new THREE.Vector3(x, h, z), tipPos: new THREE.Vector3(x, h+5, z), shrinePos: new THREE.Vector3(x, h+1.75, z), activated: true });
      }
    };

    setupShrine(0, 0, true);
    generateObelisks().forEach(l => setupShrine(l.x, l.z));

    // --- 5. 萤火虫及其渐变拖尾 ---
    class Firefly {
      constructor() {
        this.mesh = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        
        // 拖尾：使用 ShaderMaterial 实现 alpha 渐变
        this.trailPoints = [];
        for(let i=0; i<CONFIG.trailLength; i++) this.trailPoints.push(new THREE.Vector3(0, 0, 0));
        
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
        this.pos = new THREE.Vector3(0, 20, 0);
        this.vel = new THREE.Vector3();
        this.acc = new THREE.Vector3();
        
        scene.add(this.mesh);
        scene.add(this.line);
      }

      update(target, others) {
        // Boids 
        const cohesion = new THREE.Vector3();
        const separation = new THREE.Vector3();
        const alignment = new THREE.Vector3();
        let count = 0;
        others.forEach(o => {
          const d = this.pos.distanceTo(o.pos);
          if (d > 0 && d < 12) {
            cohesion.add(o.pos); alignment.add(o.vel);
            separation.add(this.pos.clone().sub(o.pos).divideScalar(d));
            count++;
          }
        });
        if (count > 0) {
          cohesion.divideScalar(count).sub(this.pos).multiplyScalar(0.01);
          alignment.divideScalar(count).sub(this.vel).multiplyScalar(0.04);
          separation.divideScalar(count).multiplyScalar(0.12);
        }
        const goal = target.clone().sub(this.pos).multiplyScalar(0.03);
        this.acc.add(cohesion).add(separation).add(alignment).add(goal);
        this.vel.add(this.acc).clampLength(0, 0.45);
        this.pos.add(this.vel);
        this.acc.multiplyScalar(0);
        this.mesh.position.copy(this.pos);

        // 更新轨迹
        for(let i=CONFIG.trailLength-1; i>0; i--) this.trailPoints[i].copy(this.trailPoints[i-1]);
        this.trailPoints[0].copy(this.pos);
        this.trailGeo.setFromPoints(this.trailPoints);
        this.trailGeo.attributes.position.needsUpdate = true;
      }
    }

    const fireflies = [];
    for(let i=0; i<CONFIG.fireflyCount; i++) fireflies.push(new Firefly());

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
          setProgress(p => (p + 1 === CONFIG.obeliskCount ? (setIsWon(true), p + 1) : p + 1));
        }
      }
    };

    const onStart = (e) => {
      e.preventDefault();
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
      requestAnimationFrame(animate);

      const keyboardAxes = getKeyboardAxes();
      if (keyboardAxes.turn !== 0) player.yaw += keyboardAxes.turn * KEYBOARD_TURN_SPEED;

      // 位移
      const forward = new THREE.Vector3(-Math.sin(player.yaw), 0, -Math.cos(player.yaw));
      const right = new THREE.Vector3(-Math.cos(player.yaw), 0, Math.sin(player.yaw));
      const moveX = clamp(touchInput.moveX + keyboardAxes.moveX, -1, 1);
      const moveY = clamp(touchInput.moveY + keyboardAxes.moveY, -1, 1);
      const dir = new THREE.Vector3().addScaledVector(forward, moveY).addScaledVector(right, -moveX);
      if (dir.length() > 0) player.pos.addScaledVector(dir.normalize(), CONFIG.moveSpeed);

      const gH = getH(player.pos.x, player.pos.z) + CONFIG.playerHeight;
      player.vel.y -= CONFIG.gravity;
      player.pos.y += player.vel.y;
      if (player.pos.y < gH) { player.pos.y = gH; player.vel.y = 0; }

      camera.position.copy(player.pos);
      camera.rotation.set(player.pitch, player.yaw, 0, 'YXZ');

      // 更新萤火虫与目标
      let lastLitShrine = obeliskGroups[0].shrinePos;
      let targetOb = obeliskGroups[0];
      let minD = Infinity;
      obeliskGroups.forEach(ob => {
        if(ob.activated) lastLitShrine = ob.shrinePos;
        else {
          const d = player.pos.distanceTo(ob.pos);
          if(d < minD) { minD = d; targetOb = ob; }
        }
      });
      // 垂直路径引导：在神龛和方尖碑顶部循环
      const t = Math.sin(Date.now() * 0.0006) * 0.5 + 0.5;
      const swarmGoal = new THREE.Vector3().lerpVectors(lastLitShrine, targetOb.tipPos, t);
      fireflies.forEach(f => f.update(swarmGoal, fireflies));

      // 视觉动效与辉光
      let skyL = 0.6;
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
      setIsAiming(hit.length > 0 && player.pos.distanceTo(hit[0].object.parent.position) < CONFIG.interactDist);

      renderer.render(scene, camera);
    };
    animate();

    scene.add(new THREE.HemisphereLight(0xffffff, 0x111122, 1.1));
    return () => {
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

      <div className="absolute top-14 right-10 flex flex-col items-end">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-8 py-3 text-white flex items-center gap-4">
          <span className="text-[10px] opacity-25 tracking-widest">SIGILS</span>
          <span className="text-2xl font-bold">{progress} / {total}</span>
        </div>
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
          <span>Space / Click / Tap to Ignite</span>
          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex justify-between gap-4 text-white/75 text-[10px] tracking-[0.25em] uppercase pointer-events-none">
        <div className="max-w-sm rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl">
          <p className="text-white/35">Desktop</p>
          <p className="mt-2 leading-relaxed">WASD / Arrows Move</p>
          <p className="leading-relaxed">Q / E Rotate</p>
          <p className="leading-relaxed">Mouse Look</p>
          <p className="leading-relaxed">Space / Click Interact</p>
        </div>
        <div className="max-w-sm rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-right backdrop-blur-2xl">
          <p className="text-white/35">Touch</p>
          <p className="mt-2 leading-relaxed">Left Half Drag Move</p>
          <p className="leading-relaxed">Right Half Drag Look</p>
          <p className="leading-relaxed">Right Half Tap Interact</p>
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