
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Maze.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8e96QsNVJBoLvQ7HeKfBVe', 'Maze');
// scripts/Maze.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameConstant_1 = require("./helper/GameConstant");
var MazeBuilder_1 = require("./helper/MazeBuilder");
var Player_1 = require("./Player");
var Maze = /** @class */ (function (_super) {
    __extends(Maze, _super);
    function Maze() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brick = undefined;
        _this.player = undefined;
        _this.star = undefined;
        _this.timeDisplay = undefined;
        _this.progressBar = undefined;
        _this.levelLabel = undefined;
        _this.gameOverLabel = undefined;
        _this.startBtn = undefined;
        _this.pauseBtn = undefined;
        _this.maxMoveTime = 0;
        _this._startX = 0;
        _this._startY = 0;
        _this._mazeArray = undefined;
        _this._timer = 0;
        _this._isPaused = true;
        _this._level = 0;
        _this._builder = undefined;
        _this._brickPool = undefined;
        return _this;
    }
    Maze.prototype.onLoad = function () {
        // 开启物理系统
        cc.director.getCollisionManager().enabled = true;
        // 初始化砖块对象池
        this._brickPool = new cc.NodePool();
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // 生成迷宫数组
        this._builder = new MazeBuilder_1.default();
        this._mazeArray = this._builder.buildMaze();
        this._displayMaze();
        this._startX = GameConstant_1.BRICK_WIDTH;
        this._startY = -GameConstant_1.BRICK_HEIGHT;
        // 游戏倒计时
        this._timer = 0;
        this.timeDisplay.string = "Time: " + this.maxMoveTime + "s";
        this.progressBar.progress = 1;
        // 玩家角色放到固定位置并初始化
        this._initPlayer();
    };
    Maze.prototype._initPlayer = function () {
        // 玩家角色放到固定位置并初始化
        this.player.node.setPosition(cc.v2(this._startX, this._startY));
        this.player.getComponent(Player_1.default).init(this);
    };
    Maze.prototype._resetLevel = function () {
        this._level = 0;
        this.levelLabel.string = "Level: " + this._level;
    };
    Maze.prototype.startPlaying = function () {
        if (this.gameOverLabel.node.active) {
            // 如果是失败重开, 则重制人物,通关数,时间,迷宫
            this.gameOverLabel.node.active = false;
            // 通关
            this._resetLevel();
            // 迷宫
            this._rebuildMaze();
            this._displayMaze();
        }
        // 重制人物
        this.player.node.setPosition(cc.v2(this._startX, this._startY));
        // 游戏倒计时
        this._timer = 0;
        this.timeDisplay.string = "Time: " + this.maxMoveTime + "s";
        this.progressBar.progress = 1;
        this.startBtn.node.active = false;
        this._isPaused = false;
        this.pauseBtn.node.active = true;
    };
    Maze.prototype.onPauseClick = function () {
        if (this._isPaused) {
            this._resumeGame();
        }
        else {
            this._pauseGame();
        }
    };
    Maze.prototype._pauseGame = function () {
        this._isPaused = true;
        this._changeBtnName("Resume");
    };
    Maze.prototype._changeBtnName = function (name) {
        var bg = this.pauseBtn.node.getChildByName("Background");
        var labelNode = bg.getChildByName("Label");
        var labComponent = labelNode.getComponent(cc.Label);
        labComponent.string = name;
    };
    Maze.prototype._resumeGame = function () {
        this._isPaused = false;
        this._changeBtnName("Pause");
    };
    Maze.prototype._displayMaze = function () {
        for (var i = 0; i < GameConstant_1.MAZE_M; i++) {
            for (var j = 0; j < GameConstant_1.MAZE_N; j++) {
                switch (this._mazeArray[i][j]) {
                    case GameConstant_1.TILE_TYPE.TILE_WALL:
                        this._forgeBrick(j * GameConstant_1.BRICK_WIDTH, -i * GameConstant_1.BRICK_HEIGHT);
                        break;
                    case GameConstant_1.TILE_TYPE.TILE_STAR:
                        this.star.node.setPosition(j * GameConstant_1.BRICK_WIDTH, -i * GameConstant_1.BRICK_HEIGHT);
                        break;
                    default:
                        break;
                }
            }
        }
    };
    Maze.prototype._forgeBrick = function (x, y) {
        var newBrick = undefined;
        if (this._brickPool.size() > 0) {
            newBrick = this._brickPool.get();
        }
        else {
            newBrick = cc.instantiate(this.brick);
            newBrick.width = GameConstant_1.BRICK_WIDTH;
            newBrick.height = GameConstant_1.BRICK_HEIGHT;
        }
        this.node.addChild(newBrick);
        newBrick.x = x;
        newBrick.y = y;
    };
    Maze.prototype._reuseBrick = function (brick) {
        this._brickPool.put(brick);
    };
    Maze.prototype._recycleAllBricks = function () {
        var children = this.node.children;
        for (var i = children.length - 1; i >= 0; i--) {
            if (children[i].name === "Brick") {
                this._reuseBrick(children[i]);
            }
        }
    };
    Maze.prototype.playerCanMove = function () {
        return !this._isPaused;
    };
    Maze.prototype.isWall = function (x, y) {
        return this._mazeArray[y][x] === GameConstant_1.TILE_TYPE.TILE_WALL;
    };
    Maze.prototype._rebuildMaze = function () {
        this._recycleAllBricks();
        this._builder.rebuildMaze(this._mazeArray);
    };
    Maze.prototype.levelUp = function () {
        this._timer = 0;
        this._level += 1;
        this.levelLabel.string = "Level: " + this._level;
        this._rebuildMaze();
        this._displayMaze();
        this.player.node.setPosition(cc.v2(this._startX, this._startY));
    };
    Maze.prototype._gameOver = function () {
        this._isPaused = true;
        this.gameOverLabel.node.active = true;
        this.startBtn.node.active = true;
    };
    Maze.prototype.update = function (dt) {
        if (this._isPaused) {
            return;
        }
        this._timer += dt;
        if (this._timer >= this.maxMoveTime) {
            this._gameOver();
            return;
        }
        this.timeDisplay.string =
            "Time: " + Math.floor(this.maxMoveTime - this._timer) + "s";
        this.progressBar.progress =
            Math.floor(this.maxMoveTime - this._timer) / this.maxMoveTime;
    };
    __decorate([
        property(cc.Prefab)
    ], Maze.prototype, "brick", void 0);
    __decorate([
        property(cc.Sprite)
    ], Maze.prototype, "player", void 0);
    __decorate([
        property(cc.Collider)
    ], Maze.prototype, "star", void 0);
    __decorate([
        property(cc.Label)
    ], Maze.prototype, "timeDisplay", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Maze.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Label)
    ], Maze.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Maze.prototype, "gameOverLabel", void 0);
    __decorate([
        property(cc.Button)
    ], Maze.prototype, "startBtn", void 0);
    __decorate([
        property(cc.Button)
    ], Maze.prototype, "pauseBtn", void 0);
    __decorate([
        property
    ], Maze.prototype, "maxMoveTime", void 0);
    Maze = __decorate([
        ccclass
    ], Maze);
    return Maze;
}(cc.Component));
exports.default = Maze;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQ3JDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLHNEQU0rQjtBQUMvQixvREFBK0M7QUFFL0MsbUNBQWtDO0FBR2xDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBaU5DO1FBL01RLFdBQUssR0FBYyxTQUFTLENBQUM7UUFHN0IsWUFBTSxHQUFjLFNBQVMsQ0FBQztRQUc5QixVQUFJLEdBQWdCLFNBQVMsQ0FBQztRQUc5QixpQkFBVyxHQUFhLFNBQVMsQ0FBQztRQUdsQyxpQkFBVyxHQUFtQixTQUFTLENBQUM7UUFHeEMsZ0JBQVUsR0FBYSxTQUFTLENBQUM7UUFHakMsbUJBQWEsR0FBYSxTQUFTLENBQUM7UUFHcEMsY0FBUSxHQUFjLFNBQVMsQ0FBQztRQUdoQyxjQUFRLEdBQWMsU0FBUyxDQUFDO1FBR2hDLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osZ0JBQVUsR0FBZSxTQUFTLENBQUM7UUFDbkMsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGNBQVEsR0FBZ0IsU0FBUyxDQUFDO1FBQ2xDLGdCQUFVLEdBQWdCLFNBQVMsQ0FBQzs7SUEySzdDLENBQUM7SUF6S08scUJBQU0sR0FBYjtRQUNDLFNBQVM7UUFDVCxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqRCxXQUFXO1FBQ1gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVB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dXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQge1xuXHRCUklDS19IRUlHSFQsXG5cdEJSSUNLX1dJRFRILFxuXHRNQVpFX00sXG5cdE1BWkVfTixcblx0VElMRV9UWVBFLFxufSBmcm9tIFwiLi9oZWxwZXIvR2FtZUNvbnN0YW50XCI7XG5pbXBvcnQgTWF6ZUJ1aWxkZXIgZnJvbSBcIi4vaGVscGVyL01hemVCdWlsZGVyXCI7XG5cbmltcG9ydCBNYXplUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF6ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdEBwcm9wZXJ0eShjYy5QcmVmYWIpXG5cdHByaXZhdGUgYnJpY2s6IGNjLlByZWZhYiA9IHVuZGVmaW5lZDtcblxuXHRAcHJvcGVydHkoY2MuU3ByaXRlKVxuXHRwcml2YXRlIHBsYXllcjogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuXG5cdEBwcm9wZXJ0eShjYy5Db2xsaWRlcilcblx0cHJpdmF0ZSBzdGFyOiBjYy5Db2xsaWRlciA9IHVuZGVmaW5lZDtcblxuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdHByaXZhdGUgdGltZURpc3BsYXk6IGNjLkxhYmVsID0gdW5kZWZpbmVkO1xuXG5cdEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0Jhcilcblx0cHJpdmF0ZSBwcm9ncmVzc0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSB1bmRlZmluZWQ7XG5cblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHRwcml2YXRlIGxldmVsTGFiZWw6IGNjLkxhYmVsID0gdW5kZWZpbmVkO1xuXG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHJpdmF0ZSBnYW1lT3ZlckxhYmVsOiBjYy5MYWJlbCA9IHVuZGVmaW5lZDtcblxuXHRAcHJvcGVydHkoY2MuQnV0dG9uKVxuXHRwcml2YXRlIHN0YXJ0QnRuOiBjYy5CdXR0b24gPSB1bmRlZmluZWQ7XG5cblx0QHByb3BlcnR5KGNjLkJ1dHRvbilcblx0cHJpdmF0ZSBwYXVzZUJ0bjogY2MuQnV0dG9uID0gdW5kZWZpbmVkO1xuXG5cdEBwcm9wZXJ0eVxuXHRwcml2YXRlIG1heE1vdmVUaW1lID0gMDtcblxuXHRwcml2YXRlIF9zdGFydFggPSAwO1xuXHRwcml2YXRlIF9zdGFydFkgPSAwO1xuXHRwcml2YXRlIF9tYXplQXJyYXk6IG51bWJlcltdW10gPSB1bmRlZmluZWQ7XG5cdHByaXZhdGUgX3RpbWVyID0gMDtcblx0cHJpdmF0ZSBfaXNQYXVzZWQgPSB0cnVlO1xuXHRwcml2YXRlIF9sZXZlbCA9IDA7XG5cdHByaXZhdGUgX2J1aWxkZXI6IE1hemVCdWlsZGVyID0gdW5kZWZpbmVkO1xuXHRwcml2YXRlIF9icmlja1Bvb2w6IGNjLk5vZGVQb29sID0gdW5kZWZpbmVkO1xuXG5cdHB1YmxpYyBvbkxvYWQoKTogdm9pZCB7XG5cdFx0Ly8g5byA5ZCv54mp55CG57O757ufXG5cdFx0Y2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuXHRcdC8vIOWIneWni+WMluegluWdl+WvueixoeaxoFxuXHRcdHRoaXMuX2JyaWNrUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuXHRcdC8vIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcblx0XHQvLyDnlJ/miJDov7flrqvmlbDnu4Rcblx0XHR0aGlzLl9idWlsZGVyID0gbmV3IE1hemVCdWlsZGVyKCk7XG5cdFx0dGhpcy5fbWF6ZUFycmF5ID0gdGhpcy5fYnVpbGRlci5idWlsZE1hemUoKTtcblx0XHR0aGlzLl9kaXNwbGF5TWF6ZSgpO1xuXG5cdFx0dGhpcy5fc3RhcnRYID0gQlJJQ0tfV0lEVEg7XG5cdFx0dGhpcy5fc3RhcnRZID0gLUJSSUNLX0hFSUdIVDtcblxuXHRcdC8vIOa4uOaIj+WAkuiuoeaXtlxuXHRcdHRoaXMuX3RpbWVyID0gMDtcblx0XHR0aGlzLnRpbWVEaXNwbGF5LnN0cmluZyA9IFwiVGltZTogXCIgKyB0aGlzLm1heE1vdmVUaW1lICsgXCJzXCI7XG5cdFx0dGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IDE7XG5cdFx0Ly8g546p5a626KeS6Imy5pS+5Yiw5Zu65a6a5L2N572u5bm25Yid5aeL5YyWXG5cdFx0dGhpcy5faW5pdFBsYXllcigpO1xuXHR9XG5cblx0cHJpdmF0ZSBfaW5pdFBsYXllcigpOiB2b2lkIHtcblx0XHQvLyDnjqnlrrbop5LoibLmlL7liLDlm7rlrprkvY3nva7lubbliJ3lp4vljJZcblx0XHR0aGlzLnBsYXllci5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKHRoaXMuX3N0YXJ0WCwgdGhpcy5fc3RhcnRZKSk7XG5cdFx0dGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KE1hemVQbGF5ZXIpLmluaXQodGhpcyk7XG5cdH1cblxuXHRwcml2YXRlIF9yZXNldExldmVsKCk6IHZvaWQge1xuXHRcdHRoaXMuX2xldmVsID0gMDtcblx0XHR0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gXCJMZXZlbDogXCIgKyB0aGlzLl9sZXZlbDtcblx0fVxuXG5cdHB1YmxpYyBzdGFydFBsYXlpbmcoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZ2FtZU92ZXJMYWJlbC5ub2RlLmFjdGl2ZSkge1xuXHRcdFx0Ly8g5aaC5p6c5piv5aSx6LSl6YeN5byALCDliJnph43liLbkurrniaks6YCa5YWz5pWwLOaXtumXtCzov7flrqtcblx0XHRcdHRoaXMuZ2FtZU92ZXJMYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0Ly8g6YCa5YWzXG5cdFx0XHR0aGlzLl9yZXNldExldmVsKCk7XG5cdFx0XHQvLyDov7flrqtcblx0XHRcdHRoaXMuX3JlYnVpbGRNYXplKCk7XG5cdFx0XHR0aGlzLl9kaXNwbGF5TWF6ZSgpO1xuXHRcdH1cblx0XHQvLyDph43liLbkurrnialcblx0XHR0aGlzLnBsYXllci5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKHRoaXMuX3N0YXJ0WCwgdGhpcy5fc3RhcnRZKSk7XG5cdFx0Ly8g5ri45oiP5YCS6K6h5pe2XG5cdFx0dGhpcy5fdGltZXIgPSAwO1xuXHRcdHRoaXMudGltZURpc3BsYXkuc3RyaW5nID0gXCJUaW1lOiBcIiArIHRoaXMubWF4TW92ZVRpbWUgKyBcInNcIjtcblx0XHR0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gMTtcblx0XHR0aGlzLnN0YXJ0QnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcblx0XHR0aGlzLnBhdXNlQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblx0fVxuXG5cdHB1YmxpYyBvblBhdXNlQ2xpY2soKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX2lzUGF1c2VkKSB7XG5cdFx0XHR0aGlzLl9yZXN1bWVHYW1lKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3BhdXNlR2FtZSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX3BhdXNlR2FtZSgpOiB2b2lkIHtcblx0XHR0aGlzLl9pc1BhdXNlZCA9IHRydWU7XG5cdFx0dGhpcy5fY2hhbmdlQnRuTmFtZShcIlJlc3VtZVwiKTtcblx0fVxuXG5cdHByaXZhdGUgX2NoYW5nZUJ0bk5hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgYmcgPSB0aGlzLnBhdXNlQnRuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpO1xuXHRcdGNvbnN0IGxhYmVsTm9kZSA9IGJnLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIik7XG5cdFx0Y29uc3QgbGFiQ29tcG9uZW50ID0gbGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cdFx0bGFiQ29tcG9uZW50LnN0cmluZyA9IG5hbWU7XG5cdH1cblxuXHRwcml2YXRlIF9yZXN1bWVHYW1lKCk6IHZvaWQge1xuXHRcdHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XG5cdFx0dGhpcy5fY2hhbmdlQnRuTmFtZShcIlBhdXNlXCIpO1xuXHR9XG5cblx0cHJpdmF0ZSBfZGlzcGxheU1hemUoKTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBNQVpFX007IGkrKykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBNQVpFX047IGorKykge1xuXHRcdFx0XHRzd2l0Y2ggKHRoaXMuX21hemVBcnJheVtpXVtqXSkge1xuXHRcdFx0XHRcdGNhc2UgVElMRV9UWVBFLlRJTEVfV0FMTDpcblx0XHRcdFx0XHRcdHRoaXMuX2ZvcmdlQnJpY2soaiAqIEJSSUNLX1dJRFRILCAtaSAqIEJSSUNLX0hFSUdIVCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFRJTEVfVFlQRS5USUxFX1NUQVI6XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXIubm9kZS5zZXRQb3NpdGlvbihcblx0XHRcdFx0XHRcdFx0aiAqIEJSSUNLX1dJRFRILFxuXHRcdFx0XHRcdFx0XHQtaSAqIEJSSUNLX0hFSUdIVFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX2ZvcmdlQnJpY2soeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcblx0XHRsZXQgbmV3QnJpY2s6IGNjLk5vZGUgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKHRoaXMuX2JyaWNrUG9vbC5zaXplKCkgPiAwKSB7XG5cdFx0XHRuZXdCcmljayA9IHRoaXMuX2JyaWNrUG9vbC5nZXQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3QnJpY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJyaWNrKTtcblx0XHRcdG5ld0JyaWNrLndpZHRoID0gQlJJQ0tfV0lEVEg7XG5cdFx0XHRuZXdCcmljay5oZWlnaHQgPSBCUklDS19IRUlHSFQ7XG5cdFx0fVxuXHRcdHRoaXMubm9kZS5hZGRDaGlsZChuZXdCcmljayk7XG5cdFx0bmV3QnJpY2sueCA9IHg7XG5cdFx0bmV3QnJpY2sueSA9IHk7XG5cdH1cblxuXHRwcml2YXRlIF9yZXVzZUJyaWNrKGJyaWNrOiBjYy5Ob2RlKTogdm9pZCB7XG5cdFx0dGhpcy5fYnJpY2tQb29sLnB1dChicmljayk7XG5cdH1cblxuXHRwcml2YXRlIF9yZWN5Y2xlQWxsQnJpY2tzKCk6IHZvaWQge1xuXHRcdGNvbnN0IGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0aWYgKGNoaWxkcmVuW2ldLm5hbWUgPT09IFwiQnJpY2tcIikge1xuXHRcdFx0XHR0aGlzLl9yZXVzZUJyaWNrKGNoaWxkcmVuW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcGxheWVyQ2FuTW92ZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuX2lzUGF1c2VkO1xuXHR9XG5cblx0cHVibGljIGlzV2FsbCh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9tYXplQXJyYXlbeV1beF0gPT09IFRJTEVfVFlQRS5USUxFX1dBTEw7XG5cdH1cblxuXHRwcml2YXRlIF9yZWJ1aWxkTWF6ZSgpOiB2b2lkIHtcblx0XHR0aGlzLl9yZWN5Y2xlQWxsQnJpY2tzKCk7XG5cdFx0dGhpcy5fYnVpbGRlci5yZWJ1aWxkTWF6ZSh0aGlzLl9tYXplQXJyYXkpO1xuXHR9XG5cblx0cHVibGljIGxldmVsVXAoKTogdm9pZCB7XG5cdFx0dGhpcy5fdGltZXIgPSAwO1xuXHRcdHRoaXMuX2xldmVsICs9IDE7XG5cdFx0dGhpcy5sZXZlbExhYmVsLnN0cmluZyA9IFwiTGV2ZWw6IFwiICsgdGhpcy5fbGV2ZWw7XG5cdFx0dGhpcy5fcmVidWlsZE1hemUoKTtcblx0XHR0aGlzLl9kaXNwbGF5TWF6ZSgpO1xuXHRcdHRoaXMucGxheWVyLm5vZGUuc2V0UG9zaXRpb24oY2MudjIodGhpcy5fc3RhcnRYLCB0aGlzLl9zdGFydFkpKTtcblx0fVxuXG5cdHByaXZhdGUgX2dhbWVPdmVyKCk6IHZvaWQge1xuXHRcdHRoaXMuX2lzUGF1c2VkID0gdHJ1ZTtcblx0XHR0aGlzLmdhbWVPdmVyTGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuXHRcdHRoaXMuc3RhcnRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX2lzUGF1c2VkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fdGltZXIgKz0gZHQ7XG5cdFx0aWYgKHRoaXMuX3RpbWVyID49IHRoaXMubWF4TW92ZVRpbWUpIHtcblx0XHRcdHRoaXMuX2dhbWVPdmVyKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudGltZURpc3BsYXkuc3RyaW5nID1cblx0XHRcdFwiVGltZTogXCIgKyBNYXRoLmZsb29yKHRoaXMubWF4TW92ZVRpbWUgLSB0aGlzLl90aW1lcikgKyBcInNcIjtcblx0XHR0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID1cblx0XHRcdE1hdGguZmxvb3IodGhpcy5tYXhNb3ZlVGltZSAtIHRoaXMuX3RpbWVyKSAvIHRoaXMubWF4TW92ZVRpbWU7XG5cdH1cbn1cbiJdfQ==