import { describe, expect, test } from '@jest/globals'
import { preorderTraversal, sampleTree } from './exercise1'

describe('Exercise: Pre-order', () => {

    test("Exercise 1", () => {
        expect(preorderTraversal(sampleTree)).toEqual([1,2,3]);
    })

})