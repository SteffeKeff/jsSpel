/////////////////////////////////////////////////////////////////////////////
// Name:        level0.js
// Purpose:     Title screen
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
addToLevel.push('#                                   #'); //1
addToLevel.push('#    A     M   M     A    ZZZ  EEE  #'); //2
addToLevel.push('#   AAA   M M M M   AAA    Z    EE  #'); //3
addToLevel.push('#  A   A M   M   M A   A  ZZZ  EEE  #'); //4
addToLevel.push('#                                   #'); //5
addToLevel.push('#   Välkommen till vårat demospel!  #'); //6
addToLevel.push('#    Du är tecknet "@"som skall     #'); //7
addToLevel.push('#    till tecknet "$", men se       #'); //8
addToLevel.push('#    upp för bomberna "*"!          #'); //9
addToLevel.push('#####################################'); //10
level.map.push(addToLevel);