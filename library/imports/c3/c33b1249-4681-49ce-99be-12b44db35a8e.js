"use strict";
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