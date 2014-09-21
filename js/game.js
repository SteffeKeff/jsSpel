var tutorial = function () {
	alert('Welcome to the tutorial!\n@\tThis is you, the game character\n.\tThis is the ground, walk on it to reach the goal\n*\tThose are explosive bombs, be careful!\n#\tThe hashtag is a wall which you cannot pass.\n$\tThis is the goal of the game, collect the money and you win!');
};
var createMap = function () {
	//creating the map
	var map = [
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[]
	]; //10x10
	//Filling the map with '?'
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			map[i].push('?');
		}
	}
	//Make cordinate 9,4 to @ and 0,0 to $
	map[9][4] = '@';
	map[0][4] = '$';
	map[4][4] = '?';
	return map;
};
var printHiddenMap = function (map) {
	//oddRows and evenRows to not stack the logs in the console
	var oddRows = [];
	var evenRows = [];
	for (i = 0; i < 10; i += 2) {
		for (var j = 0; j < 10; j++) {
			//Loading 2 rows each time in the loop, for 10 cloums, getting content from map
			oddRows.push(map[i][j]);
			evenRows.push(map[i + 1][j]);
		}
		//Printing out oddRows and evenRows, using function join('') to remove ',' from '?'
		console.log(oddRows.join(''));
		console.log(evenRows.join(''));
		//Resetting the arrays
		oddRows.length = 0;
		evenRows.length = 0;
	}
};
var printMap = function () {
	console.log('....$.....');
	console.log('..........');
	console.log('..........');
	console.log('..........');
	console.log('....*.....');
	console.log('..........');
	console.log('..........');
	console.log('..........');
	console.log('..........');
	console.log('....@.....');
};
var sleep = function (milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
};
var move = function (map) {
	var moveWhere = prompt('Where do you want to move(right,left,up,down)?');
	moveWhere = moveWhere.trim();
	moveWhere = moveWhere.toLowerCase();
	var moveX, moveY;
	var currentX, currentY;
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
	case 'd':
		moveY = -1;
		break;
	default:
		moveX = 0;
		moveY = 0;
		break;
	}
	for (var i = 0; i < map.length; i++) {
		for (var j = 0; j < map.length; j++) {
			if (map[i][j] === '@') {
				currentY = i;
				currentX = j;
				break;
			}
		}
	}
	if (moveX === 1 && currentX !== 9) {
		map[currentY][currentX] = '.';
		map[currentY][currentX + 1] = '@';
	} else if (moveX === -1 && currentX !== 0) {
		map[currentY][currentX] = '.';
		map[currentY][currentX - 1] = '@';
	} else if (moveY === 1 && currentY !== 0) {
		map[currentY][currentX] = '.';
		map[currentY - 1][currentX] = '@';
	} else if (moveY === -1 && currentY !== 9) {
		map[currentY][currentX] = '.';
		map[currentY + 1][currentX] = '@';
	}
	return map;
};
var start = function () {
	var play = true;
	var map = createMap();
	console.clear();
	printMap();
	sleep(2000);
	while (play) {
		console.clear();
		printHiddenMap(map);
		map = move(map);
	}
};
do {
	var where = prompt('Welcome to the menu!\nA)Start game\nB)Tutorial\nC)Exit game');

	if (where !== null) {
		where = where.trim();
		where = where.toLowerCase();
	}

	switch (where) {
	case 'a':
		start();
		break;
	case 'b':
		tutorial();
		break;
	case 'c':
		console.log('Exit game');
		break;
	default:
		console.log('Invaild Page');
		break;
	}
} while (where !== 'c');
console.clear();