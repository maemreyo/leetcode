"use strict";
exports.__esModule = true;
exports.deleteNode = exports.sampleTarget = exports.sampleNodes = exports.ListNode = void 0;
// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
exports.ListNode = ListNode;
exports.sampleNodes = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(9))));
exports.sampleTarget = new ListNode(5);
var deleteNode = function (root, target) {
    if (root.next.val === target.val) {
        root.next.val = target.next.val;
        root.next = target.next;
    }
    (0, exports.deleteNode)(root.next, target);
};
exports.deleteNode = deleteNode;
console.log("Result? ", (0, exports.deleteNode)(exports.sampleNodes, exports.sampleTarget));
