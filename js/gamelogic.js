/***************************************************************
* Name:      gamelogic.js
* Purpose:   Main website XHTML(XML)
* Encoding:  UTF-8
**************************************************************/
var logic = {};
logic.moveLeft = function()
{
    
};
logic.moveRight = function()
{
    
};
logic.moveUp = function()
{
    
};
logic.moveDown = function()
{
    
};

logic.askMoveLcation = function()
{
    var where = 0;
    var what = ui.input("Where do you want to move?\nup(w),left(a),down(s),right(d)");
    what = what.trim();
    what = what.toLowerCase();
    switch(what)
    {
        switch (what) {
        case 'left':
        case 'l':
        case 'a':
                where = 0;
                break;
        case 'right':
        case 'd':
        case 'r':
                where = 1;
                break;
        case 'up':
        case 'w':
        case 'u':
                where = 2;
                break;
        case 'down':
        case 's':
                where = 3;
                break;
        default:
                break;
        }
    return where;
};

logic.move = function(where)
{
    switch(where)
    {
        case 0: //left
            logic.moveLeft();
            break;
        case 1: //right
            logic.moveRight();
            break;
        case 2: //up
            logic.moveUp();
            break;
        case 3: //down
            logic.moveDown();
            break;
        default:
            break;
    }
};
