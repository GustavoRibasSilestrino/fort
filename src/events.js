// Mini sistema de eventos para desacoplar os modulos
const handlers = {};
export function on(name, fn) { (handlers[name] || (handlers[name] = [])).push(fn); }
export function emit(name, a, b, c) {
  const hs = handlers[name];
  if (hs) for (let i = 0; i < hs.length; i++) hs[i](a, b, c);
}
