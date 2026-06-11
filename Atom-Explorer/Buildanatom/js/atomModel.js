import {
  eventBus
}
from './eventBus.js';

import {
  getConfig
}
from './difficultyManager.js';

/* CONFIG */

const config =
getConfig();

/* STATE */

const state = {

  protons:0,

  neutrons:0,

  electrons:0

};

/* ADD PROTON */

export function addProton(){

  if(
    state.protons <
    config.maxElement
  ){

    state.protons++;

  }

  publish();

}

/* REMOVE PROTON */

export function removeProton(){

  if(
    state.protons > 0
  ){

    state.protons--;

  }

  publish();

}

/* ADD NEUTRON */

export function addNeutron(){

  if(
    state.neutrons <
    300
  ){

    state.neutrons++;

  }

  publish();

}

/* REMOVE NEUTRON */

export function removeNeutron(){

  if(
    state.neutrons > 0
  ){

    state.neutrons--;

  }

  publish();

}

/* ADD ELECTRON */

export function addElectron(){

  if(
    state.electrons <
    config.maxElement
  ){

    state.electrons++;

  }

  publish();

}

/* REMOVE ELECTRON */

export function removeElectron(){

  if(
    state.electrons > 0
  ){

    state.electrons--;

  }

  publish();

}

/* RESET */

export function resetAtom(){

  state.protons = 0;

  state.neutrons = 0;

  state.electrons = 0;

  publish();

}

/* GET STATE */

export function getState(){

  return {

    ...state

  };

}

/* PUBLISH */

function publish(){

  eventBus.emit(
    'atomChanged',
    getState()
  );

}