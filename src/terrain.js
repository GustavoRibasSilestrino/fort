import * as THREE from 'three';
import { WORLD_HALF } from './config.js';

// Mundo plano para treino: o chao fica em y = 0 e tem uma grade de 4 m (a mesma celula da construcao)
export const pads = [];
export const heightAt = () => 0;
export const slopeAt = () => 0;
export const padAt = () => null;

function groundTexture(renderer) {
  // estilo Roblox: base verde com "studs" (pininhos) a cada 1 m
  const cv = document.createElement('canvas');
  cv.width = cv.height = 512; // 8 m x 8 m
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#4fbf3a'; ctx.fillRect(0, 0, 512, 512);
  const cell = 64; // 1 m
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) {
    const cx = i * cell + cell / 2, cy = j * cell + cell / 2;
    ctx.fillStyle = 'rgba(0,70,0,0.28)'; ctx.beginPath(); ctx.ellipse(cx + 3, cy + 5, 17, 14, 0, 0, 7); ctx.fill();
    ctx.fillStyle = '#6bd84f'; ctx.beginPath(); ctx.ellipse(cx, cy, 17, 14, 0, 0, 7); ctx.fill();
    ctx.fillStyle = '#86e868'; ctx.beginPath(); ctx.ellipse(cx - 2, cy - 3, 11, 8, 0, 0, 7); ctx.fill();
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 2;
  for (let i = 0; i <= 8; i += 4) { ctx.beginPath(); ctx.moveTo(i * cell, 0); ctx.lineTo(i * cell, 512); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i * cell); ctx.lineTo(512, i * cell); ctx.stroke(); }
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set((WORLD_HALF * 2) / 8, (WORLD_HALF * 2) / 8);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return tex;
}

export function buildGround(scene, renderer) {
  const geo = new THREE.PlaneGeometry(WORLD_HALF * 2, WORLD_HALF * 2, 1, 1);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshLambertMaterial({ map: groundTexture(renderer), polygonOffset: true, polygonOffsetFactor: 2, polygonOffsetUnits: 2 });
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
