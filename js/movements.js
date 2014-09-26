var move = function () {
	var moveWhere = prompt('Where do you want to move?\nup(w),left(a),down(s),right(d)');
	moveWhere = moveWhere.trim();
	moveWhere = moveWhere.toLowerCase();
	var moveX, moveY;
	var currentX = 0,
		currentY = 0;
	var lvl = level.current;
	//Check where the user want to move and translate it from letter to x or y movement
	switch (moveWhere) {
	case 'left':
	case 'l':
	case 'a':
		moveX = -1;
		break;
	case 'right':
	case 'd':
	case 'r':
		moveX = 1;
		break;
	case 'up':
	case 'w':
	case 'u':
		moveY = 1;
		break;
	case 'down':
	case 's':
		moveY = -1;
		break;
	default:
		moveX = 0;
		moveY = 0;
		break;
	}

	//Searching through the map for the currentX and currentY of the character(@)
	for (var i = 0; i < level.mapW[0]; i++) {
		for (var j = 0; j < level.mapH[0]; j++) {
			if (level.map[lvl][j][i] === '@') {
				currentX = i;
				currentY = j;
				break;
			}
		}
	}
	//Looking for where the user want to move the character and doesnt let it walk outside the map
	if (moveX === 1 && currentX !== level.mapW[0]) {
		//level.map[lvl][currentY][currentX] = '.';
		level.map[lvl][currentY] =
			level.map[lvl][currentY].substring(0, currentX) + "." +
			level.map[lvl][currentY].substring(currentX + 1, level.map[lvl][currentY].length);
		//level.map[lvl][currentY][currentX + 1] = '@';
		level.map[lvl][currentY] =
			level.map[lvl][currentY].substring(0, currentX + 1) + "@" +
			level.map[lvl][currentY].substring(currentX + 2, level.map[lvl][currentY].length);
	} else if (moveX === -1 && currentX !== 0) {
		//level.map[lvl][currentY][currentX] = '.';
		level.map[lvl][currentY] =
			level.map[lvl][currentY].substring(0, currentX) + "." +
			level.map[lvl][currentY].substring(currentX + 1, level.map[lvl][currentY].length);
		//level.map[lvl][currentY][currentX - 1] = '@';
		level.map[lvl][currentY] =
			level.map[lvl][currentY].substring(0, currentX - 1) + "@" +
			level.map[lvl][currentY].substring(currentX, level.map[lvl][currentY].length);
	} else if (moveY === 1 && currentY !== 0) {
		//level.map[lvl][currentY][currentX] = '.';
		level.map[lvl][currentY] =
			level.map[lvl][currentY].substring(0, currentX) + "." +
			level.map[lvl][currentY].substring(currentX + 1, level.map[lvl][currentY].length);
		//level.map[lvl][currentY - 1][currentX] = '@';
		level.map[lvl][currentY - 1] =
			level.map[lvl][currentY - 1].substring(0, currentX) + "@" +
			level.map[lvl][currentY - 1].substring(currentX + 1, level.map[lvl][currentY].length);
	} else if (moveY === -1 && currentY !== level.mapH[0]) {
		//level.map[lvl][currentY][currentX] = '.';
		level.map[lvl][currentY] =
			level.map[lvl][currentY].substring(0, currentX) + "." +
			level.map[lvl][currentY].substring(currentX + 1, level.map[lvl][currentY].length);
		//level.map[lvl][currentY + 1][currentX] = '@';
		level.map[lvl][currentY + 1] =
			level.map[lvl][currentY + 1].substring(0, currentX) + "@" +
			level.map[lvl][currentY + 1].substring(currentX + 1, level.map[lvl][currentY].length);
	}
};