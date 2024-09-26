"use strict";
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