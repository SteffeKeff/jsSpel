/////////////////////////////////////////////////////////////////////////////
// Name:        level3.js
// Purpose:     You've won screen! (This guy actually daces if you win)
// Authors:     Erik Welander, Stefan De Geer
// Modified:    2014-09-29
// Licence:     GNU GPL
/////////////////////////////////////////////////////////////////////////////
'use strict';
level.mapH.push(11);
level.mapW.push(37);
level.playerStartX.push(0);
level.playerStartY.push(0);
var addToLevel = [];
addToLevel.push('#####################################'); //0
addToLevel.push('#                          .  @     #'); //1
addToLevel.push('#                           .....   #'); //2
addToLevel.push('#                             .  .  #'); //3
addToLevel.push('# if(game === won){          ...    #'); //4
addToLevel.push('#     player.happy = true;   . .    #'); //5
addToLevel.push('# }else if(game === lose){  .. ..   #'); //6
addToLevel.push('#     player.happy = false;         #'); //7
addToLevel.push('# }                                 #'); //8
addToLevel.push('#                                   #'); //9
addToLevel.push('#####################################'); //10
level.map.push(addToLevel);    //level.map[1][rowY][charX]
