import { S } from './state.js';
import { player, giveLoadout, respawnPlayer, ps, setBuildMode } from './player.js';
import { bot, createBot, respawnBot, createDummy, placeDummy, removeDummy, dummy, updateBot, updateDummy } from './bots.js';
import { clearAllPieces } from './pieces.js';
import { setWorldLimit } from './physics.js';
import { setBoundary, makeSpawnRing } from './terrain.js';
import { on, emit } from './events.js';
import { toast } from './hud.js';
import { sfx } from './audio.js';
import { hit, binds, keyName } from './bind.js';
import { NET, sendRound, sendDie, setRemoteActor, updateRemote, endMatchNet } from './net.js';

// Estado dos modos de jogo: 'freebuild' (treino livre) e 'duel' (1v1)
export const M = { type: 'freebuild', score: [0, 0], goal: 5, state: 'idle', timer: 0, round: 0, diff: 'normal', lastCount: 0 };
S.duel = M;
const ARENA = { freebuild: 280, duel: 75 };
let rings = [];

export function startMode(type, diff, online = false) {
  M.online = online;
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
  bot.remote = online;
  if (online) { setRemoteActor(bot); bot.name = NET.oppName; NET.inMatch = true; NET.target = null; }
  const sb = document.querySelector('#score .sc.bot span'); if (sb) sb.textContent = online ? NET.oppName.toUpperCase().slice(0, 8) : 'BOT';
  if (type === 'freebuild') {
    respawnPlayer(0, 0, 0);
    removeDummy();
    bot.alive = false; bot.mode = 'dead'; bot.model.root.visible = false;
    toast('FREEBUILD — materiais e munição infinitos', false, 4000);
    toast(`${keyName(binds.wall)}/${keyName(binds.floor)}/${keyName(binds.stairs)}/${keyName(binds.roof)}: parede/piso/escada/cone  •  ${keyName(binds.edit)}: editar  •  ${keyName(binds.dummy)}: boneco`, false, 6500);
  } else {
    M.score = [0, 0]; M.round = 0;
    rings.push(makeSpawnRing(S.scene, 0, 38, '#3fb6ff'), makeSpawnRing(S.scene, 0, -38, '#ff5470'));
    if (online) { if (NET.host) { startRound(); sendRound({ n: 1 }); } else { M.state = 'wait'; S.freeze = true; toast('Aguardando o anfitrião...', false, 2000); } }
    else startRound();
  }
}

function startRound() {
  M.round++;
  clearAllPieces();
  giveLoadout('duel');
  const meSouth = !M.online || NET.host;           // anfitriao nasce em z=38, convidado em z=-38
  respawnPlayer(0, meSouth ? 38 : -38, meSouth ? 0 : Math.PI);
  respawnBot(0, meSouth ? -38 : 38, meSouth ? Math.PI : 0, M.diff);
  if (M.online) { bot.remote = true; bot.model.hold('pickaxe', 0); NET.target = null; }
  S.freeze = true; S.freezeAI = false;
  M.state = 'countdown'; M.timer = 5.0; M.lastCount = 6;
  setBuildMode(false);
  toast('Construção liberada em 5s', false, 1800);
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
  if (M.online) updateRemote(dt);
  if (M.state === 'countdown') {
    M.timer -= dt;
    const n = Math.ceil(M.timer);
    if (n !== M.lastCount && n > 0 && n <= 5) { M.lastCount = n; toast(String(n), true, 900); sfx.empty(); }
    if (M.timer <= 0) { M.state = 'fight'; S.freeze = false; toast('LUTE! Construção liberada', true, 1400); sfx.chest(); }
  } else if (M.state === 'between') {
    M.timer -= dt;
    if (M.timer <= 0 && (!M.online || NET.host)) { startRound(); if (M.online) sendRound({ n: M.round }); }
  }
  if (!M.online) updateBot(dt);
}

on('kill', ({ victim, attacker }) => {
  if (M.type !== 'duel' || M.state !== 'fight') return;
  if (M.online && victim === player) sendDie();
  M.score[victim === player ? 1 : 0]++;
  M.state = 'between'; M.timer = 2.6;
  S.freezeAI = true;
  toast(victim === player ? 'Você foi eliminado' : (M.online ? `Você eliminou ${NET.oppName}!` : 'Você eliminou o bot!'), true, 2000);
  if (M.score[0] >= M.goal || M.score[1] >= M.goal) {
    M.state = 'over';
    S.phase = 'over';
    emit('duelOver', { win: M.score[0] >= M.goal, score: [...M.score] });
  }
});

// partida online: o convidado inicia a rodada quando o anfitriao avisa
NET.onRound = () => { if (M.online && M.state !== 'over') startRound(); };
NET.onEnd = () => {
  if (!M.online || S.phase === 'over') return;
  M.state = 'over'; S.phase = 'over';
  emit('duelOver', { win: true, score: [...M.score], left: true });
};
export function leaveOnline() { endMatchNet(); }
