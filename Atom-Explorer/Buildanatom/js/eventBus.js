const listeners = {};

export const eventBus = {

  on(event, fn) {

    (listeners[event] ??= []).push(fn);

  },

  off(event, fn) {

    listeners[event] =
    (listeners[event] || [])
    .filter(f => f !== fn);

  },

  emit(event, data) {

    (listeners[event] || [])
    .forEach(fn => fn(data));

  }

};