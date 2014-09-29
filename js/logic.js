/////////////////////////////////////////////////////////////////////////////
// Name:        level.js
// Purpose:     Game screens and levels body
// Authors:     Erik Welander, Stefan De Geer
// Modified:    2014-09-29
// Licence:     GNU GPL
/////////////////////////////////////////////////////////////////////////////
'use strict';
var logic = {};
logic.askMoveLcation = function()
{
    var where = 0;
    var what = ui.input("Where do you want to move?\nup(w),left(a),down(s),right(d)");
    what = what.trim();
    what = what.toLowerCase();
    switch(what)
    {
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
                where = -1;
                break;
    }
    logic.movement.movePlayer(where);
};

logic.setPlayer = function(){
    level.map[level.current][player.y] =
    level.map[level.current][player.y].substring(0, player.x) + "@" +
    level.map[level.current][player.y ].substring(player.x + 1, level.map[level.current][player.y].length);
};


logic.setVisited = function ()
{
    level.map[level.current][player.y] =
    level.map[level.current][player.y].substring(0, player.x) + "." +
    level.map[level.current][player.y].substring(player.x + 1, level.map[level.current][player.y].length);
};


logic.gameLost = function ()
{
    runMain = false;
    level.current = 1;
    ui.clear();
    ui.output(level.toString(level.current));
}

logic.gameWon = function ()
{
    //level.current++;
    //player.setStartPos(level.getPlayerStartX[current], level.getPlayerStartY[current]);
    runMain = false;
    level.current = 3;
    var animationFrame = 0;
    var animationRepeatCount = 0;
    while(animationRepeatCount < 10)
    {
        if(animationFrame == 0)
        {
            level.map[level.current][1] = '#                          .  @     #';
            level.map[level.current][2] = '#                           .....   #';
            level.map[level.current][3] = '#                             .  .  #';
            level.map[level.current][4] = '# if(game === won){          ...    #';
            level.map[level.current][5] = '#     player.happy = true;   . .    #';
            level.map[level.current][6] = '# }else if(game === lose){  .. ..   #';
        }
        else if(animationFrame == 1)
        {
            level.map[level.current][1] = '#                             @  .  #';
            level.map[level.current][2] = '#                           .....   #';
            level.map[level.current][3] = '#                          .  .     #';
            level.map[level.current][4] = '# if(game === won){          ...    #';
            level.map[level.current][5] = '#     player.happy = true;   . .    #';
            level.map[level.current][6] = '# }else if(game === lose){  .. ..   #';
        }
        ui.clear();
        ui.output(level.toString(level.current));
        logic.sleep(1000);
        animationFrame++;
        if(animationFrame > 1)
        {
            animationFrame = 0;
            animationRepeatCount++;
        }
    }
};

logic.sleep = function (milliseconds)
{
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++)
    {
        if ((new Date().getTime() - start) > milliseconds) 
        {
            break;
        }
    }
};