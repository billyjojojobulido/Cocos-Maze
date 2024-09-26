"use strict";
cc._RF.push(module, '794745eAnZCT5d2uET2mYEi', 'Player');
// scripts/Player.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameConstant_1 = require("./helper/GameConstant");
var MAZE_DIRECTION;
(function (MAZE_DIRECTION) {
    MAZE_DIRECTION[MAZE_DIRECTION["UP"] = 0] = "UP";
    MAZE_DIRECTION[MAZE_DIRECTION["DOWN"] = 1] = "DOWN";
    MAZE_DIRECTION[MAZE_DIRECTION["LEFT"] = 2] = "LEFT";
    MAZE_DIRECTION[MAZE_DIRECTION["RIGHT"] = 3] = "RIGHT";
    MAZE_DIRECTION[MAZE_DIRECTION["STILL"] = 4] = "STILL";
})(MAZE_DIRECTION || (MAZE_DIRECTION = {}));
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stepDuration = 0; // 走一步需要用多少时间
        _this._isMoving = false;
        _this._isPressing = false;
        _this._game = undefined;
        return _this;
    }
    Player.prototype.onLoad = function () {
        this._setInputListener();
    };
    Player.prototype.init = function (game) {
        this._game = game;
    };
    Player.prototype.onCollisionEnter = function (other, self) {
        var _this = this;
        console.log("THERE IS A COLLISION : (" +
            other.node.x +
            ", " +
            other.node.y +
            ") ,  (" +
            self.node.x +
            ", " +
            self.node.y +
            ")");
        setTimeout(function () {
            _this._game.levelUp();
            console.log("LEVEL UP ALREADY");
        }, this.stepDuration * 1000); // 必须等接触星星的那次tween执行完了再levelup,否则下一关的position会被overwrite
    };
    Player.prototype.onDestroy = function () {
        this._closeInputListener();
    };
    Player.prototype._canMove = function (delX, delY) {
        return !this._game.isWall(this.node.x / GameConstant_1.BRICK_WIDTH + delX, this.node.y / -GameConstant_1.BRICK_HEIGHT + delY);
    };
    Player.prototype._setInputListener = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this._onKeyUp, this);
    };
    Player.prototype._closeInputListener = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP);
    };
    Player.prototype._onKeyDown = function (event) {
        if (this._isPressing || this._isMoving || !this._game.playerCanMove()) {
            return;
        }
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this._isPressing = true;
                this._moveLeft();
                break;
            case cc.macro.KEY.right:
                this._isPressing = true;
                this._moveRight();
                break;
            case cc.macro.KEY.up:
                this._isPressing = true;
                this._moveUp();
                break;
            case cc.macro.KEY.down:
                this._isPressing = true;
                this._moveDown();
                break;
            default:
                break;
        }
    };
    Player.prototype._moveLeft = function () {
        if (this._canMove(-1, 0)) {
            this._startMoving(MAZE_DIRECTION.LEFT);
        }
    };
    Player.prototype._moveRight = function () {
        if (this._canMove(1, 0)) {
            this._startMoving(MAZE_DIRECTION.RIGHT);
        }
    };
    Player.prototype._moveUp = function () {
        if (this._canMove(0, -1)) {
            this._startMoving(MAZE_DIRECTION.UP);
        }
    };
    Player.prototype._moveDown = function () {
        if (this._canMove(0, 1)) {
            this._startMoving(MAZE_DIRECTION.DOWN);
        }
    };
    Player.prototype._onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this._isPressing = false;
                break;
            case cc.macro.KEY.right:
                this._isPressing = false;
                break;
            case cc.macro.KEY.up:
                this._isPressing = false;
                break;
            case cc.macro.KEY.down:
                this._isPressing = false;
                break;
            default:
                break;
        }
    };
    Player.prototype._startMoving = function (dir) {
        var _this = this;
        var _a;
        this._isMoving = true;
        var tween = (_a = this._getMovement(dir)) === null || _a === void 0 ? void 0 : _a.call(function () {
            _this._isMoving = false;
        });
        cc.tween(this.node).then(tween).start();
    };
    Player.prototype._getMovement = function (dir) {
        switch (dir) {
            case MAZE_DIRECTION.DOWN:
                return cc
                    .tween(this.node)
                    .by(this.stepDuration, { y: -GameConstant_1.MAZE_MOVE_STEP }, { easing: "sineOut" });
            case MAZE_DIRECTION.UP:
                return cc
                    .tween(this.node)
                    .by(this.stepDuration, { y: GameConstant_1.MAZE_MOVE_STEP }, { easing: "sineOut" });
            case MAZE_DIRECTION.LEFT:
                return cc
                    .tween(this.node)
                    .by(this.stepDuration, { x: -GameConstant_1.MAZE_MOVE_STEP }, { easing: "sineOut" });
            case MAZE_DIRECTION.RIGHT:
                return cc
                    .tween(this.node)
                    .by(this.stepDuration, { x: GameConstant_1.MAZE_MOVE_STEP }, { easing: "sineOut" });
            default:
                return undefined;
        }
    };
    __decorate([
        property
    ], Player.prototype, "stepDuration", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();