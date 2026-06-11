import {
  getConfig,
  setDifficulty
}
from './difficultyManager.js';

import {
  eventBus
}
from './eventBus.js';

import {
  getState,
  addProton,
  removeProton,
  addNeutron,
  removeNeutron,
  addElectron,
  removeElectron,
  resetAtom
}
from './atomModel.js';

import {
  distributeElectrons
}
from './electronOrbit.js';

import {
  elementsBasic
}
from './elementsBasic.js';

import {
  generateElementData
}
from './aiAtomGenerator.js';

/* CONFIG */

const config = getConfig();

/* THEME */

document.body.classList.add(
  config.themeClass
);
/* MODE BADGE */

document.getElementById(
'modeBadge'
).innerText =
config.mode.toUpperCase()
+ " MODE";

/* TEMP MODE SWITCHING */



const elements = elementsBasic;

/* CANVAS */

const canvas =
document.getElementById(
'atomCanvas'
);

const ctx =
canvas.getContext('2d');

/* RESIZE */

function resizeCanvas(){

  canvas.width =
  canvas.offsetWidth;

  canvas.height =
  canvas.offsetHeight;

}

resizeCanvas();

window.addEventListener(
'resize',
resizeCanvas
);

/* BUTTONS */

document.getElementById(
'addProton'
).onclick = addProton;

document.getElementById(
'removeProton'
).onclick = removeProton;

document.getElementById(
'addNeutron'
).onclick = addNeutron;

document.getElementById(
'removeNeutron'
).onclick = removeNeutron;

document.getElementById(
'addElectron'
).onclick = addElectron;

document.getElementById(
'removeElectron'
).onclick = removeElectron;

/* RESET BUTTON */

document.getElementById(
'resetAtom'
).onclick = resetAtom;

/* STATE */

let currentState =
getState();

/* EVENTS */

eventBus.on(
'atomChanged',
(state)=>{

  currentState = state;

  updateInfo(state);

}
);

/* UPDATE INFO */

function updateInfo(state){

  document.getElementById(
  'protonCount'
  ).innerText =
  state.protons;

  document.getElementById(
  'neutronCount'
  ).innerText =
  state.neutrons;

  document.getElementById(
  'electronCount'
  ).innerText =
  state.electrons;

  const info =
  document.getElementById(
  'infoContent'
  );

  let element =
  elements[state.protons];
  let aiData =
generateElementData(
state.protons,
state.neutrons,
state.electrons
);

  if(element){

    /* ADVANCED MODE CARDS */

    let advancedCards = '';

    /* MEDIUM MODE */

    if(config.showStability){

      advancedCards += `

      <div class="info-card atomic-card">

        <span class="info-label">
        Stability
        </span>

        <h3>
        ${aiData.stability}
        </h3>

      </div>

      `;

    }

    /* HARD MODE */

    if(config.showHalfLife){

      advancedCards += `

      <div class="info-card mass-card">

        <span class="info-label">
        Half Life
        </span>

        <h3>
        ${aiData.halfLife}
        </h3>

      </div>

      `;

      advancedCards += `

      <div class="info-card proton-card">

        <span class="info-label">
        Decay Type
        </span>

        <h3>
        Beta Decay
        </h3>

      </div>

      `;

    }

    /* MAIN INFO UI */

    info.innerHTML = `

    <div class="info-grid">

      <div class="info-card proton-card">

        <span class="info-label">
        Element
        </span>

        <h3>
        ${element.name}
        </h3>

      </div>

      <div class="info-card electron-card">

        <span class="info-label">
        Symbol
        </span>

        <h3>
        ${element.symbol}
        </h3>

      </div>

      <div class="info-card atomic-card">

        <span class="info-label">
        Atomic Number
        </span>

        <h3>
        ${state.protons}
        </h3>

      </div>

      <div class="info-card mass-card">

        <span class="info-label">
        Mass Number
        </span>

        <h3>
        ${state.protons + state.neutrons}
        </h3>

      </div>

      <div class="info-card electron-card">

        <span class="info-label">
        Electrons
        </span>

        <h3>
        ${state.electrons}
        </h3>

      </div>

      <div class="info-card type-card">

        <span class="info-label">
        Atom Type
        </span>

        <h3>

        ${
          state.electrons > state.protons
          ? "Negative Ion"
          : state.electrons < state.protons
          ? "Positive Ion"
          : "Neutral Atom"
        }

        </h3>

      </div>

      <div class="info-card fun-card">

        <span class="info-label">
        Fun Fact
        </span>

        <p>
        ${generateFunFact(element.name)}
        </p>

      </div>

      ${advancedCards}

    </div>

    `;

  }

  else{

    info.innerHTML = `

    <div class="default-text">

    Add protons to build an atom.

    </div>

    `;

  }

}
  
/* ANIMATION */

function animate(){

  drawAtom(currentState);

  requestAnimationFrame(
  animate
  );

}

animate();

/* DRAW */

function drawAtom(state){

  ctx.clearRect(
  0,
  0,
  canvas.width,
  canvas.height
  );

  const cx =
  canvas.width / 2;

  const cy =
  canvas.height / 2;

  /* CENTER GLOW */

  const glow =
  ctx.createRadialGradient(
  cx,
  cy,
  20,
  cx,
  cy,
  200
  );

  glow.addColorStop(
  0,
  'rgba(139,92,246,.55)'
  );

  glow.addColorStop(
  1,
  'transparent'
  );

  ctx.fillStyle =
  glow;

  ctx.beginPath();

  ctx.arc(
  cx,
  cy,
  200,
  0,
  Math.PI * 2
  );

  ctx.fill();

  /* PROTONS */

  for(let i=0;i<state.protons;i++){

    const angle =
    (i/Math.max(
    state.protons,
    1
    )) * Math.PI * 2;

    const x =
    cx +
    Math.cos(angle)*28;

    const y =
    cy +
    Math.sin(angle)*28;

    ctx.beginPath();

    ctx.arc(
    x,
    y,
    18,
    0,
    Math.PI*2
    );

    ctx.fillStyle =
    '#ff4d4d';

    ctx.shadowBlur = 25;

    ctx.shadowColor =
    '#ff4d4d';

    ctx.fill();

    ctx.fillStyle =
    'white';

    ctx.font =
    'bold 16px Arial';

    ctx.fillText(
    '+',
    x-5,
    y+5
    );

  }

  /* NEUTRONS */

  for(let i=0;i<state.neutrons;i++){

    const angle =
    (i/Math.max(
    state.neutrons,
    1
    )) * Math.PI * 2;

    const x =
    cx +
    Math.cos(angle)*48;

    const y =
    cy +
    Math.sin(angle)*48;

    ctx.beginPath();

    ctx.arc(
    x,
    y,
    18,
    0,
    Math.PI*2
    );

    ctx.fillStyle =
    '#d1d5db';

    ctx.shadowBlur = 20;

    ctx.shadowColor =
    '#ffffff';

    ctx.fill();

  }

  /* ELECTRONS */

  const shells =
  distributeElectrons(
  state.electrons
  );

  const time =
  Date.now() * 0.001;

  shells.forEach(
  (shell)=>{

    ctx.beginPath();

    ctx.arc(
    cx,
    cy,
    shell.radius,
    0,
    Math.PI*2
    );

    ctx.strokeStyle =
    'rgba(99,102,241,.35)';

    ctx.lineWidth = 2;

    ctx.stroke();

    for(let e=0;e<shell.count;e++){

      const angle =
      (time * config.animationSpeed)
      +
      (e/shell.count)
      *
      Math.PI*2;

      const ex =
      cx +
      Math.cos(angle)
      * shell.radius;

      const ey =
      cy +
      Math.sin(angle)
      * shell.radius;

      ctx.beginPath();

      ctx.arc(
      ex,
      ey,
      10,
      0,
      Math.PI*2
      );

      ctx.fillStyle =
      '#3b82f6';

      ctx.shadowBlur =
      20;

      ctx.shadowColor =
      '#3b82f6';

      ctx.fill();

    }

  });

}

/* INITIAL */

updateInfo(currentState);
function generateFunFact(elementName){

const facts = [

`${elementName} is important in modern science!`,

`${elementName} is used in many industries!`,

`${elementName} has unique atomic properties!`,

`${elementName} helps scientists understand chemistry!`,

`${elementName} is part of the periodic table!`,

`${elementName} is studied all around the world!`

];

return facts[
Math.floor(
Math.random() * facts.length
)
];

}