"use strict";
exports.__esModule = true;
exports.postorderTraversal = exports.sampleTree = void 0;
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
var postorderTraversal = function (root, result) {
    if (result === void 0) { result = []; }
    if (!!root) {
        (0, exports.postorderTraversal)(root.left, result);
        (0, exports.postorderTraversal)(root.right, result);
        result.push(root.val);
    }
    return result;
};
exports.postorderTraversal = postorderTraversal;
