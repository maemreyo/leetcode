"use strict";
exports.__esModule = true;
exports.inorderTraversal = exports.sampleTree = void 0;
// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
exports.sampleTree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
var inorderTraversal = function (root, result) {
    if (result === void 0) { result = []; }
    if (!!root) {
        (0, exports.inorderTraversal)(root.left, result);
        result.push(root.val);
        (0, exports.inorderTraversal)(root.right, result);
    }
    return result;
};
exports.inorderTraversal = inorderTraversal;
(0, exports.inorderTraversal)(exports.sampleTree);
