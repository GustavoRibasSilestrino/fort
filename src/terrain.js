import * as THREE from 'three';
import { WORLD_HALF } from './config.js';

// Mundo plano para treino: o chao fica em y = 0 e tem uma grade de 4 m (a mesma celula da construcao)
export const pads = [];
export const heightAt = () => 0;
export const slopeAt = () => 0;
export const padAt = () => null;

function groundTexture(renderer) {
  // grama natural: base verde com manchas suaves e muitos tracos de folhas (sem grade, sem "pininhos")
  const SZ = 512;
  const cv = document.createElement('canvas');
  cv.width = cv.height = SZ;
  const ctx = cv.getContext('2d');
  let seed = 99;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  ctx.fillStyle = '#5db83c'; ctx.fillRect(0, 0, SZ, SZ);
  const wrapDraw = (fn) => { for (const ox of [-SZ, 0, SZ]) for (const oy of [-SZ, 0, SZ]) fn(ox, oy); };
  // manchas grandes claras/escuras
  for (let i = 0; i < 46; i++) {
    const x = rnd() * SZ, y = rnd() * SZ, r = 30 + rnd() * 70, light = rnd() > 0.5;
    wrapDraw((ox, oy) => {
      const g = ctx.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, r);
      g.addColorStop(0, light ? 'rgba(150,225,90,0.32)' : 'rgba(30,110,40,0.30)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.fillRect(x + ox - r, y + oy - r, r * 2, r * 2);
    });
  }
  // folhas de grama
  const tones = ['#3f9d33', '#4fb23a', '#6bc948', '#82d85a', '#2f8a30', '#9be66a'];
  ctx.lineCap = 'round';
  for (let i = 0; i < 5200; i++) {
    const x = rnd() * SZ, y = rnd() * SZ, len = 5 + rnd() * 9, ang = -Math.PI / 2 + (rnd() - 0.5) * 1.1;
    ctx.strokeStyle = tones[(rnd() * tones.length) | 0]; ctx.globalAlpha = 0.55 + rnd() * 0.4; ctx.lineWidth = 1 + rnd() * 1.6;
    wrapDraw((ox, oy) => { ctx.beginPath(); ctx.moveTo(x + ox, y + oy); ctx.lineTo(x + ox + Math.cos(ang) * len, y + oy + Math.sin(ang) * len); ctx.stroke(); });
  }
  ctx.globalAlpha = 1;
  // algumas florzinhas e pontos de terra
  const fl = ['#ffe45e', '#ffffff', '#ff9bd0'];
  for (let i = 0; i < 38; i++) {
    const x = rnd() * SZ, y = rnd() * SZ;
    ctx.fillStyle = fl[(rnd() * fl.length) | 0];
    wrapDraw((ox, oy) => { ctx.beginPath(); ctx.arc(x + ox, y + oy, 1.6, 0, 7); ctx.fill(); });
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set((WORLD_HALF * 2) / 16, (WORLD_HALF * 2) / 16);   // 1 textura = 16 m
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = Math.min(16, renderer.capabilities.getMaxAnisotropy());
  return tex;
}

export function buildGround(scene, renderer) {
  // plano subdividido com variacao de cor em grande escala (evita aspecto repetido)
  const SEG = 80;
  const geo = new THREE.PlaneGeometry(WORLD_HALF * 2, WORLD_HALF * 2, SEG, SEG);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position, col = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const n = Math.sin(x * 0.021) * Math.cos(z * 0.017) + Math.sin(x * 0.047 + z * 0.031) * 0.6 + Math.sin(z * 0.09) * 0.25;
    c.setRGB(0.92 + n * 0.07, 0.96 + n * 0.07, 0.9 + n * 0.05);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.MeshLambertMaterial({ map: groundTexture(renderer), vertexColors: true, polygonOffset: true, polygonOffsetFactor: 2, polygonOffsetUnits: 2 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.position.y = -0.02;
  scene.add(mesh);

  // montanhas distantes para dar nocao de profundidade
  const g = new THREE.Group();
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 0; i < 34; i++) {
    const a = (i / 34) * Math.PI * 2 + rnd() * 0.1;
    const r = 760 + rnd() * 260;
    const h = 60 + rnd() * 140, w = 90 + rnd() * 130;
    const m = new THREE.Mesh(new THREE.ConeGeometry(w, h, 6), new THREE.MeshLambertMaterial({ color: new THREE.Color().setHSL(0.27 + rnd() * 0.08, 0.35, 0.38 + rnd() * 0.12), flatShading: true }));
    m.position.set(Math.cos(a) * r, h / 2 - 6, Math.sin(a) * r);
    m.rotation.y = rnd() * 3;
    g.add(m);
  }
  scene.add(g);
}

// moldura azul da arena
let boundary = null;
export function setBoundary(scene, half) {
  if (boundary) { scene.remove(boundary); boundary.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); }
  boundary = new THREE.Group();
  const wallMat = new THREE.MeshBasicMaterial({ color: '#3fb6ff', transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false });
  const H = 40;
  for (let k = 0; k < 4; k++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(half * 2, H), wallMat);
    const a = (k * Math.PI) / 2;
    m.position.set(Math.sin(a) * half, H / 2, Math.cos(a) * half);
    m.rotation.y = a;
    boundary.add(m);
  }
  const pts = [new THREE.Vector3(-half, 0.06, -half), new THREE.Vector3(half, 0.06, -half), new THREE.Vector3(half, 0.06, half), new THREE.Vector3(-half, 0.06, half)];
  boundary.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: '#7fd8ff' })));
  scene.add(boundary);
}

// disco colorido no chao (pontos de nascimento)
export function makeSpawnRing(scene, x, z, color) {
  const m = new THREE.Mesh(new THREE.RingGeometry(1.1, 1.6, 40), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.8 }));
  m.rotation.x = -Math.PI / 2;
  m.position.set(x, 0.05, z);
  scene.add(m);
  return m;
}
