import { describe, expect, test } from '@jest/globals'
import { searchInsert } from './solution'

describe('Search Insert Position', () => {

    test("Should return the right value", () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    })

})