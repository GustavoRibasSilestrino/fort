import * as THREE from 'three';
import { GeomBuilder, rr, pick, clamp, TAU } from './util.js';
import { RARITY, WEAPONS } from './config.js';

const CHAR_MAT = new THREE.MeshLambertMaterial({ vertexColors: true });
const FLASH_MAT = new THREE.MeshBasicMaterial({ color: '#ffe7a3', transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
const C = (c) => new THREE.Color(c);
const damp = (a, b, k) => a + (b - a) * k;

// ===== Armas (geometria com cor por vertice) =====
const gunCache = {};
export function gunGeo(kind, rarity = 0) {
  const key = kind + rarity;
  if (gunCache[key]) return gunCache[key];
  const b = new GeomBuilder();
  const dark = C('#2a2e36'), mid = C('#454b56'), wood = C('#7a4f2b'), steel = C('#9aa3ad');
  const acc = C(RARITY[rarity].color);
  switch (kind) {
    case 'pistol':
      b.addBox(-0.03, 0.0, -0.3, 0.03, 0.075, 0.04, mid);
      b.addBox(-0.025, -0.11, 0.0, 0.025, 0.0, 0.07, dark);
      b.addBox(-0.032, 0.03, -0.2, 0.032, 0.048, -0.04, acc);
      b.addBox(-0.012, 0.075, -0.28, 0.012, 0.09, -0.26, steel);
      break;
    case 'smg':
      b.addBox(-0.032, -0.01, -0.3, 0.032, 0.08, 0.12, mid);
      b.addBox(-0.014, 0.02, -0.44, 0.014, 0.05, -0.3, dark);
      b.addBox(-0.02, -0.25, -0.1, 0.02, -0.01, -0.03, dark);
      b.addBox(-0.025, -0.12, 0.05, 0.025, -0.01, 0.11, dark);
      b.addBox(-0.025, 0.0, 0.12, 0.025, 0.06, 0.3, mid);
      b.addBox(-0.034, 0.03, -0.26, 0.034, 0.05, -0.06, acc);
      break;
    case 'ar':
      b.addBox(-0.035, -0.02, -0.42, 0.035, 0.085, 0.12, mid);
      b.addBox(-0.014, 0.02, -0.68, 0.014, 0.05, -0.42, dark);
      b.addBox(-0.03, -0.04, 0.12, 0.03, 0.07, 0.34, dark);
      b.addBox(-0.025, -0.2, -0.17, 0.025, -0.02, -0.07, dark);
      b.addBox(-0.025, -0.12, 0.04, 0.025, -0.02, 0.1, dark);
      b.addBox(-0.016, 0.085, -0.3, 0.016, 0.115, -0.18, steel);
      b.addBox(-0.037, 0.02, -0.34, 0.037, 0.048, -0.12, acc);
      break;
    case 'shotgun':
      b.addBox(-0.032, -0.02, -0.22, 0.032, 0.08, 0.12, mid);
      b.addBox(-0.02, 0.02, -0.82, 0.02, 0.07, -0.22, dark);
      b.addBox(-0.036, -0.03, -0.52, 0.036, 0.04, -0.34, wood);
      b.addBox(-0.03, -0.05, 0.12, 0.03, 0.08, 0.4, wood);
      b.addBox(-0.034, 0.03, -0.2, 0.034, 0.055, -0.04, acc);
      break;
    case 'sniper':
      b.addBox(-0.03, -0.02, -0.3, 0.03, 0.075, 0.16, mid);
      b.addBox(-0.012, 0.02, -1.08, 0.012, 0.05, -0.3, dark);
      b.addBox(-0.032, 0.085, -0.4, 0.032, 0.15, -0.02, dark);
      b.addBox(-0.036, 0.09, -0.42, 0.036, 0.145, -0.4, acc);
      b.addBox(-0.028, -0.04, 0.16, 0.028, 0.08, 0.46, wood);
      b.addBox(-0.02, -0.12, -0.04, 0.02, -0.02, 0.02, dark);
      break;
    case 'rocket':
      b.addBox(-0.07, -0.03, -0.9, 0.07, 0.11, 0.1, C('#5b6b3a'));
      b.addBox(-0.09, -0.05, -0.98, 0.09, 0.13, -0.86, dark);
      b.addBox(-0.075, -0.03, 0.08, 0.075, 0.11, 0.2, dark);
      b.addBox(-0.025, -0.14, -0.12, 0.025, -0.03, -0.04, dark);
      b.addBox(-0.025, -0.14, 0.02, 0.025, -0.03, 0.08, dark);
      b.addBox(-0.072, 0.03, -0.55, 0.072, 0.06, -0.3, acc);
      b.addBox(-0.015, 0.11, -0.4, 0.015, 0.16, -0.3, steel);
      break;
    case 'pickaxe':
      b.addBox(-0.022, -0.022, -0.62, 0.022, 0.022, 0.1, wood);
      b.addBox(-0.26, -0.035, -0.7, 0.26, 0.05, -0.58, C('#b9c2cc'));
      b.addBox(-0.27, -0.12, -0.7, -0.21, 0.05, -0.58, C('#d94a3a'));
      b.addBox(0.21, -0.12, -0.7, 0.27, 0.05, -0.58, C('#d94a3a'));
      break;
  }
  const g = b.build();
  gunCache[key] = g;
  return g;
}
export function gunLen(kind) {
  return kind === 'pickaxe' ? 0.7 : WEAPONS[kind].len;
}
export function gunMesh(kind, rarity = 0) {
  const m = new THREE.Mesh(gunGeo(kind, rarity), CHAR_MAT);
  m.castShadow = true;
  return m;
}

// ===== Personagem =====
const SHIRTS = ['#e84a5f', '#2a9d8f', '#e9c46a', '#6a4c93', '#1982c4', '#ff924c', '#8ac926', '#f72585', '#4cc9f0', '#ef476f'];
const PANTS = ['#264653', '#3d405b', '#5c4033', '#2b2d42', '#1b4332', '#41337a', '#4a4e69'];
const HAIRS = ['#2b1b10', '#5a3a1a', '#c9a227', '#161616', '#7a2a1a', '#cfcfcf', '#2d6cdf', '#d6409f'];
const SKINS = ['#f2c9a0', '#e0ac80', '#c68642', '#8d5524', '#ffdbac'];
const HATS = [null, 'cap', 'helmet', 'beanie', null];

// Skin padrao de todos os personagens: sem camisa, calca cargo bege, tenis branco/marrom, tranças, correntes e tatuagens
export const SKIN_OUTFIT = { style: 'rapper', skin: '#7a4a2e', hair: '#17110d', pants: '#8c7352', shirt: '#7a4a2e', pack: '#2f2a26', hat: null, hatColor: '#000000' };
export function randomOutfit() {
  return { ...SKIN_OUTFIT };
}
export function randomOutfitOld() {
  return { shirt: pick(SHIRTS), pants: pick(PANTS), hair: pick(HAIRS), skin: pick(SKINS), hat: pick(HATS), hatColor: pick(SHIRTS), pack: pick(['#3b3b44', '#7a5a3a', '#2f4f6f', '#6a2f3f']) };
}

// torso + mochila (origem no quadril)
function torsoGeo(o) {
  const b = new GeomBuilder();
  if (o.style === 'rapper') {
    const sk = C(o.skin), ink = C('#2b1a12'), band = C('#e9e6df');
    b.addBox(-0.25, 0.0, -0.14, 0.25, 0.62, 0.14, sk, sk.clone().multiplyScalar(0.85));
    b.addBox(-0.12, 0.34, -0.145, 0.12, 0.5, -0.14, sk.clone().multiplyScalar(1.12));      // peitoral
    b.addBox(-0.015, 0.1, -0.145, 0.015, 0.34, -0.14, sk.clone().multiplyScalar(0.75));    // linha do abdomen
    for (const [x, y, w] of [[-0.14, 0.18, 0.07], [0.07, 0.2, 0.07], [-0.1, 0.1, 0.05], [0.12, 0.08, 0.05]]) b.addBox(x, y, -0.147, x + w, y + 0.05, -0.14, ink); // tatuagens
    b.addBox(-0.26, 0.0, -0.15, 0.26, 0.1, 0.15, C('#8c7352'));                            // cos da calca
    b.addBox(-0.262, 0.07, -0.152, 0.262, 0.12, 0.152, band);                                // elastico branco
    // correntes prateadas e pingente
    const chain = C('#d8dde3'), dk = C('#8a2d2d');
    b.addBox(-0.13, 0.54, -0.15, 0.13, 0.57, -0.14, chain);
    b.addBox(-0.09, 0.45, -0.15, 0.09, 0.48, -0.14, chain);
    b.addBox(-0.03, 0.3, -0.15, 0.03, 0.46, -0.145, chain);
    b.addBox(-0.04, 0.27, -0.155, 0.04, 0.38, -0.145, dk);
    b.addBox(-0.2, 0.06, 0.14, 0.2, 0.5, 0.26, C(o.pack));
    return b.build();
  }
  const shirt = C(o.shirt);
  b.addBox(-0.25, 0.0, -0.14, 0.25, 0.62, 0.14, shirt, shirt.clone().multiplyScalar(0.8));
  b.addBox(-0.255, 0.0, -0.145, 0.255, 0.09, 0.145, C('#2b2b2f'));
  b.addBox(-0.2, 0.06, 0.14, 0.2, 0.52, 0.32, C(o.pack));
  b.addBox(-0.15, 0.1, 0.32, 0.15, 0.25, 0.36, C(o.pack).multiplyScalar(0.7));
  return b.build();
}
// cabeca (origem na base do pescoco)
function headGeo(o) {
  const b = new GeomBuilder();
  const skin = C(o.skin), hair = C(o.hair);
  b.addBox(-0.06, -0.02, -0.06, 0.06, 0.06, 0.06, skin);
  b.addBox(-0.17, 0.04, -0.17, 0.17, 0.38, 0.17, skin);
  b.addBox(-0.11, 0.18, -0.175, -0.05, 0.24, -0.17, C('#1b1b1b'));
  b.addBox(0.05, 0.18, -0.175, 0.11, 0.24, -0.17, C('#1b1b1b'));
  b.addBox(-0.05, 0.09, -0.175, 0.05, 0.11, -0.17, C('#a0524a'));
  if (o.style === 'rapper') {
    const braid = C(o.hair), dk = braid.clone().multiplyScalar(1.6);
    b.addBox(-0.18, 0.31, -0.18, 0.18, 0.4, 0.18, braid);                    // topo
    b.addBox(-0.18, 0.28, -0.18, 0.18, 0.33, -0.12, braid);                  // franja
    b.addBox(-0.18, 0.1, 0.12, 0.18, 0.33, 0.18, braid);                     // nuca
    b.addBox(-0.19, 0.04, -0.05, -0.17, 0.33, 0.1, braid);                   // laterais
    b.addBox(0.17, 0.04, -0.05, 0.19, 0.33, 0.1, braid);
    for (let k = 0; k < 6; k++) {                                              // trancas
      const x = -0.15 + k * 0.06;
      b.addBox(x, -0.2 - (k % 2) * 0.05, 0.14, x + 0.035, 0.3, 0.2, k % 2 ? dk : braid);
    }
    b.addBox(-0.175, 0.16, -0.18, -0.15, 0.2, -0.17, C('#2b1a12'));         // tatuagem no rosto
    b.addBox(-0.19, 0.12, 0.0, -0.175, 0.16, 0.04, C('#d8dde3'));            // brinco
    return b.build();
  }
  if (o.hat === 'cap') {
    b.addBox(-0.18, 0.31, -0.18, 0.18, 0.42, 0.18, C(o.hatColor));
    b.addBox(-0.18, 0.31, -0.3, 0.18, 0.34, -0.18, C(o.hatColor));
    b.addBox(-0.175, 0.14, 0.12, 0.175, 0.31, 0.18, hair);
  } else if (o.hat === 'helmet') {
    b.addBox(-0.19, 0.22, -0.19, 0.19, 0.44, 0.19, C('#4b5a3a'), C('#3a4a2c'));
    b.addBox(-0.2, 0.22, -0.2, 0.2, 0.26, 0.2, C('#2a331f'));
  } else if (o.hat === 'beanie') {
    b.addBox(-0.185, 0.28, -0.185, 0.185, 0.42, 0.185, C(o.hatColor));
    b.addBox(-0.04, 0.42, -0.04, 0.04, 0.48, 0.04, C('#ffffff'));
  } else {
    b.addBox(-0.18, 0.31, -0.18, 0.18, 0.42, 0.18, hair);
    b.addBox(-0.18, 0.14, 0.12, 0.18, 0.33, 0.18, hair);
    b.addBox(-0.18, 0.28, -0.18, 0.18, 0.34, -0.12, hair);
  }
  return b.build();
}
const upperArmGeo = (o) => {
  const b = new GeomBuilder();
  b.addBox(-0.075, -0.30, -0.085, 0.075, 0.06, 0.085, C(o.shirt));
  if (o.style === 'rapper') {
    const ink = C('#2b1a12');
    b.addBox(-0.077, -0.24, -0.06, 0.077, -0.12, 0.06, ink);
    b.addBox(-0.077, -0.06, -0.04, 0.077, 0.03, 0.05, ink);
  }
  return b.build();
};
const foreArmGeo = (o) => {
  const b = new GeomBuilder();
  b.addBox(-0.065, -0.30, -0.075, 0.065, 0.0, 0.075, C(o.skin));
  b.addBox(-0.07, -0.34, -0.08, 0.07, -0.28, 0.08, C(o.skin).multiplyScalar(0.92));
  if (o.style === 'rapper') {
    const ink = C('#2b1a12');
    b.addBox(-0.067, -0.22, -0.077, 0.067, -0.1, 0.077, ink);
    b.addBox(-0.072, -0.35, -0.04, 0.072, -0.33, 0.04, C('#d8dde3'));   // anel
  }
  return b.build();
};
const thighGeo = (o) => {
  const b = new GeomBuilder();
  b.addBox(-0.1, -0.42, -0.11, 0.1, 0.0, 0.11, C(o.pants));
  if (o.style === 'rapper') {
    const dk = C(o.pants).multiplyScalar(0.8);
    b.addBox(-0.11, -0.26, -0.06, -0.1, -0.1, 0.06, dk);        // bolso lateral
    b.addBox(0.1, -0.26, -0.06, 0.12, -0.1, 0.06, dk);
    b.addBox(-0.08, -0.12, -0.115, 0.08, -0.04, -0.11, dk);      // bolso frontal
  }
  return b.build();
};
const shinGeo = (o) => {
  const b = new GeomBuilder();
  b.addBox(-0.095, -0.30, -0.1, 0.095, 0.0, 0.1, C(o.pants));
  if (o.style === 'rapper') {
    const dk = C(o.pants).multiplyScalar(0.75);
    b.addBox(-0.105, -0.2, -0.105, 0.105, -0.14, 0.105, dk);     // tira da perna
    b.addBox(-0.105, -0.12, -0.105, 0.105, -0.07, 0.105, dk);
    b.addBox(-0.1, -0.38, -0.17, 0.1, -0.3, 0.11, C('#f1efe9'));  // tenis branco
    b.addBox(-0.1, -0.38, -0.17, 0.1, -0.35, 0.11, C('#d8d4cb'));  // sola
    b.addBox(-0.102, -0.34, -0.06, 0.102, -0.3, 0.11, C('#6b4a33')); // cano marrom
    b.addBox(-0.102, -0.36, -0.17, 0.102, -0.3, -0.1, C('#6b4a33'));
    return b.build();
  }
  b.addBox(-0.105, -0.38, -0.15, 0.105, -0.30, 0.11, C('#2a2a30'));
  return b.build();
};

const ease = (t) => t * t * (3 - 2 * t);
const lerpN = (a, b, t) => a + (b - a) * t;

// planta azul (mao esquerda) e lapis (mao direita): o que o personagem segura ao construir/editar, como no Fortnite
function blueprintGeo() {
  const b = new GeomBuilder();
  const blue = C('#2f7fe6'), line = C('#dcecff');
  b.addBox(-0.22, -0.34, -0.075, 0.22, 0.04, -0.06, blue);
  const ln = (x0, y0, x1, y1) => b.addBox(x0, y0, -0.08, x1, y1, -0.074, line);
  ln(-0.19, -0.31, 0.19, -0.3); ln(-0.19, 0.0, 0.19, 0.01); ln(-0.19, -0.31, -0.18, 0.01); ln(0.18, -0.31, 0.19, 0.01);
  ln(-0.19, -0.16, 0.19, -0.153); ln(-0.06, -0.31, -0.053, 0.01); ln(0.07, -0.16, 0.077, 0.01);
  ln(-0.15, -0.26, -0.09, -0.2); ln(0.0, -0.1, 0.05, -0.05);
  return b.build();
}
function pencilGeo() {
  const b = new GeomBuilder();
  b.addBox(-0.018, -0.02, -0.2, 0.018, 0.02, 0.05, C('#ffd23f'));
  b.addBox(-0.02, -0.022, -0.24, 0.02, 0.022, -0.2, C('#ff8fb3'));
  b.addBox(-0.012, -0.014, 0.05, 0.012, 0.014, 0.09, C('#e8c9a0'));
  b.addBox(-0.006, -0.007, 0.09, 0.006, 0.007, 0.11, C('#333333'));
  return b.build();
}

export function createCharacter(o = randomOutfit()) {
  const root = new THREE.Group();
  const hip = new THREE.Group();
  hip.position.y = 0.8;
  root.add(hip);

  const spine = new THREE.Group();           // tronco (inclina/gira)
  hip.add(spine);
  const torso = new THREE.Mesh(torsoGeo(o), CHAR_MAT);
  torso.castShadow = true;
  spine.add(torso);
  const head = new THREE.Group();
  head.position.y = 0.62;
  const headMesh = new THREE.Mesh(headGeo(o), CHAR_MAT);
  headMesh.castShadow = true;
  head.add(headMesh);
  spine.add(head);

  const mkArm = (x) => {
    const upper = new THREE.Group(); upper.position.set(x, 0.55, 0);
    const um = new THREE.Mesh(upperArmGeo(o), CHAR_MAT); um.castShadow = true; upper.add(um);
    const fore = new THREE.Group(); fore.position.y = -0.30;
    const fm = new THREE.Mesh(foreArmGeo(o), CHAR_MAT); fm.castShadow = true; fore.add(fm);
    upper.add(fore); spine.add(upper);
    return { upper, fore };
  };
  const mkLeg = (x) => {
    const thigh = new THREE.Group(); thigh.position.set(x, 0, 0);
    const tm = new THREE.Mesh(thighGeo(o), CHAR_MAT); tm.castShadow = true; thigh.add(tm);
    const shin = new THREE.Group(); shin.position.y = -0.42;
    const sm = new THREE.Mesh(shinGeo(o), CHAR_MAT); sm.castShadow = true; shin.add(sm);
    thigh.add(shin); hip.add(thigh);
    return { thigh, shin };
  };
  const L = mkArm(-0.33), R = mkArm(0.33), LL = mkLeg(-0.13), RL = mkLeg(0.13);

  const hand = new THREE.Group();
  hand.position.set(0, -0.3, 0);
  R.fore.add(hand);
  const gunGroup = new THREE.Group();
  hand.add(gunGroup);
  const muzzle = new THREE.Object3D();
  gunGroup.add(muzzle);
  const flash = new THREE.Group();
  const fl1 = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.34), FLASH_MAT);
  const fl2 = fl1.clone(); fl2.rotation.z = Math.PI / 4;
  const fl3 = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.34), FLASH_MAT); fl3.rotation.y = Math.PI / 2;
  flash.add(fl1, fl2, fl3);
  flash.visible = false;
  gunGroup.add(flash);

  const handL = new THREE.Group();
  handL.position.set(0, -0.3, 0);
  L.fore.add(handL);
  const blueprint = new THREE.Mesh(blueprintGeo(), CHAR_MAT);
  blueprint.castShadow = true; blueprint.visible = false;
  handL.add(blueprint);
  const pencil = new THREE.Mesh(pencilGeo(), CHAR_MAT);
  pencil.castShadow = true; pencil.visible = false;
  hand.add(pencil);

  const glider = new THREE.Group();   // mantido por compatibilidade (nao usado)
  glider.visible = false;
  root.add(glider);

  // estado da animacao
  const A = { amp: 0, phase: 0, lean: 0, crouchK: 0, slideK: 0, airK: 0, landDip: 0, wasGrounded: true, t: Math.random() * 10, recoil: 0, gunPitch: 0 };

  const ch = {
    root, hip, spine, head, armL: L.upper, armR: R.upper, foreL: L.fore, foreR: R.fore, legL: LL.thigh, legR: RL.thigh, hand, gunGroup, muzzle, flash, glider, outfit: o,
    held: null, heldKind: null, flashT: 0, swingT: 0, building: false,
    // modo construcao/edicao: planta numa mao e lapis na outra
    setBuild(on) { if (this.building === on) return; this.building = on; blueprint.visible = on; pencil.visible = on; },
    hold(kind, rarity = 0) {
      if (this.heldKind === kind + rarity) return;
      if (this.held) { gunGroup.remove(this.held); this.held = null; }
      this.heldKind = kind ? kind + rarity : null;
      this.kind = kind;
      if (!kind) { muzzle.position.set(0, 0, 0); return; }
      this.held = gunMesh(kind, rarity);
      gunGroup.add(this.held);
      muzzle.position.set(0, 0.05, -gunLen(kind) - 0.04);
      flash.position.set(0, 0.05, -gunLen(kind) - 0.12);
    },
    doFlash() { this.flashT = 0.05; A.recoil = 1; flash.visible = true; flash.rotation.z = Math.random() * 3; const s = 0.7 + Math.random() * 0.7; flash.scale.set(s, s, s); },
    muzzleWorld(out) { root.updateWorldMatrix(true, true); muzzle.getWorldPosition(out); return out; },

    // st: { speed, vfwd, vside, grounded, vy, aim, pitch, swing(0..1 ou -1), crouch, slide, run, reloading }
    animate(dt, st) {
      const k = 1 - Math.exp(-18 * dt), kSlow = 1 - Math.exp(-9 * dt);
      A.t += dt;
      if (this.flashT > 0) { this.flashT -= dt; if (this.flashT <= 0) flash.visible = false; }
      A.recoil = Math.max(0, A.recoil - dt * 9);
      const kind = this.kind;
      const gun = kind && kind !== 'pickaxe';
      const pick_ = kind === 'pickaxe';
      const grounded = st.grounded !== false;
      const speed = st.slide ? 0 : st.speed || 0;
      const vfwd = st.vfwd !== undefined ? st.vfwd : speed;
      const dirSign = vfwd < -0.25 * speed ? -1 : 1;
      const sprint = !!st.run && speed > 6.5;
      const pitch = st.pitch || 0;

      // aterrissagem: afunda o quadril
      if (grounded && !A.wasGrounded) A.landDip = Math.min(1, 0.35 + Math.abs(st.vyPrev || 0) * 0.04);
      A.wasGrounded = grounded;
      A.landDip = Math.max(0, A.landDip - dt * 5);

      A.crouchK = lerpN(A.crouchK, st.crouch ? 1 : 0, k);
      A.slideK = lerpN(A.slideK, st.slide ? 1 : 0, 1 - Math.exp(-16 * dt));
      A.airK = lerpN(A.airK, grounded ? 0 : 1, 1 - Math.exp(-14 * dt));
      const moveK = Math.min(1, speed / 4.5);
      A.amp = lerpN(A.amp, grounded ? moveK : 0, kSlow);
      const cadence = 2.6 + speed * (sprint ? 1.05 : 1.25);
      A.phase += dt * cadence * (speed > 0.3 ? 1 : 0);
      const ph = A.phase;
      const sw = Math.sin(ph), cs = Math.cos(ph);
      const walk = A.amp * (1 - A.crouchK * 0.45) * (1 - A.airK);

      // ---- pernas ----
      const strideA = (sprint ? 0.95 : 0.62) * walk * dirSign;
      const kneeK = (sprint ? 1.45 : 1.0) * walk;
      let tL = sw * strideA, tR = -sw * strideA;
      let sL = -(Math.max(0, cs) * kneeK + 0.04), sR = -(Math.max(0, -cs) * kneeK + 0.04);
      // agachado
      tL += A.crouchK * 0.95; tR += A.crouchK * 0.85; sL -= A.crouchK * 1.55; sR -= A.crouchK * 1.45;
      // no ar
      if (A.airK > 0.01) {
        const rising = (st.vy || 0) > 0.5;
        tL = lerpN(tL, rising ? 0.7 : 0.35, A.airK); sL = lerpN(sL, rising ? -1.2 : -0.5, A.airK);
        tR = lerpN(tR, rising ? -0.15 : -0.3, A.airK); sR = lerpN(sR, rising ? -0.6 : -0.2, A.airK);
      }
      // aterrissagem
      tL += A.landDip * 0.7; tR += A.landDip * 0.7; sL -= A.landDip * 1.2; sR -= A.landDip * 1.2;
      // deslizando: uma perna esticada, a outra dobrada
      if (A.slideK > 0.01) { tL = lerpN(tL, 1.35, A.slideK); sL = lerpN(sL, -0.12, A.slideK); tR = lerpN(tR, 0.55, A.slideK); sR = lerpN(sR, -1.55, A.slideK); }

      // ---- tronco ----
      let hipY = 0.8 - A.crouchK * 0.3 - A.landDip * 0.18 - A.slideK * 0.34;
      hipY += -Math.abs(sw) * 0.045 * walk * (sprint ? 1.5 : 1) + Math.sin(A.t * 1.7) * 0.006 * (1 - walk);
      let lean = -(0.03 + speed * 0.012 * dirSign) * walk - A.crouchK * 0.26 - A.landDip * 0.2;
      if (sprint) lean -= 0.12;
      lean = lerpN(lean, 0.95, A.slideK);
      const twist = sw * 0.14 * walk * (gun ? 0.4 : 1);
      const roll = sw * 0.035 * walk;

      // ---- bracos ----
      let uLx, uLz = 0, fLx, uRx, uRz = 0, fRx;
      let gunPitch = pitch;
      const armSwing = sw * 0.75 * walk * dirSign;
      if (gun) {
        const reload = st.reloading ? 1 : 0;
        const rc = A.recoil * 0.14;
        if (st.aim) { uRx = 1.22 + pitch * 0.55 + rc; fRx = 0.4; uLx = 1.2 + pitch * 0.55; uLz = 0.5; fLx = 0.62; gunPitch = pitch; }
        else if (sprint) { uRx = 0.55 + armSwing * 0.1; fRx = 1.25; uLx = 0.75; uLz = 0.5; fLx = 1.3; gunPitch = -0.45; }
        else { uRx = 0.85 + pitch * 0.35 + rc; fRx = 0.85; uLx = 0.95 + pitch * 0.35; uLz = 0.55; fLx = 0.95; gunPitch = pitch * 0.7 - 0.05; }
        if (reload) { gunPitch -= 0.5; fLx = 1.9; uLx = 0.6; uLz = 0.6; uRx -= 0.15; }
      } else if (pick_) {
        uLx = -armSwing; fLx = 0.2 + Math.max(0, -sw) * 0.5 * walk;
        uRx = 0.45 + armSwing * 0.45; fRx = 0.9 + Math.max(0, sw) * 0.2 * walk;
        gunPitch = 0.9 + pitch * 0.2;
        if (st.swing >= 0) {
          const t = st.swing;
          if (t < 0.34) { const e = ease(t / 0.34); uRx = lerpN(0.6, 2.95, e); fRx = lerpN(0.9, 1.5, e); uLx = lerpN(uLx, 1.2, e); }
          else if (t < 0.55) { const e = ease((t - 0.34) / 0.21); uRx = lerpN(2.95, 0.55, e); fRx = lerpN(1.5, 0.25, e); uLx = 1.0; }
          else { const e = ease((t - 0.55) / 0.45); uRx = lerpN(0.55, 0.6, e); fRx = lerpN(0.25, 0.9, e); uLx = lerpN(1.0, uLx, e); }
          gunPitch = t < 0.34 ? lerpN(0.9, 1.5, ease(t / 0.34)) : lerpN(1.5, 0.6, ease(Math.min(1, (t - 0.34) / 0.3)));
        }
      } else if (this.building) {
        // segurando a planta na frente do corpo e o lapis levantado
        const bob = Math.sin(A.t * 2.1) * 0.03;
        uLx = 1.0 + pitch * 0.3 + bob; uLz = 0.32; fLx = 0.95;
        uRx = 0.8 + pitch * 0.3 - bob; fRx = 1.35;
      } else {
        uLx = -armSwing; uRx = armSwing; fLx = 0.25 + Math.max(0, -sw) * 0.55 * walk; fRx = 0.25 + Math.max(0, sw) * 0.55 * walk;
      }
      if (st.swing >= 0 && pick_) { /* tronco acompanha o golpe */ }
      let spineTwist = twist;
      if (st.swing >= 0 && pick_) spineTwist += st.swing < 0.34 ? lerpN(0, -0.35, ease(st.swing / 0.34)) : lerpN(-0.35, 0.3, ease(Math.min(1, (st.swing - 0.34) / 0.25)));
      const bld = this.building && !gun && !pick_;
      if (A.airK > 0.5 && !gun && !bld) { uLx = 0.4; uRx = 0.4; uLz = -0.5; uRz = 0.5; }
      if (A.slideK > 0.3 && !gun && !bld) { uLx = 0.9; uRx = 0.9; fLx = 0.5; fRx = 0.5; }
      uRz = pick_ || gun ? -0.12 : -0.1;
      if (!gun && !bld) uLz = 0.1;

      // ---- aplica com suavizacao ----
      hip.position.y = lerpN(hip.position.y, hipY, k);
      spine.rotation.x = lerpN(spine.rotation.x, lean, k);
      spine.rotation.y = lerpN(spine.rotation.y, spineTwist, k);
      spine.rotation.z = lerpN(spine.rotation.z, roll, k);
      LL.thigh.rotation.x = lerpN(LL.thigh.rotation.x, tL, k); RL.thigh.rotation.x = lerpN(RL.thigh.rotation.x, tR, k);
      LL.shin.rotation.x = lerpN(LL.shin.rotation.x, sL, k); RL.shin.rotation.x = lerpN(RL.shin.rotation.x, sR, k);
      L.upper.rotation.x = lerpN(L.upper.rotation.x, uLx, k); L.upper.rotation.z = lerpN(L.upper.rotation.z, uLz, k); L.fore.rotation.x = lerpN(L.fore.rotation.x, fLx, k);
      R.upper.rotation.x = lerpN(R.upper.rotation.x, uRx, k); R.upper.rotation.z = lerpN(R.upper.rotation.z, uRz, k); R.fore.rotation.x = lerpN(R.fore.rotation.x, fRx, k);
      // cabeca olha para onde a camera aponta
      const headT = clamp(pitch, -0.8, 0.8) * 0.85 - spine.rotation.x - hip.rotation.x * 0;
      head.rotation.x = lerpN(head.rotation.x, headT, k);
      head.rotation.y = lerpN(head.rotation.y, -spine.rotation.y * 0.8, k);
      // a arma/picareta mantem a direcao desejada, independente da pose dos bracos
      A.gunPitch = lerpN(A.gunPitch, gunPitch, k);
      const total = hip.rotation.x + spine.rotation.x + R.upper.rotation.x + R.fore.rotation.x;
      gunGroup.rotation.x = pick_ ? -0.45 + (A.gunPitch - 0.9) * 0.6 : A.gunPitch - total;
      gunGroup.rotation.y = 0;
      glider.visible = false;
    },
  };
  ch.hold('pickaxe', 0);
  return ch;
}

// ===== Onibus de batalha =====
export function createBus() {
  const g = new THREE.Group();
  const b = new GeomBuilder();
  const blue = C('#2f7de1'), white = C('#f4f7fb'), dark = C('#1c2b44'), yellow = C('#ffd23f');
  b.addBox(-1.7, 0.4, -5, 1.7, 3.6, 5, blue, C('#1f5db0'));
  b.addBox(-1.72, 2.4, -4.9, 1.72, 3.1, 4.9, dark);       // janelas
  b.addBox(-1.75, 1.7, -5.02, 1.75, 2.0, 5.02, white);      // faixa
  b.addBox(-1.6, 3.6, -4.5, 1.6, 3.9, 4.5, white);          // teto
  b.addBox(-1.3, 0.0, -4.2, -0.9, 0.4, -3.4, dark);
  b.addBox(0.9, 0.0, -4.2, 1.3, 0.4, -3.4, dark);
  b.addBox(-1.3, 0.0, 3.4, -0.9, 0.4, 4.2, dark);
  b.addBox(0.9, 0.0, 3.4, 1.3, 0.4, 4.2, dark);
  b.addBox(-1.2, 1.0, -5.06, -0.6, 1.5, -5.0, yellow);      // faros
  b.addBox(0.6, 1.0, -5.06, 1.2, 1.5, -5.0, yellow);
  b.addBox(-1.2, 2.45, -5.03, 1.2, 3.05, -5.0, C('#7fc4ff'));
  const body = new THREE.Mesh(b.build(), CHAR_MAT);
  body.castShadow = true;
  g.add(body);
  // balao
  const bg = new THREE.SphereGeometry(6.2, 20, 14).toNonIndexed();
  const pos = bg.attributes.position;
  const cols = new Float32Array(pos.count * 3);
  const c1 = C('#ff4455'), c2 = C('#fff4e8');
  for (let i = 0; i < pos.count; i += 3) {
    const cx = (pos.getX(i) + pos.getX(i + 1) + pos.getX(i + 2)) / 3, cz = (pos.getZ(i) + pos.getZ(i + 1) + pos.getZ(i + 2)) / 3;
    const ang = Math.atan2(cz, cx);
    const stripe = Math.floor(((ang + Math.PI) / TAU) * 10) % 2 === 0 ? c1 : c2;
    for (let k = 0; k < 3; k++) { cols[(i + k) * 3] = stripe.r; cols[(i + k) * 3 + 1] = stripe.g; cols[(i + k) * 3 + 2] = stripe.b; }
  }
  bg.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  bg.computeVertexNormals();
  const balloon = new THREE.Mesh(bg, new THREE.MeshLambertMaterial({ vertexColors: true }));
  balloon.position.y = 12.5;
  balloon.castShadow = true;
  g.add(balloon);
  for (const [x, z] of [[-1.4, -3.5], [1.4, -3.5], [-1.4, 3.5], [1.4, 3.5]]) {
    const len = 9;
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, len, 4), new THREE.MeshBasicMaterial({ color: '#d9d9d9' }));
    rope.position.set(x * 0.8, 4 + len / 2, z * 0.8);
    g.add(rope);
  }
  g.scale.setScalar(1.0);
  return g;
}
