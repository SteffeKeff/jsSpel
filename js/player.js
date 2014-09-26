/***************************************************************
 * Name:      player.js
 * Purpose:   Main website XHTML(XML)
 * Encoding:  UTF-8
 **************************************************************/
var player = {};
player.x = 0;
player.y = 0;
player.moveLeft = function () {
	player.x--;
};
player.moveRight = function () {
	player.x++;
};
player.moveUp = function () {
	player.y--;
};
player.moveDown = function () {
	player.y++;
};