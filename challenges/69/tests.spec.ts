import { describe, expect, test } from '@jest/globals'
import { mySqrt } from './solution'

describe('Sqrt(x)', () => {

    test("Should return the right value", () => {
        expect(mySqrt(4)).toBe(2);
        expect(mySqrt(9)).toBe(3);
        expect(mySqrt(5)).toBe(2);
        expect(mySqrt(2)).toBe(1);
    })

})