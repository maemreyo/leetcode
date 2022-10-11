// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export const sampleTree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

export const preorderTraversal = (root: TreeNode | null, result: number[] = []): number[] => {
    if (!!root) {
        result.push(root.val);
        preorderTraversal(root.left, result);
        preorderTraversal(root.right, result);
    }
    return result;
};

preorderTraversal(sampleTree);