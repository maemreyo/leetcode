import { describe, expect, test } from '@jest/globals'
import { check, isSorted } from './solution'

describe('Check if an array is sorted and rotated', () => {
    test("isSorted should sort properly", () => {
        expect(isSorted([])).toBeTruthy();
        expect(isSorted([1, 2, 3, 4, 5])).toBeTruthy();
        expect(isSorted([1, 2, 3, 4, 1])).toBeFalsy();
    })

    test("'check' function should return the right value", () => {
        expect(check([3, 4, 1, 2])).toBeTruthy();
        expect(check([1, 2])).toBeTruthy();
    })

})