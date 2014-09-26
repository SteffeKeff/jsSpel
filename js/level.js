/***************************************************************
* Name:      level.js
* Purpose:   Main website XHTML(XML)
* Encoding:  UTF-8
**************************************************************/
'use strict';
var level = {};
level.map = [];
level.mapH = [];
level.mapW = [];
level.current = 0;
level.plStartPos = [];
level.printMap = function (num) {
    var str = "";
    for (var i = 0; i < level.mapH[num]; i++) {
            str += level.map[num][i] + '\n';
    }
    return str;
};