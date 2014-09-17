var tutorial = function () {
	alert('Welcome to the tutorial!\n@\tThis is you, the game character\n.\tThis is the ground, walk on it to reach the goal\n*\tThose are explosive bombs, be careful!\n#\tThe hashtag is a wall which you cannot pass.\n$\tThis is the goal of the game, collect the money and you win!');
};
var printHiddenMap = function () {
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
	map[9][4] = '@';
	map[0][0] = '$';
	//oddRows and evenRows to not get stacked in the console
	var oddRows = [];
	var evenRows = [];
	for (i = 0; i < 10; i += 2) {
		for (var o = 0; o < 10; o++) {
			//Loading 2 rows each time in the loop, for 10 cloums, getting content from map
			oddRows.push(map[i][o]);
			evenRows.push(map[i + 1][o]);
		}
		//Printing out oddRows and evenRows, using function join("") to remove ',' from '?'
		console.log(oddRows.join(""));
		console.log(evenRows.join(""));
		//Resetting the arrays
		oddRows.length = 0;
		evenRows.length = 0;
	}
};
var printMap = function () {
	console.log('.$...#....');
	console.log('..........');
	console.log('...*......');
	console.log('.......*..');
	console.log('.*........');
	console.log('..........');
	console.log('..........');
	console.log('..........');
	console.log('..........');
	console.log('....@.....');
};

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}
var start = function () {
	printMap();
	sleep(2000);
	console.clear();
	printHiddenMap();
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