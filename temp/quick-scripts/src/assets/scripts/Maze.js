"use strict";
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