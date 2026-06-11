const DIFFICULTY_KEY =
'difficulty';

const CONFIGS = {

easy:{
mode:'easy',

maxElement:118,

animationSpeed:0.5,

themeClass:'theme-easy',

showHalfLife:false,

showStability:false,

showAdvancedPhysics:false,

showFunFacts:true,

showElectronShells:false,

showDecay:false,

showQuantumData:false,

showElectronTrails:false

},

medium:{
mode:'medium',

maxElement:118,

animationSpeed:1,

themeClass:'theme-medium',

showHalfLife:false,

showStability:true,

showAdvancedPhysics:false,

showFunFacts:true,

showElectronShells:true,

showDecay:false,

showQuantumData:false,

showElectronTrails:true

},

hard:{
mode:'hard',

maxElement:118,

animationSpeed:2,

themeClass:'theme-hard',

showHalfLife:true,

showStability:true,

showAdvancedPhysics:true,

showFunFacts:true,

showElectronShells:true,

showDecay:true,

showQuantumData:true,

showElectronTrails:true

}

};

export function getDifficulty(){

const mode =
localStorage.getItem(
DIFFICULTY_KEY
);

if(mode === "Easy")
return "easy";

if(mode === "Medium")
return "medium";

if(mode === "Difficult")
return "hard";

return "easy";

}

export function setDifficulty(mode){

localStorage.setItem(
DIFFICULTY_KEY,
mode
);

location.reload();

}

export function getConfig(){

return CONFIGS[
getDifficulty()
];

}