import { describe, expect, test } from '@jest/globals'
import { TreeNode as Node, hasPathSum as hasRootToLeaf, isLeaf } from "./solution"
import { tree } from './tree'

describe('Solution 1', () => {

    test("TreeNode structure", () => {
        expect(isLeaf(tree)).toBeFalsy();
        expect(tree.val).toBe(5);
        expect(tree.left.val).toBe(4);
        expect(tree.right.val).toBe(8);

        expect(isLeaf(tree.right.left)).toBe(true);
        expect(isLeaf(tree.right.right)).toBe(false);
    })

    test("hasPathSum function", () => {
        expect(hasRootToLeaf(tree, 22)).toBeTruthy();
    })
})