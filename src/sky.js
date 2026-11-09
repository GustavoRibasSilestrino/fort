import * as THREE from 'three';
import { S } from './state.js';

// Ceu, nuvens, luzes, agua
export const SKY_TOP = new THREE.Color('#3d8fe8');
export const SKY_HORIZON = new THREE.Color('#bfe4ff');

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
  const hemi = new THREE.HemisphereLight('#cfe8ff', '#7a8f5a', 1.25);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff3d6', 2.5);
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

  // nuvens
  const cmat = new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true, transparent: true, opacity: 0.95 });
  const sphere = new THREE.IcosahedronGeometry(1, 1);
  for (let i = 0; i < 26; i++) {
    const g = new THREE.Group();
    const n = 4 + ((Math.random() * 4) | 0);
    for (let k = 0; k < n; k++) {
      const m = new THREE.Mesh(sphere, cmat);
      const s = 14 + Math.random() * 16;
      m.scale.set(s * 1.4, s * 0.7, s);
      m.position.set((k - n / 2) * 20 + Math.random() * 8, Math.random() * 6, (Math.random() - 0.5) * 18);
      g.add(m);
    }
    g.position.set((Math.random() - 0.5) * 1300, 230 + Math.random() * 120, (Math.random() - 0.5) * 1300);
    g.userData.speed = 2 + Math.random() * 3;
    scene.add(g);
    clouds.push(g);
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
