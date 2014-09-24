var level = {};
level.map = [];
level.mapH = [];
level.mapW = [];
level.current = 0;
level.toString = function (levelNum) {
	'use strict';
	var str = "";
	for (var i = 0; i < level.mapH[levelNum]; i++) {
		str += level.map[levelNum][i];
	}
	return str;
};