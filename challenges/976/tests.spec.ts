import { describe, expect, test } from '@jest/globals'
import { largestPerimeter } from './solution';

describe('Solution: Largest Perimeter Triangle', () => {

    test("Should return the right value", () => {
        expect(largestPerimeter([2, 1, 2])).toBe(5);
        expect(largestPerimeter([3, 2, 3, 4])).toBe(10);
    })

    test("Should return 0", () => {
        expect(largestPerimeter([1, 2, 4])).toBe(0);
        expect(largestPerimeter([1, 2, 5])).toBe(0);
        expect(largestPerimeter([1, 2, 7])).toBe(0);
    });
})