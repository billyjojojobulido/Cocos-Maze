
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