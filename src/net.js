import { joinRoom, selfId } from 'trystero';
import { S } from './state.js';
import { on, emit } from './events.js';
import { pieceAt, setMask, destroyPiece, hooks as pieceHooks } from './pieces.js';
import { placePiece } from './build.js';
import { damageActor } from './combat.js';
import { toast } from './hud.js';

// ===== X1 online (P2P via WebRTC, sem servidor proprio) =====
// Todos que entram no mesmo "lobby" se enxergam; da para convidar um amigo online para um x1.
export const NET = {
  room: null, lobby: '', peers: new Map(), // id -> { name, busy }
  opp: null, host: false, inMatch: false, oppName: 'Amigo',
  target: null, // estado remoto (posicao alvo)
  fireN: 0, lastFireN: 0,
  onLobby: null, onInvite: null, onStart: null, onRound: null, onEnd: null,
};
let A = {};
let sendT = 0;

export function leaveLobby() {
  if (NET.room) { try { NET.room.leave(); } catch (e) { /* ignorar */ } }
  NET.room = null; NET.peers.clear(); NET.opp = null; NET.inMatch = false;
}

export function joinLobby(code, name) {
  leaveLobby();
  NET.lobby = (code || 'amigos').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 24) || 'amigos';
  S.settings.name = name;
  const room = joinRoom({ appId: 'fortbuild-x1-gustavo-v1' }, 'lobby-' + NET.lobby);
  NET.room = room;
  const mk = (n) => room.makeAction(n);
  A = {};
  for (const n of ['hi', 'inv', 'acc', 'dec', 'st', 'hit', 'bld', 'dst', 'msk', 'rnd', 'die', 'bye']) A[n] = mk(n);

  const hello = (id) => A.hi.send({ name: S.settings.name, busy: NET.inMatch }, { target: id });
  room.onPeerJoin = (id) => hello(id);
  room.onPeerLeave = (id) => {
    NET.peers.delete(id);
    if (NET.opp === id && NET.inMatch) { toast('Seu amigo saiu da partida', true, 2500); NET.onEnd && NET.onEnd('left'); }
    NET.onLobby && NET.onLobby();
  };
  A.hi.onMessage = (d, { peerId }) => { NET.peers.set(peerId, { name: String(d.name || 'Jogador').slice(0, 16), busy: !!d.busy }); NET.onLobby && NET.onLobby(); };
  A.inv.onMessage = (d, { peerId }) => { if (NET.inMatch) { A.dec.send({ busy: true }, { target: peerId }); return; } NET.onInvite && NET.onInvite(peerId, (NET.peers.get(peerId) || {}).name || d.name); };
  A.dec.onMessage = (d, { peerId }) => toast(d && d.busy ? 'Seu amigo está em outra partida' : 'Convite recusado', true, 2200);
  A.acc.onMessage = (d, { peerId }) => { NET.opp = peerId; NET.host = true; NET.oppName = (NET.peers.get(peerId) || {}).name || 'Amigo'; NET.onStart && NET.onStart(); };
  A.st.onMessage = (d, { peerId }) => { if (peerId === NET.opp) onState(d); };
  A.hit.onMessage = (d, { peerId }) => { if (peerId === NET.opp) onHit(d); };
  A.bld.onMessage = (d, { peerId }) => { if (peerId === NET.opp) placePiece(d, 'remote'); };
  A.dst.onMessage = (d, { peerId }) => { if (peerId !== NET.opp) return; const p = pieceAt(d); if (p) destroyPiece(p, true); };
  A.msk.onMessage = (d, { peerId }) => { if (peerId !== NET.opp) return; const p = pieceAt(d.k); if (p) setMask(p, d.mask); };
  A.rnd.onMessage = (d, { peerId }) => { if (peerId === NET.opp) NET.onRound && NET.onRound(d); };
  A.die.onMessage = (d, { peerId }) => { if (peerId === NET.opp) onOppDied(); };
  A.bye.onMessage = (d, { peerId }) => { if (peerId === NET.opp) { NET.onEnd && NET.onEnd('left'); } };

  pieceHooks.onDestroy = ((prev) => (p) => {
    if (prev) prev(p);
    if (NET.inMatch && NET.opp) A.dst.send(keyOf(p), { target: NET.opp });
  })(pieceHooks.onDestroy);
}

const keyOf = (p) => ({ type: p.type, axis: p.axis, i: p.i, j: p.j, y: p.y, dir: p.dir });

export function invite(id) { if (A.inv) A.inv.send({ name: S.settings.name }, { target: id }); toast('Convite enviado!', true, 1800); }
export function answerInvite(id, ok) {
  if (!A.acc) return;
  if (!ok) { A.dec.send({}, { target: id }); return; }
  NET.opp = id; NET.host = false; NET.oppName = (NET.peers.get(id) || {}).name || 'Amigo';
  A.acc.send({}, { target: id });
  NET.onStart && NET.onStart();
}
export function sendRound(d) { if (NET.opp) A.rnd.send(d, { target: NET.opp }); }
export function sendBuild(t) { if (NET.opp) A.bld.send({ type: t.type, axis: t.axis, i: t.i, j: t.j, y: t.y, dir: t.dir, mat: t.mat }, { target: NET.opp }); }
export function sendMask(p) { if (NET.opp) A.msk.send({ k: keyOf(p), mask: p.mask }, { target: NET.opp }); }
export function sendHit(dmg, head, wname) { if (NET.opp) A.hit.send({ dmg, head, w: wname }, { target: NET.opp }); }
export function sendDie() { if (NET.opp) A.die.send({}, { target: NET.opp }); }
export function noteFire() { NET.fireN++; }
export function endMatchNet() { if (NET.opp && A.bye) A.bye.send({}, { target: NET.opp }); NET.inMatch = false; }

// ===== estado do oponente =====
let remote = null; // ator
export function setRemoteActor(a) { remote = a; }

function onState(d) {
  NET.target = d;
  if (!remote) return;
  if (d.f !== NET.lastFireN) { NET.lastFireN = d.f; remote.model.doFlash(); emit('remoteShot', d.w); }
}
function onHit(d) {
  const p = S.player;
  damageActor(p, d.dmg, remote, d.head, d.w);
}
function onOppDied() {
  if (!remote || !remote.alive) return;
  remote.alive = false; remote.mode = 'dead'; remote.deadAt = S.time;
  S.player.kills++;
  emit('kill', { victim: remote, attacker: S.player, weapon: '' });
}

export function sendState(dt, p, ps, slotKey) {
  if (!NET.inMatch || !NET.opp || !A.st) return;
  sendT -= dt;
  if (sendT > 0) return;
  sendT = 1 / 20;
  A.st.send({ x: p.x, y: p.y, z: p.z, yaw: p.yaw, pt: ps.camPitch, c: p.crouch ? 1 : 0, g: p.grounded ? 1 : 0, vx: p.vx, vy: p.vy, vz: p.vz, w: slotKey || 'pickaxe', f: NET.fireN, sw: ps.swingT, sl: ps.sliding ? 1 : 0, a: ps.aiming ? 1 : 0 }, { target: NET.opp });
}

// anima o ator remoto (usa o mesmo "ator bot")
export function updateRemote(dt) {
  const r = remote, d = NET.target;
  if (!r) return;
  if (!r.alive) {
    const t = S.time - (r.deadAt || 0);
    r.model.root.rotation.x = -Math.PI / 2 * Math.min(1, t / 0.5);
    return;
  }
  if (!d) return;
  const k = Math.min(1, dt * 16);
  r.x += (d.x - r.x) * k; r.y += (d.y - r.y) * k; r.z += (d.z - r.z) * k;
  let dy = d.yaw - r.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
  r.yaw += dy * k;
  r.vx = d.vx; r.vy = d.vy; r.vz = d.vz;
  r.crouch = !!d.c; r.grounded = !!d.g; r.height = d.c ? 1.3 : 1.8;
  const m = r.model;
  m.root.position.set(r.x, r.y, r.z);
  m.root.rotation.set(0, r.yaw, 0);
  const wk = d.w === 'pickaxe' || !d.w ? 'pickaxe' : d.w;
  m.hold(wk, 3);
  const sp = Math.hypot(d.vx, d.vz);
  const fx = -Math.sin(r.yaw), fz = -Math.cos(r.yaw);
  m.animate(dt, { speed: sp, vfwd: d.vx * fx + d.vz * fz, vside: 0, grounded: !!d.g, vy: d.vy, aim: !!d.a, pitch: d.pt || 0, swing: d.sl ? -1 : (d.sw >= 0 ? d.sw : -1), crouch: !!d.c, slide: !!d.sl, run: sp > 6.5, reloading: false });
}

export { selfId };
