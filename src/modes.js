import { S } from './state.js';
import { player, giveLoadout, respawnPlayer, ps } from './player.js';
import { bot, createBot, respawnBot, createDummy, placeDummy, removeDummy, dummy, updateBot, updateDummy } from './bots.js';
import { clearAllPieces } from './pieces.js';
import { setWorldLimit } from './physics.js';
import { setBoundary, makeSpawnRing } from './terrain.js';
import { on, emit } from './events.js';
import { toast } from './hud.js';
import { sfx } from './audio.js';
import { hit, binds, keyName } from './bind.js';

// Estado dos modos de jogo: 'freebuild' (treino livre) e 'duel' (1v1)
export const M = { type: 'freebuild', score: [0, 0], goal: 5, state: 'idle', timer: 0, round: 0, diff: 'normal', lastCount: 0 };
S.duel = M;
const ARENA = { freebuild: 280, duel: 75 };
let rings = [];

export function startMode(type, diff) {
  M.type = type; M.diff = diff || 'normal';
  S.mode = type;
  S.infMats = type === 'freebuild';
  S.freeze = false; S.freezeAI = false;
  S.matchTime = 0;
  S.phase = 'playing';
  const half = ARENA[type];
  setWorldLimit(half - 1.5);
  setBoundary(S.scene, half);
  for (const r of rings) S.scene.remove(r);
  rings = [];
  clearAllPieces();
  giveLoadout(type);
  if (!bot) createBot();
  if (!dummy) createDummy();
  if (type === 'freebuild') {
    respawnPlayer(0, 0, 0);
    removeDummy();
    bot.alive = false; bot.mode = 'dead'; bot.model.root.visible = false;
    toast('FREEBUILD — materiais e munição infinitos', false, 4000);
    toast(`${keyName(binds.wall)}/${keyName(binds.floor)}/${keyName(binds.stairs)}/${keyName(binds.roof)}: parede/piso/escada/cone  •  ${keyName(binds.edit)}: editar  •  ${keyName(binds.dummy)}: boneco`, false, 6500);
  } else {
    M.score = [0, 0]; M.round = 0;
    rings.push(makeSpawnRing(S.scene, 0, 38, '#3fb6ff'), makeSpawnRing(S.scene, 0, -38, '#ff5470'));
    startRound();
  }
}

function startRound() {
  M.round++;
  clearAllPieces();
  giveLoadout('duel');
  respawnPlayer(0, 38, 0);
  respawnBot(0, -38, Math.PI, M.diff);
  S.freeze = true; S.freezeAI = false;
  M.state = 'countdown'; M.timer = 3.5; M.lastCount = 4;
  emit('roundStart', M.round);
}

// teclas do modo livre
function freebuildKeys() {
  if (hit('clearAll')) {
    clearAllPieces();
    toast('Construções removidas', false, 1500);
  }
  if (hit('dummy')) {
    if (dummy.enabled) { removeDummy(); toast('Boneco removido', false, 1200); }
    else {
      const yaw = ps.camYaw;
      placeDummy(player.x - Math.sin(yaw) * 14, player.z - Math.cos(yaw) * 14, yaw + Math.PI);
      toast(`Boneco de treino colocado (${keyName(binds.clearAll)} limpa construções)`, false, 2200);
    }
  }
}

export function updateMode(dt) {
  if (M.type === 'freebuild') {
    freebuildKeys();
    updateDummy(dt);
    return;
  }
  // duelo
  if (M.state === 'countdown') {
    M.timer -= dt;
    const n = Math.ceil(M.timer);
    if (n !== M.lastCount && n > 0 && n <= 3) { M.lastCount = n; toast(String(n), true, 900); sfx.empty(); }
    if (M.timer <= 0) { M.state = 'fight'; S.freeze = false; toast('LUTE!', true, 1100); sfx.chest(); }
  } else if (M.state === 'between') {
    M.timer -= dt;
    if (M.timer <= 0) startRound();
  }
  updateBot(dt);
}

on('kill', ({ victim, attacker }) => {
  if (M.type !== 'duel' || M.state !== 'fight') return;
  const me = victim === player ? 1 : 0;
  M.score[victim === player ? 1 : 0]++;
  M.state = 'between'; M.timer = 2.6;
  S.freezeAI = true;
  toast(victim === player ? 'Você foi eliminado' : 'Você eliminou o bot!', true, 2000);
  if (M.score[0] >= M.goal || M.score[1] >= M.goal) {
    M.state = 'over';
    S.phase = 'over';
    emit('duelOver', { win: M.score[0] >= M.goal, score: [...M.score] });
  }
});
