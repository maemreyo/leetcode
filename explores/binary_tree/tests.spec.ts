import { describe, expect, test } from '@jest/globals'
import { preorderTraversal, sampleTree } from './exercise1'
import { inorderTraversal } from './exercise2';
import { postorderTraversal } from './exercise3';
import { levelOrder, sampleTree as levelSampleTree } from './exercise4';

describe('Exercise:', () => {

    test("Exercise 1", () => {
        expect(preorderTraversal(sampleTree)).toEqual([1,2,3]);
    })

    test("Exercise 2", () => {
        expect(inorderTraversal(sampleTree)).toEqual([1,3,2]);
    });

    test("Exercise 3", () => {
        expect(postorderTraversal(sampleTree)).toEqual([3,2,1]);
    });

    test("Exercise 4", () => {
        expect(levelOrder(levelSampleTree)).toEqual([[3], [9, 20], [15, 7]]);
    });
})