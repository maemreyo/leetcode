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

export const postorderTraversal = (root: TreeNode | null, result: number[] = []): number[] => {
    if (!!root) {
        postorderTraversal(root.left, result);
        postorderTraversal(root.right, result);
        result.push(root.val);
    }

    return result;
};