
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