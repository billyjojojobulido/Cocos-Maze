
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/helper/GameConstant.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c33b1JJRoFJzpm+ErRNs1qO', 'GameConstant');
// scripts/helper/GameConstant.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAZE_MOVE_STEP = exports.MAZE_N = exports.MAZE_M = exports.BRICK_WIDTH = exports.BRICK_HEIGHT = exports.TILE_TYPE = void 0;
var TILE_TYPE;
(function (TILE_TYPE) {
    TILE_TYPE[TILE_TYPE["TILE_ROAD"] = 0] = "TILE_ROAD";
    TILE_TYPE[TILE_TYPE["TILE_WALL"] = 1] = "TILE_WALL";
    TILE_TYPE[TILE_TYPE["TILE_STAR"] = 2] = "TILE_STAR";
})(TILE_TYPE = exports.TILE_TYPE || (exports.TILE_TYPE = {}));
var MAZE_MOVE_STEP = 30; // 玩家单次移动步长
exports.MAZE_MOVE_STEP = MAZE_MOVE_STEP;
var BRICK_WIDTH = 30; // 砖块宽度
exports.BRICK_WIDTH = BRICK_WIDTH;
var BRICK_HEIGHT = 30; // 砖块高度
exports.BRICK_HEIGHT = BRICK_HEIGHT;
var MAZE_N = 19; // 迷宫列
exports.MAZE_N = MAZE_N;
var MAZE_M = 19; // 迷宫行
exports.MAZE_M = MAZE_M;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hlbHBlci9HYW1lQ29uc3RhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBa0IsU0FJakI7QUFKRCxXQUFrQixTQUFTO0lBQzFCLG1EQUFTLENBQUE7SUFDVCxtREFBUyxDQUFBO0lBQ1QsbURBQVMsQ0FBQTtBQUNWLENBQUMsRUFKaUIsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJMUI7QUFFRCxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXO0FBTWMsd0NBQWM7QUFMbEUsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTztBQUtSLGtDQUFXO0FBSmxDLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU87QUFJdkIsb0NBQVk7QUFIckIsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUdtQix3QkFBTTtBQUZsRCxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0FBRVcsd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW51bSBUSUxFX1RZUEUgeyAvLyDov7flrqvlnLDnoJbnsbvlnos6IOi3ryjlj6/otbApLCDlopko5LiN5Y+v6LWwKSwg57uI54K5XG5cdFRJTEVfUk9BRCxcblx0VElMRV9XQUxMLFxuXHRUSUxFX1NUQVIsXG59XG5cbmNvbnN0IE1BWkVfTU9WRV9TVEVQID0gMzA7IC8vIOeOqeWutuWNleasoeenu+WKqOatpemVv1xuY29uc3QgQlJJQ0tfV0lEVEggPSAzMDsgLy8g56CW5Z2X5a695bqmXG5jb25zdCBCUklDS19IRUlHSFQgPSAzMDsgLy8g56CW5Z2X6auY5bqmXG5jb25zdCBNQVpFX04gPSAxOTsgLy8g6L+35a6r5YiXXG5jb25zdCBNQVpFX00gPSAxOTsgLy8g6L+35a6r6KGMXG5cbmV4cG9ydCB7IEJSSUNLX0hFSUdIVCwgQlJJQ0tfV0lEVEgsIE1BWkVfTSwgTUFaRV9OLCBNQVpFX01PVkVfU1RFUCB9O1xuIl19