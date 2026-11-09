// Estado global compartilhado entre os modulos
export const S = {
  scene: null,
  camera: null,
  renderer: null,
  sun: null,
  player: null,
  actors: [],       // jogador + bots (todos)
  bots: [],
  time: 0,          // tempo de jogo (s)
  dt: 0,
  phase: 'menu',    // menu | bus | playing | over
  paused: true,
  settings: { name: 'Jogador', quality: 'high', sens: 1.0, volume: 0.7 },
  alive: 0,
  total: 0,
  matchTime: 0,
  shake: 0,
};

export function camForward(out, camera) {
  camera.getWorldDirection(out);
  return out;
}
