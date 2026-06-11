function openGame(game){

const games = {

"neutral-atom":
"./games/neutral-atom.html",

"electron-catcher":
"./games/electron-catcher.html",

"stability":
"./games/stability-builder.html",

"shell-builder":
"./games/shell-builder.html"

};

if(games[game]){

window.location.href =
games[game];

}

}

window.openGame =
openGame;