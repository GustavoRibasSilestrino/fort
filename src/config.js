// ===== Constantes e tabelas do jogo =====
export const G = 8;              // tamanho da celula de construcao (m)
export const H = 5;              // altura de um andar (m)
export const TH = H / 3;         // altura de uma linha de tiles da parede
export const SLOPE = H / G;      // inclinacao das rampas
export const WORLD_HALF = 400;   // o chao vai de -400 a +400
export const GRAVITY = 26;
export const STEP = 0.7;         // altura maxima de degrau
export const SNAP = 0.65;        // "cola" no chao ao descer

export const RARITY = [
  { name: 'Comum',    color: '#c4c8cc', dmg: 1.00 },
  { name: 'Incomum',  color: '#5fd04b', dmg: 1.04 },
  { name: 'Raro',     color: '#3f9bff', dmg: 1.08 },
  { name: 'Épico',    color: '#b657ff', dmg: 1.12 },
  { name: 'Lendário', color: '#ffb52e', dmg: 1.16 },
];

// kick = recuo da camera por tiro, len = comprimento do cano (m), struct = dano em construcoes
export const WEAPONS = {
  pistol:  { name: 'Pistola',          ammo: 'light',   dmg: 24,  rate: 0.26,  mag: 16, reload: 1.5, spread: 0.007, range: 140, auto: false, pellets: 1,  head: 2.0, kick: 0.012, zoom: 0.85, len: 0.30, struct: 20 },
  smg:     { name: 'Submetralhadora',  ammo: 'light',   dmg: 16,  rate: 0.082, mag: 30, reload: 1.8, spread: 0.024, range: 100, auto: true,  pellets: 1,  head: 1.8, kick: 0.007, zoom: 0.85, len: 0.42, struct: 14 },
  ar:      { name: 'Rifle de Assalto', ammo: 'medium',  dmg: 28,  rate: 0.15,  mag: 30, reload: 2.3, spread: 0.012, range: 240, auto: true,  pellets: 1,  head: 2.0, kick: 0.009, zoom: 0.8,  len: 0.66, struct: 26 },
  shotgun: { name: 'Escopeta',         ammo: 'shells',  dmg: 12,  rate: 0.95,  mag: 5,  reload: 3.2, spread: 0.055, range: 55,  auto: false, pellets: 10, head: 1.5, kick: 0.05,  zoom: 0.85, len: 0.8,  struct: 12 },
  sniper:  { name: 'Rifle Sniper',     ammo: 'heavy',   dmg: 108, rate: 1.5,   mag: 1,  reload: 2.8, spread: 0.02,  range: 700, auto: false, pellets: 1,  head: 2.0, kick: 0.06,  zoom: 0.2,  len: 1.05, struct: 90, scope: true },
  rocket:  { name: 'Lança-Foguetes',   ammo: 'rockets', dmg: 110, rate: 1.7,   mag: 1,  reload: 3.8, spread: 0.0,   range: 400, auto: false, pellets: 1,  head: 1.0, kick: 0.07,  zoom: 0.85, len: 0.9,  struct: 400, projectile: true },
};

export const AMMO = {
  light:   { name: 'Munição Leve',   color: '#ffd24a', max: 999 },
  medium:  { name: 'Munição Média',  color: '#ff9a3c', max: 999 },
  shells:  { name: 'Cartuchos',      color: '#ff5a4a', max: 999 },
  heavy:   { name: 'Munição Pesada', color: '#5ac8ff', max: 999 },
  rockets: { name: 'Foguetes',       color: '#c0ff5a', max: 999 },
};

export const CONSUMABLES = {
  bandage:      { name: 'Bandagem',        heal: 15,  shield: 0,  capHp: 75,  time: 3.5, max: 15, color: '#f5f5f5', short: 'BAND' },
  medkit:       { name: 'Kit Médico',      heal: 100, shield: 0,  capHp: 100, time: 8,   max: 3,  color: '#ff5a5a', short: 'KIT' },
  shield_small: { name: 'Poção Pequena',   heal: 0,   shield: 25, capSh: 50,  time: 2.5, max: 6,  color: '#7fd6ff', short: 'POÇ+' },
  shield_big:   { name: 'Poção de Escudo', heal: 0,   shield: 50, capSh: 100, time: 5,   max: 3,  color: '#3b6cff', short: 'POÇÃO' },
};

export const MATS = {
  wood:  { name: 'Madeira', color: '#e6a54f', trim: '#a8601f', hp: 150 },
  stone: { name: 'Pedra',   color: '#cfccc2', trim: '#8f8c84', hp: 300 },
  metal: { name: 'Metal',   color: '#9cc4ee', trim: '#5f86b5', hp: 450 },
};
