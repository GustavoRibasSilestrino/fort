import * as THREE from 'three';
import { S } from './state.js';
import { blob, paint, move, merge } from './organic.js';

// Ceu, nuvens, luzes, agua
export const SKY_TOP = new THREE.Color('#2f84ff');
export const SKY_HORIZON = new THREE.Color('#c9ecff');

let sky, water, clouds = [];

export function buildSky(scene, quality) {
  scene.background = SKY_HORIZON.clone();
  scene.fog = new THREE.Fog(SKY_HORIZON.clone(), 220, 1100);

  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: SKY_TOP }, hor: { value: SKY_HORIZON }, sunDir: { value: new THREE.Vector3(0.5, 0.7, 0.35).normalize() },
    },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      varying vec3 vDir; uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir;
      void main(){
        float h = clamp(vDir.y, 0.0, 1.0);
        vec3 col = mix(hor, top, pow(h, 0.55));
        float s = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
        col += vec3(1.0, 0.95, 0.8) * (pow(s, 600.0) * 1.4 + pow(s, 12.0) * 0.18);
        if (vDir.y < 0.0) col = hor;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  sky = new THREE.Mesh(new THREE.SphereGeometry(1800, 32, 16), skyMat);
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  scene.add(sky);

  // luzes
  const hemi = new THREE.HemisphereLight('#d6ecff', '#8fb36a', 1.35);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff0cc', 2.7);
  sun.position.set(90, 140, 60);
  sun.castShadow = quality !== 'low';
  const sh = sun.shadow;
  sh.mapSize.set(quality === 'high' ? 2048 : 1024, quality === 'high' ? 2048 : 1024);
  sh.camera.left = -70; sh.camera.right = 70; sh.camera.top = 70; sh.camera.bottom = -70;
  sh.camera.near = 10; sh.camera.far = 420;
  sh.bias = -0.0008; sh.normalBias = 0.5;
  scene.add(sun, sun.target);
  S.sun = sun;
  S.sunOffset = new THREE.Vector3(90, 140, 60);

  // nuvens fofas: aglomerado de bolas suaves, achatado embaixo, com base azulada
  const cmat = new THREE.MeshLambertMaterial({ vertexColors: true, emissive: '#dfeaff', emissiveIntensity: 0.35 });
  const variants = [];
  for (let v = 0; v < 5; v++) {
    const parts = [];
    const n = 9 + ((Math.random() * 6) | 0);
    const L = 30 + Math.random() * 35;
    for (let k = 0; k < n; k++) {
      const t = k / (n - 1) - 0.5;
      const r = (11 + Math.random() * 11) * (1 - Math.abs(t) * 0.9);
      const b = blob(r, 3, 0.3, v * 11 + k, 1.25, 0.72, 1);
      paint(b, '#c4d2ea', '#ffffff', 0.03, -r * 0.7, r * 0.7, v);
      parts.push(move(b, t * L * 2 + (Math.random() - 0.5) * 8, Math.abs(t) * -6 + Math.random() * 8 + r * 0.25, (Math.random() - 0.5) * 18));
    }
    variants.push(merge(parts));
  }
  for (let i = 0; i < 24; i++) {
    const m = new THREE.Mesh(variants[i % variants.length], cmat);
    const s = 0.8 + Math.random() * 1.1;
    m.scale.set(s, s * (0.8 + Math.random() * 0.4), s);
    m.rotation.y = Math.random() * Math.PI;
    m.position.set((Math.random() - 0.5) * 1300, 210 + Math.random() * 130, (Math.random() - 0.5) * 1300);
    m.userData.speed = 2 + Math.random() * 3;
    scene.add(m);
    clouds.push(m);
  }
}

export function updateSky(dt, camPos) {
  if (sky) sky.position.copy(camPos);
  for (const c of clouds) {
    c.position.x += c.userData.speed * dt;
    if (c.position.x > 700) c.position.x = -700;
  }
  // sombra acompanha o jogador (encaixada em texels)
  if (S.sun && S.shadowFocus) {
    const f = S.shadowFocus;
    S.sun.position.set(f.x + S.sunOffset.x, f.y + S.sunOffset.y, f.z + S.sunOffset.z);
    S.sun.target.position.set(f.x, f.y, f.z);
    S.sun.target.updateMatrixWorld();
  }
}
