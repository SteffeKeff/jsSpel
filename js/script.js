var tutorial = function () {
	alert('Welcome to the tutorial!\n@\tThis is you, the game character\n.\tThis is the ground, walk on it to reach the goal\n*\tThose are explosive bombs, be careful!\n#\tThe hashtag is a portal, which will generate a new court.\n$\tThis is the goal of the game, collect the money and you win!');
};
var court2 = function () {
	for (var i = 0; i < 5; i++) {
		console.log('..........');
		console.log('..........');
	}
};
var court = function () {
	console.log('.$........');
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
	court();
	sleep(2000);
	console.clear();
	court2();
};
do {
	var where = prompt('Welcome to the menu!\nA)Start game\nB)Tutorial\nC)Exit game');

	if (where !== null) {
		where = where.trim();
		where = where.toLowerCase();
	}

	switch (where) {
	case 'a':
		console.log('Starting game');
		start();
		break;
	case 'b':
		console.log('Tutorial');
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