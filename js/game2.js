'use strict';
(function()
{
	
var level = [];
var map = [];
map.push('################################'); //0
map.push('#               $  #  #        #'); //1
map.push('# ########*######### ###########'); //2
map.push('#                         *    #'); //3
map.push('########## ############ #### ###'); //4
map.push('#      *            #*# #  #   #'); //5
map.push('## ### # ######### ## # #### ###'); //6
map.push('#  #     # #       #         # #'); //7
map.push('## ###### #        # ######### #'); //8
map.push('#                              #'); //9
map.push('############# @ ################'); //10
level.push(map);
var currentLevel = 0;
var playerX = 14;
var playerY = 10;
console.log(level[currentLevel][playerY][playerX]);
})();