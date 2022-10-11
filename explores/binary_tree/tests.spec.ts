import { describe, expect, test } from '@jest/globals'
import { preorderTraversal, sampleTree } from './exercise1'
import { inorderTraversal } from './exercise2';

describe('Exercise: Pre-order', () => {

    test("Exercise 1", () => {
        expect(preorderTraversal(sampleTree)).toEqual([1,2,3]);
    })

    test("Exercise 2", () => {
        expect(inorderTraversal(sampleTree)).toEqual([1,3,2]);
    });
})