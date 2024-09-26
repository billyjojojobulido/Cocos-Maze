
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Brick');
require('./assets/scripts/Maze');
require('./assets/scripts/Player');
require('./assets/scripts/helper/GameConstant');
require('./assets/scripts/helper/MazeBuilder');
require('./assets/scripts/helper/Point');
require('./assets/scripts/helper/Queue');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Brick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28681kGzrpE04yfnKsRIoZH', 'Brick');
// scripts/Brick.ts

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
var ccclass = cc._decorator.ccclass;
var Brick = /** @class */ (function (_super) {
    __extends(Brick, _super);
    function Brick() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Brick.prototype.unuse = function () {
        this.node.active = false;
    };
    Brick.prototype.reuse = function () {
        this.node.active = true;
    };
    Brick = __decorate([
        ccclass
    ], Brick);
    return Brick;
}(cc.Component));
exports.default = Brick;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0JyaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQW1DLHlCQUFZO0lBQS9DOztJQVFBLENBQUM7SUFQTyxxQkFBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFTSxxQkFBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFQbUIsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQVF6QjtJQUFELFlBQUM7Q0FSRCxBQVFDLENBUmtDLEVBQUUsQ0FBQyxTQUFTLEdBUTlDO2tCQVJvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJpY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRwdWJsaWMgdW51c2UoKTogdm9pZCB7XG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIHJldXNlKCk6IHZvaWQge1xuXHRcdHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuXHR9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/helper/Queue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ab09ymYqZBjqhgeyDMhk87', 'Queue');
// scripts/helper/Queue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this._nodes = [];
    }
    Queue.prototype.enqueue = function (item) {
        this._nodes.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this._nodes.shift();
    };
    Queue.prototype.front = function () {
        return this._nodes[0];
    };
    Queue.prototype.isEmpty = function () {
        return this._nodes.length === 0;
    };
    Queue.prototype.size = function () {
        return this._nodes.length;
    };
    Queue.prototype.randomDequeue = function () {
        if (this._nodes.length === 0) {
            return undefined;
        }
        var randomIndex = Math.floor(Math.random() * this._nodes.length);
        var randElement = this._nodes[randomIndex];
        this._nodes[randomIndex] = this._nodes[0];
        this._nodes.shift();
        return randElement;
    };
    return Queue;
}());
exports.default = Queue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hlbHBlci9RdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7UUFDUSxXQUFNLEdBQVEsRUFBRSxDQUFDO0lBZ0N6QixDQUFDO0lBOUJPLHVCQUFPLEdBQWQsVUFBZSxJQUFPO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSx1QkFBTyxHQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSxxQkFBSyxHQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSx1QkFBTyxHQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLG9CQUFJLEdBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFTSw2QkFBYSxHQUFwQjtRQUNDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sU0FBUyxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLE9BQU8sV0FBVyxDQUFDO0lBQ3BCLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlPFQ+IHtcblx0cHVibGljIF9ub2RlczogVFtdID0gW107XG5cblx0cHVibGljIGVucXVldWUoaXRlbTogVCk6IHZvaWQge1xuXHRcdHRoaXMuX25vZGVzLnB1c2goaXRlbSk7XG5cdH1cblxuXHRwdWJsaWMgZGVxdWV1ZSgpOiBUIHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy5fbm9kZXMuc2hpZnQoKTtcblx0fVxuXG5cdHB1YmxpYyBmcm9udCgpOiBUIHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy5fbm9kZXNbMF07XG5cdH1cblxuXHRwdWJsaWMgaXNFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fbm9kZXMubGVuZ3RoID09PSAwO1xuXHR9XG5cblx0cHVibGljIHNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbm9kZXMubGVuZ3RoO1xuXHR9XG5cblx0cHVibGljIHJhbmRvbURlcXVldWUoKTogVCB8IHVuZGVmaW5lZCB7XG5cdFx0aWYgKHRoaXMuX25vZGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0bGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fbm9kZXMubGVuZ3RoKTtcblx0XHRsZXQgcmFuZEVsZW1lbnQgPSB0aGlzLl9ub2Rlc1tyYW5kb21JbmRleF07XG5cdFx0dGhpcy5fbm9kZXNbcmFuZG9tSW5kZXhdID0gdGhpcy5fbm9kZXNbMF07XG5cdFx0dGhpcy5fbm9kZXMuc2hpZnQoKTtcblx0XHRyZXR1cm4gcmFuZEVsZW1lbnQ7XG5cdH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/helper/Point.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f6beBwbpNCb5JXoCuH5k+9', 'Point');
// scripts/helper/Point.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hlbHBlci9Qb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIFBvaW50IHtcblx0eDogbnVtYmVyO1xuXHR5OiBudW1iZXI7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
