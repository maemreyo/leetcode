"use strict";
exports.__esModule = true;
exports.openLock = exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = new Array(0);
    }
    Queue.prototype.enqueue = function (value) {
        this.queue.push(value);
        return this.queue;
    };
    Queue.prototype.dequeue = function () {
        if (this.queue.length) {
            return this.queue.shift();
        }
    };
    Queue.prototype.len = function () {
        return this.queue.length;
    };
    return Queue;
}());
exports.Queue = Queue;
var isTarget = function (sequence, target) { return target === sequence; };
var isNotExistIn = function (arr, ele) { return arr.indexOf(ele) === -1; };
var getNextSequences = function (curSeq, sequences) {
    if (sequences === void 0) { sequences = []; }
    for (var index = 0; index < curSeq.length; index++) {
        sequences.push(curSeq.slice(0, index) + ((+curSeq[index] + 1) % 10).toString() + curSeq.slice(index + 1));
        sequences.push(curSeq.slice(0, index) + ((+curSeq[index] + 9) % 10).toString() + curSeq.slice(index + 1));
    }
    return sequences;
};
var openLock = function (deadends, target) {
    var queue = new Queue();
    var checked = new Set();
    var _deadends = new Set(deadends);
    queue.enqueue(['0000', 0]);
    while (queue.len()) {
        var guessSeq = queue.dequeue();
        if (_deadends.has(guessSeq[0]))
            continue;
        if (isTarget(guessSeq[0], target))
            return guessSeq[1];
        for (var _i = 0, _a = getNextSequences(guessSeq[0]); _i < _a.length; _i++) {
            var seq = _a[_i];
            if (checked.has(seq))
                continue;
            checked.add(seq);
            queue.enqueue([seq, guessSeq[1] + 1]);
        }
    }
    return -1;
};
exports.openLock = openLock;
var deadends = ["0201", "0101", "0102", "1212", "2002"];
var target = "0202";
console.log("Turn:", (0, exports.openLock)(deadends, target));
