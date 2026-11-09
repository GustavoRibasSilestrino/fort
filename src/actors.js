import { createCharacter, randomOutfit } from './characters.js';
import { S } from './state.js';

let aid = 0;
export function makeActor({ name, isPlayer = false }) {
  const a = {
    id: ++aid, name, isPlayer,
    x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
    yaw: 0, pitch: 0,
    radius: 0.4, height: 1.8,
    hp: 100, shield: 0, alive: true,
    grounded: false, inWater: false,
    mode: 'bus', // bus | fall | glide | ground | dead
    kills: 0, crouch: false,
    weapon: null,
    model: createCharacter(randomOutfit()),
    lastHurtBy: null,
  };
  a.model.root.visible = false;
  return a;
}

export function isDownedTarget(a) {
  return a.alive && a.mode !== 'bus' && a.mode !== 'dead';
}

export function eyePos(a, out) {
  out.set(a.x, a.y + a.height - 0.2, a.z);
  return out;
}
