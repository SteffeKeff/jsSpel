/***************************************************************
 * Name:      ui.js
 * Purpose:   Main website XHTML(XML)
 * Encoding:  UTF-8
 **************************************************************/
var ui = {};
ui.input = function (ask) {
	return prompt(ask);
};
ui.output = function (tell) {
	console.log(tell);
};