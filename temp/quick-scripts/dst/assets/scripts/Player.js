
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxzREFJK0I7QUFDL0IsSUFBVyxjQU1WO0FBTkQsV0FBVyxjQUFjO0lBQ3hCLCtDQUFFLENBQUE7SUFDRixtREFBSSxDQUFBO0lBQ0osbURBQUksQ0FBQTtJQUNKLHFEQUFLLENBQUE7SUFDTCxxREFBSyxDQUFBO0FBQ04sQ0FBQyxFQU5VLGNBQWMsS0FBZCxjQUFjLFFBTXhCO0FBR0Q7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFnTEM7UUE5S1Esa0JBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBRS9CLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUFFcEIsV0FBSyxHQUFTLFNBQVMsQ0FBQzs7SUF3S2pDLENBQUM7SUF0S08sdUJBQU0sR0FBYjtRQUNDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxxQkFBSSxHQUFYLFVBQVksSUFBVTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFBdEQsaUJBZ0JDO1FBZkEsT0FBTyxDQUFDLEdBQUcsQ0FDViwwQkFBMEI7WUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1osSUFBSTtZQUNKLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNaLFFBQVE7WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxJQUFJO1lBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsR0FBRyxDQUNKLENBQUM7UUFDRixVQUFVLENBQUM7WUFDVixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLHdEQUF3RDtJQUN2RixDQUFDO0lBRVMsMEJBQVMsR0FBbkI7UUFDQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8seUJBQVEsR0FBaEIsVUFBaUIsSUFBWSxFQUFFLElBQVk7UUFDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRywwQkFBVyxHQUFHLElBQUksRUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQywyQkFBWSxHQUFHLElBQUksQ0FDbEMsQ0FBQztJQUNILENBQUM7SUFFTyxrQ0FBaUIsR0FBekI7UUFDQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUNqQyxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FDSixDQUFDO1FBQ0YsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLG9DQUFtQixHQUEzQjtRQUNDLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTywyQkFBVSxHQUFsQixVQUFtQixLQUFLO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN0RSxPQUFPO1NBQ1A7UUFDRCxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDdEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixNQUFNO1lBQ1AsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixNQUFNO1lBQ1AsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07WUFDUCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU07WUFDUDtnQkFDQyxNQUFNO1NBQ1A7SUFDRixDQUFDO0lBRU8sMEJBQVMsR0FBakI7UUFDQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7SUFDRixDQUFDO0lBRU8sMkJBQVUsR0FBbEI7UUFDQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO0lBQ0YsQ0FBQztJQUVPLHdCQUFPLEdBQWY7UUFDQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDckM7SUFDRixDQUFDO0lBRU8sMEJBQVMsR0FBakI7UUFDQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0YsQ0FBQztJQUVPLHlCQUFRLEdBQWhCLFVBQWlCLEtBQUs7UUFDckIsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3RCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE1BQU07WUFDUCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixNQUFNO1lBQ1AsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsTUFBTTtZQUNQLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE1BQU07WUFDUDtnQkFDQyxNQUFNO1NBQ1A7SUFDRixDQUFDO0lBRU8sNkJBQVksR0FBcEIsVUFBcUIsR0FBbUI7UUFBeEMsaUJBTUM7O1FBTEEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBTSxLQUFLLFNBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsMENBQUUsSUFBSSxDQUFDO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFTyw2QkFBWSxHQUFwQixVQUFxQixHQUFtQjtRQUN2QyxRQUFRLEdBQUcsRUFBRTtZQUNaLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sRUFBRTtxQkFDUCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDaEIsRUFBRSxDQUNGLElBQUksQ0FBQyxZQUFZLEVBQ2pCLEVBQUUsQ0FBQyxFQUFFLENBQUMsNkJBQWMsRUFBRSxFQUN0QixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FDckIsQ0FBQztZQUNKLEtBQUssY0FBYyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sRUFBRTtxQkFDUCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDaEIsRUFBRSxDQUNGLElBQUksQ0FBQyxZQUFZLEVBQ2pCLEVBQUUsQ0FBQyxFQUFFLDZCQUFjLEVBQUUsRUFDckIsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQ3JCLENBQUM7WUFDSixLQUFLLGNBQWMsQ0FBQyxJQUFJO2dCQUN2QixPQUFPLEVBQUU7cUJBQ1AsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQ2hCLEVBQUUsQ0FDRixJQUFJLENBQUMsWUFBWSxFQUNqQixFQUFFLENBQUMsRUFBRSxDQUFDLDZCQUFjLEVBQUUsRUFDdEIsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQ3JCLENBQUM7WUFDSixLQUFLLGNBQWMsQ0FBQyxLQUFLO2dCQUN4QixPQUFPLEVBQUU7cUJBQ1AsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQ2hCLEVBQUUsQ0FDRixJQUFJLENBQUMsWUFBWSxFQUNqQixFQUFFLENBQUMsRUFBRSw2QkFBYyxFQUFFLEVBQ3JCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUNyQixDQUFDO1lBQ0o7Z0JBQ0MsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDRixDQUFDO0lBN0tEO1FBREMsUUFBUTtnREFDZ0I7SUFGTCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBZ0wxQjtJQUFELGFBQUM7Q0FoTEQsQUFnTEMsQ0FoTG1DLEVBQUUsQ0FBQyxTQUFTLEdBZ0wvQztrQkFoTG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IE1hemUgZnJvbSBcIi4vTWF6ZVwiO1xuaW1wb3J0IHtcblx0QlJJQ0tfV0lEVEgsXG5cdEJSSUNLX0hFSUdIVCxcblx0TUFaRV9NT1ZFX1NURVAsXG59IGZyb20gXCIuL2hlbHBlci9HYW1lQ29uc3RhbnRcIjtcbmNvbnN0IGVudW0gTUFaRV9ESVJFQ1RJT04ge1xuXHRVUCxcblx0RE9XTixcblx0TEVGVCxcblx0UklHSFQsXG5cdFNUSUxMLFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblx0QHByb3BlcnR5XG5cdHByaXZhdGUgc3RlcER1cmF0aW9uID0gMDsgLy8g6LWw5LiA5q2l6ZyA6KaB55So5aSa5bCR5pe26Ze0XG5cblx0cHJpdmF0ZSBfaXNNb3ZpbmcgPSBmYWxzZTtcblxuXHRwcml2YXRlIF9pc1ByZXNzaW5nID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBfZ2FtZTogTWF6ZSA9IHVuZGVmaW5lZDtcblxuXHRwdWJsaWMgb25Mb2FkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3NldElucHV0TGlzdGVuZXIoKTtcblx0fVxuXG5cdHB1YmxpYyBpbml0KGdhbWU6IE1hemUpOiB2b2lkIHtcblx0XHR0aGlzLl9nYW1lID0gZ2FtZTtcblx0fVxuXG5cdG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcik6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XCJUSEVSRSBJUyBBIENPTExJU0lPTiA6IChcIiArXG5cdFx0XHRcdG90aGVyLm5vZGUueCArXG5cdFx0XHRcdFwiLCBcIiArXG5cdFx0XHRcdG90aGVyLm5vZGUueSArXG5cdFx0XHRcdFwiKSAsICAoXCIgK1xuXHRcdFx0XHRzZWxmLm5vZGUueCArXG5cdFx0XHRcdFwiLCBcIiArXG5cdFx0XHRcdHNlbGYubm9kZS55ICtcblx0XHRcdFx0XCIpXCJcblx0XHQpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5fZ2FtZS5sZXZlbFVwKCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkxFVkVMIFVQIEFMUkVBRFlcIik7XG5cdFx0fSwgdGhpcy5zdGVwRHVyYXRpb24gKiAxMDAwKTsgLy8g5b+F6aG7562J5o6l6Kem5pif5pif55qE6YKj5qyhdHdlZW7miafooYzlrozkuoblho1sZXZlbHVwLOWQpuWImeS4i+S4gOWFs+eahHBvc2l0aW9u5Lya6KKrb3ZlcndyaXRlXG5cdH1cblxuXHRwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuX2Nsb3NlSW5wdXRMaXN0ZW5lcigpO1xuXHR9XG5cblx0cHJpdmF0ZSBfY2FuTW92ZShkZWxYOiBudW1iZXIsIGRlbFk6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5fZ2FtZS5pc1dhbGwoXG5cdFx0XHR0aGlzLm5vZGUueCAvIEJSSUNLX1dJRFRIICsgZGVsWCxcblx0XHRcdHRoaXMubm9kZS55IC8gLUJSSUNLX0hFSUdIVCArIGRlbFlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBfc2V0SW5wdXRMaXN0ZW5lcigpOiB2b2lkIHtcblx0XHRjYy5zeXN0ZW1FdmVudC5vbihcblx0XHRcdGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTixcblx0XHRcdHRoaXMuX29uS2V5RG93bixcblx0XHRcdHRoaXNcblx0XHQpO1xuXHRcdGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMuX29uS2V5VXAsIHRoaXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBfY2xvc2VJbnB1dExpc3RlbmVyKCk6IHZvaWQge1xuXHRcdGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04pO1xuXHRcdGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQKTtcblx0fVxuXG5cdHByaXZhdGUgX29uS2V5RG93bihldmVudCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLl9pc1ByZXNzaW5nIHx8IHRoaXMuX2lzTW92aW5nIHx8ICF0aGlzLl9nYW1lLnBsYXllckNhbk1vdmUoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcblx0XHRcdGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG5cdFx0XHRcdHRoaXMuX2lzUHJlc3NpbmcgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9tb3ZlTGVmdCgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxuXHRcdFx0XHR0aGlzLl9pc1ByZXNzaW5nID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fbW92ZVJpZ2h0KCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBjYy5tYWNyby5LRVkudXA6XG5cdFx0XHRcdHRoaXMuX2lzUHJlc3NpbmcgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9tb3ZlVXAoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxuXHRcdFx0XHR0aGlzLl9pc1ByZXNzaW5nID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fbW92ZURvd24oKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIF9tb3ZlTGVmdCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5fY2FuTW92ZSgtMSwgMCkpIHtcblx0XHRcdHRoaXMuX3N0YXJ0TW92aW5nKE1BWkVfRElSRUNUSU9OLkxFRlQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX21vdmVSaWdodCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5fY2FuTW92ZSgxLCAwKSkge1xuXHRcdFx0dGhpcy5fc3RhcnRNb3ZpbmcoTUFaRV9ESVJFQ1RJT04uUklHSFQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX21vdmVVcCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5fY2FuTW92ZSgwLCAtMSkpIHtcblx0XHRcdHRoaXMuX3N0YXJ0TW92aW5nKE1BWkVfRElSRUNUSU9OLlVQKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIF9tb3ZlRG93bigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5fY2FuTW92ZSgwLCAxKSkge1xuXHRcdFx0dGhpcy5fc3RhcnRNb3ZpbmcoTUFaRV9ESVJFQ1RJT04uRE9XTik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBfb25LZXlVcChldmVudCk6IHZvaWQge1xuXHRcdHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuXHRcdFx0Y2FzZSBjYy5tYWNyby5LRVkubGVmdDpcblx0XHRcdFx0dGhpcy5faXNQcmVzc2luZyA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxuXHRcdFx0XHR0aGlzLl9pc1ByZXNzaW5nID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBjYy5tYWNyby5LRVkudXA6XG5cdFx0XHRcdHRoaXMuX2lzUHJlc3NpbmcgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxuXHRcdFx0XHR0aGlzLl9pc1ByZXNzaW5nID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBfc3RhcnRNb3ZpbmcoZGlyOiBNQVpFX0RJUkVDVElPTik6IHZvaWQge1xuXHRcdHRoaXMuX2lzTW92aW5nID0gdHJ1ZTtcblx0XHRjb25zdCB0d2VlbiA9IHRoaXMuX2dldE1vdmVtZW50KGRpcik/LmNhbGwoKCkgPT4ge1xuXHRcdFx0dGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcblx0XHR9KTtcblx0XHRjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4odHdlZW4pLnN0YXJ0KCk7XG5cdH1cblxuXHRwcml2YXRlIF9nZXRNb3ZlbWVudChkaXI6IE1BWkVfRElSRUNUSU9OKTogY2MuVHdlZW4ge1xuXHRcdHN3aXRjaCAoZGlyKSB7XG5cdFx0XHRjYXNlIE1BWkVfRElSRUNUSU9OLkRPV046XG5cdFx0XHRcdHJldHVybiBjY1xuXHRcdFx0XHRcdC50d2Vlbih0aGlzLm5vZGUpXG5cdFx0XHRcdFx0LmJ5KFxuXHRcdFx0XHRcdFx0dGhpcy5zdGVwRHVyYXRpb24sXG5cdFx0XHRcdFx0XHR7IHk6IC1NQVpFX01PVkVfU1RFUCB9LFxuXHRcdFx0XHRcdFx0eyBlYXNpbmc6IFwic2luZU91dFwiIH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0Y2FzZSBNQVpFX0RJUkVDVElPTi5VUDpcblx0XHRcdFx0cmV0dXJuIGNjXG5cdFx0XHRcdFx0LnR3ZWVuKHRoaXMubm9kZSlcblx0XHRcdFx0XHQuYnkoXG5cdFx0XHRcdFx0XHR0aGlzLnN0ZXBEdXJhdGlvbixcblx0XHRcdFx0XHRcdHsgeTogTUFaRV9NT1ZFX1NURVAgfSxcblx0XHRcdFx0XHRcdHsgZWFzaW5nOiBcInNpbmVPdXRcIiB9XG5cdFx0XHRcdFx0KTtcblx0XHRcdGNhc2UgTUFaRV9ESVJFQ1RJT04uTEVGVDpcblx0XHRcdFx0cmV0dXJuIGNjXG5cdFx0XHRcdFx0LnR3ZWVuKHRoaXMubm9kZSlcblx0XHRcdFx0XHQuYnkoXG5cdFx0XHRcdFx0XHR0aGlzLnN0ZXBEdXJhdGlvbixcblx0XHRcdFx0XHRcdHsgeDogLU1BWkVfTU9WRV9TVEVQIH0sXG5cdFx0XHRcdFx0XHR7IGVhc2luZzogXCJzaW5lT3V0XCIgfVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRjYXNlIE1BWkVfRElSRUNUSU9OLlJJR0hUOlxuXHRcdFx0XHRyZXR1cm4gY2Ncblx0XHRcdFx0XHQudHdlZW4odGhpcy5ub2RlKVxuXHRcdFx0XHRcdC5ieShcblx0XHRcdFx0XHRcdHRoaXMuc3RlcER1cmF0aW9uLFxuXHRcdFx0XHRcdFx0eyB4OiBNQVpFX01PVkVfU1RFUCB9LFxuXHRcdFx0XHRcdFx0eyBlYXNpbmc6IFwic2luZU91dFwiIH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cbn1cbiJdfQ==