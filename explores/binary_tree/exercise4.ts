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

export const sampleTree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

// TODO: This should be improved with Queue structure
export const levelOrder = (root: TreeNode | null, result: number[][] = []): number[][] => {
    if (!root) return result;

    const queue = [root];
    
    while (queue.length) {
        const queueLength = queue.length;
        const level = [];

        for (let index = 0; index < queueLength; index++) {
            const item = queue.shift();

            if (!!item.left) queue.push(item.left);

            if (!!item.right) queue.push(item.right);

            level.push(item.val)
        }

        result.push(level);
    }
    return result;
};;