export const enum TILE_TYPE { // 迷宫地砖类型: 路(可走), 墙(不可走), 终点
	TILE_ROAD,
	TILE_WALL,
	TILE_STAR,
}

const MAZE_MOVE_STEP = 30; // 玩家单次移动步长
const BRICK_WIDTH = 30; // 砖块宽度
const BRICK_HEIGHT = 30; // 砖块高度
const MAZE_N = 19; // 迷宫列
const MAZE_M = 19; // 迷宫行

export { BRICK_HEIGHT, BRICK_WIDTH, MAZE_M, MAZE_N, MAZE_MOVE_STEP };
