//  * Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var result = [];
var preorderTraversal = function (root) {
    if (root !== null) {
        result.push(root.val);
        preorderTraversal(root.left);
        preorderTraversal(root.right);
    }
    console.log(result);
    return result;
};
preorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))));
