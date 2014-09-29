/////////////////////////////////////////////////////////////////////////////
// Name:        ui.js
// Purpose:     User interface calls
// Authors:     Erik Welander, Stefan De Geer
// Modified:    2014-09-29
// Licence:     GNU GPL
/////////////////////////////////////////////////////////////////////////////
'use strict';
var ui = {};
ui.input = function (ask)
{
	return prompt(ask);
};
ui.output = function (tell)
{
	console.log(tell);
};
ui.clear = function ()
{
	console.clear();
};
ui.popup = function (tell)
{
	alert(tell);
};