
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/helper/MazeBuilder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hlbHBlci9NYXplQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEyRDtBQUUzRCxpQ0FBNEI7QUFFNUIsSUFBTSxPQUFPLEdBQUc7SUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1AsQ0FBQztBQUVGLFNBQVMsU0FBUztJQUNqQixJQUFNLElBQUksR0FBZSxJQUFJLEtBQUssQ0FBQyxxQkFBTSxDQUFDLENBQUM7SUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHFCQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDaEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLHFCQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN0RDtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxxQkFBTSxDQUFDO0FBQ25ELENBQUM7QUFFRDtJQUdDO1FBRlEsYUFBUSxHQUFnQixTQUFTLENBQUM7UUFHekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxxQkFBTSxDQUFDLENBQUM7UUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHFCQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENB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LENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdEM7b0JBRUQsSUFBTSxPQUFPLEdBQVU7d0JBQ3RCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3hCLENBQUM7b0JBQ0YsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLHdCQUFTLENBQUMsU0FBUyxDQUFDO3FCQUNqRDtpQkFDRDthQUNEO1NBQ0Q7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyx3QkFBUyxDQUFDLFNBQVMsQ0FBQztJQUNwRCxDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsSUFBZ0I7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0E1RUEsQUE0RUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1BWkVfTSwgTUFaRV9OLCBUSUxFX1RZUEUgfSBmcm9tIFwiLi9HYW1lQ29uc3RhbnRcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFF1ZXVlIGZyb20gXCIuL1F1ZXVlXCI7XG5cbmNvbnN0IGFjdGlvbnMgPSBbXG5cdFswLCAxXSwgLy8g5ZCR5Y+zXG5cdFswLCAtMV0sIC8vIOWQkeW3plxuXHRbMSwgMF0sIC8vIOWQkeS4i1xuXHRbLTEsIDBdLCAvLyDlkJHkuIpcbl07XG5cbmZ1bmN0aW9uIF9pbml0TWF6ZSgpOiBudW1iZXJbXVtdIHtcblx0Y29uc3QgbWF6ZTogbnVtYmVyW11bXSA9IG5ldyBBcnJheShNQVpFX00pO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IE1BWkVfTTsgaSsrKSB7XG5cdFx0bWF6ZVtpXSA9IG5ldyBBcnJheShNQVpFX04pLmZpbGwoVElMRV9UWVBFLlRJTEVfV0FMTCk7XG5cdH1cblx0cmV0dXJuIG1hemU7XG59XG5cbmZ1bmN0aW9uIF9pbkJvcmRlcih4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRyZXR1cm4geCA+IDAgJiYgeCA8IE1BWkVfTSAmJiB5ID4gMCAmJiB5IDwgTUFaRV9OO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXplQnVpbGRlciB7XG5cdHByaXZhdGUgX3Zpc2l0ZWQ6IGJvb2xlYW5bXVtdID0gdW5kZWZpbmVkO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl92aXNpdGVkID0gbmV3IEFycmF5KE1BWkVfTSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBNQVpFX007IGkrKykge1xuXHRcdFx0dGhpcy5fdmlzaXRlZFtpXSA9IG5ldyBBcnJheShNQVpFX04pLmZpbGwoZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdC8vIOa4heepuue7meWumm1hemXmlbDnu4Tlkozlr7nlupTnmoR2aXNpdGVk6L6F5Yqp5pWw57uEXG5cdHByaXZhdGUgX2NsZWFyTWF6ZShtYXplOiBudW1iZXJbXVtdKTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBNQVpFX007IGkrKykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBNQVpFX047IGorKykge1xuXHRcdFx0XHRtYXplW2ldW2pdID0gVElMRV9UWVBFLlRJTEVfV0FMTDtcblx0XHRcdFx0dGhpcy5fdmlzaXRlZFtpXVtqXSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBidWlsZE1hemUoKTogbnVtYmVyW11bXSB7XG5cdFx0Y29uc3QgbWF6ZSA9IF9pbml0TWF6ZSgpO1xuXG5cdFx0Ly8g5p6E5bu65Y+v5Lul6YCa6KGM55qE6YGT6LevXG5cdFx0dGhpcy5fZ2VuZXJhbGl6ZVBhdGgobWF6ZSwgZmFsc2UpO1xuXG5cdFx0cmV0dXJuIG1hemU7XG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuXHRwcml2YXRlIF9nZW5lcmFsaXplUGF0aChtYXplOiBudW1iZXJbXVtdLCByZWJ1aWxkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0Y29uc3QgcXVldWUgPSBuZXcgUXVldWU8UG9pbnQ+KCk7XG5cdFx0aWYgKHJlYnVpbGQpIHtcblx0XHRcdC8vIOWmguaenOW3sue7j+aehOW7uui/h21hemUsIOmHjeaWsOeUn+aIkOi/t+Wuq+S5i+WJjemcgOimgeaKiuS5i+WJjeeahOaVsOe7hGNsZWFy5o6JXG5cdFx0XHR0aGlzLl9jbGVhck1hemUobWF6ZSk7XG5cdFx0fVxuXHRcdC8vIOWHuueUn+eCueWFpemYn1xuXHRcdHF1ZXVlLmVucXVldWUoeyB4OiAxLCB5OiAxIH0pO1xuXHRcdG1hemVbMV1bMV0gPSBUSUxFX1RZUEUuVElMRV9ST0FEO1xuXHRcdHRoaXMuX3Zpc2l0ZWRbMV1bMV0gPSB0cnVlO1xuXHRcdGxldCBmYXJ0aGVzdDogUG9pbnQgPSB1bmRlZmluZWQ7XG5cblx0XHR3aGlsZSAoIXF1ZXVlLmlzRW1wdHkoKSkge1xuXHRcdFx0Y29uc3QgcHRyID0gcXVldWUucmFuZG9tRGVxdWV1ZSgpO1xuXHRcdFx0Ly8gbGV0IHB0ciA9IHF1ZXVlLmRlcXVldWUoKTtcblx0XHRcdGZhcnRoZXN0ID0gcHRyO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG5ld1ggPSBwdHIueCArIGFjdGlvbnNbaV1bMF0gKiAyO1xuXHRcdFx0XHRjb25zdCBuZXdZID0gcHRyLnkgKyBhY3Rpb25zW2ldWzFdICogMjtcblxuXHRcdFx0XHRpZiAoX2luQm9yZGVyKG5ld1gsIG5ld1kpICYmICF0aGlzLl92aXNpdGVkW25ld1hdW25ld1ldKSB7XG5cdFx0XHRcdFx0cXVldWUuZW5xdWV1ZSh7IHg6IG5ld1gsIHk6IG5ld1kgfSk7XG5cdFx0XHRcdFx0dGhpcy5fdmlzaXRlZFtuZXdYXVtuZXdZXSA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKG5ld1ggPCBNQVpFX00gLSAxICYmIG5ld1kgPD0gTUFaRV9OIC0gMSkge1xuXHRcdFx0XHRcdFx0bWF6ZVtuZXdYXVtuZXdZXSA9IFRJTEVfVFlQRS5USUxFX1JPQUQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHB0ci54LCBwdHIueSwgYWN0aW9uc1tpXSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3Qgb25lU3RlcDogUG9pbnQgPSB7XG5cdFx0XHRcdFx0XHR4OiBwdHIueCArIGFjdGlvbnNbaV1bMF0sXG5cdFx0XHRcdFx0XHR5OiBwdHIueSArIGFjdGlvbnNbaV1bMV0sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRpZiAoX2luQm9yZGVyKG9uZVN0ZXAueCwgb25lU3RlcC55KSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fdmlzaXRlZFtvbmVTdGVwLnhdW29uZVN0ZXAueV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0bWF6ZVtvbmVTdGVwLnhdW29uZVN0ZXAueV0gPSBUSUxFX1RZUEUuVElMRV9ST0FEO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRtYXplW2ZhcnRoZXN0LnhdW2ZhcnRoZXN0LnldID0gVElMRV9UWVBFLlRJTEVfU1RBUjtcblx0fVxuXG5cdHB1YmxpYyByZWJ1aWxkTWF6ZShtYXplOiBudW1iZXJbXVtdKTogdm9pZCB7XG5cdFx0dGhpcy5fZ2VuZXJhbGl6ZVBhdGgobWF6ZSwgdHJ1ZSk7XG5cdH1cbn1cbiJdfQ==