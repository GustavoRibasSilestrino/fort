import * as THREE from 'three';
import { WORLD_HALF } from './config.js';

// Mundo plano para treino: o chao fica em y = 0 e tem uma grade de 4 m (a mesma celula da construcao)
export const pads = [];
export const heightAt = () => 0;
export const slopeAt = () => 0;
export const padAt = () => null;

function groundTexture(renderer) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 256; // 2x2 celulas de 4 m = 8 m
  const ctx = cv.getContext('2d');
  const cols = ['#7fd24f', '#72c746'];
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) { ctx.fillStyle = cols[(i + j) % 2]; ctx.fillRect(i * 128, j * 128, 128, 128); }
  ctx.strokeStyle = 'rgba(255,255,255,0.28)';
  ctx.lineWidth = 3;
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) ctx.strokeRect(i * 128 + 1.5, j * 128 + 1.5, 125, 125);
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
