import { describe, expect, test } from '@jest/globals'
import { twoSum } from './solution'

describe('Two Sum', () => {

    test("Should return the right value", () => {
        expect(twoSum([1, 2, 3, 4], 3)).toStrictEqual([0, 1]);
        
    })
    test("Should return the right value", () => {
        expect(twoSum([5, 1, 2, 3, 4], 6)).toStrictEqual([0, 1]);
    })
})