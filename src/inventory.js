import { WEAPONS, AMMO, CONSUMABLES } from './config.js';

export class Inventory {
  constructor() {
    this.slots = [{ kind: 'pickaxe' }, null, null, null, null, null];
    this.sel = 0;
    this.ammo = { light: 0, medium: 0, shells: 0, heavy: 0, rockets: 0 };
    this.mats = { wood: 100, stone: 0, metal: 0 };
  }
  current() { return this.slots[this.sel]; }

  addAmmo(type, n) {
    const max = AMMO[type].max;
    const before = this.ammo[type];
    this.ammo[type] = Math.min(max, before + n);
    return this.ammo[type] - before;
  }
  addMats(mat, n) {
    const before = this.mats[mat];
    this.mats[mat] = Math.min(999, before + n);
    return this.mats[mat] - before;
  }

  _emptySlot() {
    for (let i = 1; i < 6; i++) if (!this.slots[i]) return i;
    return -1;
  }
  _replaceSlot() { return this.sel >= 1 ? this.sel : 1; }

  // Retorna { ok, dropped, slot } -- dropped e um item (formato de loot) que deve cair no chao
  pickup(item) {
    if (item.kind === 'weapon') {
      let slot = this._emptySlot();
      let dropped = null;
      if (slot < 0) {
        slot = this._replaceSlot();
        const old = this.slots[slot];
        dropped = old.kind === 'weapon' ? { kind: 'weapon', wkey: old.wkey, rarity: old.rarity, mag: old.mag } : { kind: 'cons', ckey: old.ckey, count: old.count };
      }
      this.slots[slot] = { kind: 'weapon', wkey: item.wkey, rarity: item.rarity, mag: item.mag };
      this.sel = slot;
      return { ok: true, dropped, slot };
    }
    if (item.kind === 'cons') {
      const def = CONSUMABLES[item.ckey];
      for (let i = 1; i < 6; i++) {
        const s = this.slots[i];
        if (s && s.kind === 'cons' && s.ckey === item.ckey) {
          if (s.count >= def.max) return { ok: false };
          const add = Math.min(def.max - s.count, item.count);
          s.count += add;
          return { ok: true, dropped: add < item.count ? { ...item, count: item.count - add } : null, slot: i };
        }
      }
      let slot = this._emptySlot();
      let dropped = null;
      if (slot < 0) {
        slot = this._replaceSlot();
        const old = this.slots[slot];
        dropped = old.kind === 'weapon' ? { kind: 'weapon', wkey: old.wkey, rarity: old.rarity, mag: old.mag } : { kind: 'cons', ckey: old.ckey, count: old.count };
      }
      this.slots[slot] = { kind: 'cons', ckey: item.ckey, count: Math.min(def.max, item.count) };
      return { ok: true, dropped, slot };
    }
    return { ok: false };
  }

  removeSlot(i) {
    this.slots[i] = null;
    if (this.sel === i) this.sel = 0;
  }

  // recarga: devolve quanto entrou no carregador
  reloadAmount(w) {
    const W = WEAPONS[w.wkey];
    const need = W.mag - w.mag;
    const take = Math.min(need, this.ammo[W.ammo]);
    return take;
  }
}
