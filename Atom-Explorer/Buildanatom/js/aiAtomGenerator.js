export function generateElementData(
  protons,
  neutrons,
  electrons
){

  /* SHELL CAPACITY */

  const shellLimits = [
    2,
    8,
    18,
    32,
    32,
    18,
    8
  ];

  /* GENERATE SHELLS */

  let remaining =
  electrons;

  let shells = [];

  for(
    let i = 0;
    i < shellLimits.length;
    i++
  ){

    if(remaining <= 0){

      break;

    }

    const fill =
    Math.min(
      remaining,
      shellLimits[i]
    );

    shells.push(fill);

    remaining -= fill;

  }

  /* SHELL LABELS */

  const shellLabels = [
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q'
  ];

  /* STABILITY */

  let stability =
  "Stable";

  if(
    neutrons <
    protons * 0.8
  ){

    stability =
    "Unstable";

  }

  if(
    protons > 82
  ){

    stability =
    "Radioactive";

  }

  /* RADIOACTIVITY */

  const radioactive =
  protons > 82;

  /* HALF LIFE */

  let halfLife =
  "Stable";

  if(radioactive){

    halfLife =
    (
      (
        1000 /
        protons
      ).toFixed(2)
    ) +
    " Million Years";

  }

  /* DECAY TYPE */

  let decayType =
  "None";

  if(radioactive){

    decayType =
    "Beta Decay";

  }

  /* ATOM TYPE */

  let atomType =
  "Neutral Atom";

  if(
    electrons >
    protons
  ){

    atomType =
    "Negative Ion";

  }

  if(
    electrons <
    protons
  ){

    atomType =
    "Positive Ion";

  }

  /* ELECTRON CONFIG */

  const electronConfig =
  shells.join('-');

  /* RETURN EVERYTHING */

  return {

    atomicNumber:
    protons,

    massNumber:
    protons + neutrons,

    shells,

    shellLabels,

    shellConfiguration:
    electronConfig,

    stability,

    radioactive,

    halfLife,

    decayType,

    atomType

  };

}