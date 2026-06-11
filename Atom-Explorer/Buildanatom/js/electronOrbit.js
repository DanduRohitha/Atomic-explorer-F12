const SHELL_RADII = [
  60,
  100,
  145,
  194
];

const MAX_PER_SHELL = [
  2,
  8,
  18,
  32
];

export function distributeElectrons(count){

  const shells = [];

  let remaining = count;

  for(
    let i = 0;
    i < SHELL_RADII.length &&
    remaining > 0;
    i++
  ){

    const inShell =
    Math.min(
      remaining,
      MAX_PER_SHELL[i]
    );

    shells.push({

      radius: SHELL_RADII[i],
      count: inShell

    });

    remaining -= inShell;

  }

  return shells;

}