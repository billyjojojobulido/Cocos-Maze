"use strict";
cc._RF.push(module, '41188/3EItNv69N3SZaxvmX', 'MazeBuilder');
// scripts/helper/MazeBuilder.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConstant_1 = require("./GameConstant");
var Queue_1 = require("./Queue");
var actions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
function _initMaze() {
    var maze = new Array(GameConstant_1.MAZE_M);
    for (var i = 0; i < GameConstant_1.MAZE_M; i++) {
        maze[i] = new Array(GameConstant_1.MAZE_N).fill(GameConstant_1.TILE_TYPE.TILE_WALL);
    }
    return maze;
}
function _inBorder(x, y) {
    return x > 0 && x < GameConstant_1.MAZE_M && y > 0 && y < GameConstant_1.MAZE_N;
}
var MazeBuilder = /** @class */ (function () {
    function MazeBuilder() {
        this._visited = undefined;
        this._visited = new Array(GameConstant_1.MAZE_M);
        for (var i = 0; i < GameConstant_1.MAZE_M; i++) {
            this._visited[i] = new Array(GameConstant_1.MAZE_N).fill(false);
        }
    }
    // 清空给定maze数组和对应的visited辅助数组
    MazeBuilder.prototype._clearMaze = function (maze) {
        for (var i = 0; i < GameConstant_1.MAZE_M; i++) {
            for (var j = 0; j < GameConstant_1.MAZE_N; j++) {
                maze[i][j] = GameConstant_1.TILE_TYPE.TILE_WALL;
                this._visited[i][j] = false;
            }
        }
    };
    MazeBuilder.prototype.buildMaze = function () {
        var maze = _initMaze();
        // 构建可以通行的道路
        this._generalizePath(maze, false);
        return maze;
    };
    // eslint-disable-next-line complexity
    MazeBuilder.prototype._generalizePath = function (maze, rebuild) {
        var queue = new Queue_1.default();
        if (rebuild) {
            // 如果已经构建过maze, 重新生成迷宫之前需要把之前的数组clear掉
            this._clearMaze(maze);
        }
        // 出生点入队
        queue.enqueue({ x: 1, y: 1 });
        maze[1][1] = GameConstant_1.TILE_TYPE.TILE_ROAD;
        this._visited[1][1] = true;
        var farthest = undefined;
        while (!queue.isEmpty()) {
            var ptr = queue.randomDequeue();
            // let ptr = queue.dequeue();
            farthest = ptr;
            for (var i = 0; i < actions.length; i++) {
                var newX = ptr.x + actions[i][0] * 2;
                var newY = ptr.y + actions[i][1] * 2;
                if (_inBorder(newX, newY) && !this._visited[newX][newY]) {
                    queue.enqueue({ x: newX, y: newY });
                    this._visited[newX][newY] = true;
                    if (newX < GameConstant_1.MAZE_M - 1 && newY <= GameConstant_1.MAZE_N - 1) {
                        maze[newX][newY] = GameConstant_1.TILE_TYPE.TILE_ROAD;
                    }
                    else {
                        console.log(ptr.x, ptr.y, actions[i]);
                    }
                    var oneStep = {
                        x: ptr.x + actions[i][0],
                        y: ptr.y + actions[i][1],
                    };
                    if (_inBorder(oneStep.x, oneStep.y)) {
                        this._visited[oneStep.x][oneStep.y] = true;
                        maze[oneStep.x][oneStep.y] = GameConstant_1.TILE_TYPE.TILE_ROAD;
                    }
                }
            }
        }
        maze[farthest.x][farthest.y] = GameConstant_1.TILE_TYPE.TILE_STAR;
    };
    MazeBuilder.prototype.rebuildMaze = function (maze) {
        this._generalizePath(maze, true);
    };
    return MazeBuilder;
}());
exports.default = MazeBuilder;

cc._RF.pop();