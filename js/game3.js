console.log(level.toString(level.current));
alert('Starta spelet?');
console.clear();
level.current = 1;

while (true) {
	console.log(level.toString(level.current));
	move();
}