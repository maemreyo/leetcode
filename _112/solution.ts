import { tree } from "./tree"

// Definition for a binary tree node.
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


export function hasPathSum(root: TreeNode | null, sum: number): boolean {
    if (!root) return false;
    const nextSum = sum - root.val;
    return (
        (nextSum === 0 && isLeaf(root)) ||
        hasPathSum(root.left, nextSum) ||
        hasPathSum(root.right, nextSum)
    );
}
export const isLeaf = (node: TreeNode | null): boolean => {
    return Boolean(node && !node.left && !node.right);
};