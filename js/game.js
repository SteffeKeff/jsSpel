/////////////////////////////////////////////////////////////////////////////
// Name:        game.js
// Purpose:     Game mainframe
// Authors:     Erik Welander, Stefan De Geer
// Modified:    2014-09-29
// Licence:     GNU GPL
/////////////////////////////////////////////////////////////////////////////
'use strict';
ui.output(level.toString(level.current));
ui.popup('Starta spelet?');
ui.clear();
level.current = 2;
player.setStartPos(level.playerStartX[level.current], level.playerStartY[level.current]);
var runMain = true


while (runMain) {
	ui.clear();
	console.log(level.toString(level.current));
	logic.askMoveLcation();
}