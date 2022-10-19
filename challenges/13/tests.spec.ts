import { describe, expect, test } from '@jest/globals'
import { romanToInt } from './solution'

describe('Roman to Integer', () => {

    test("Should return the right value", () => {
        expect(romanToInt("III")).toBe(3);
        expect(romanToInt("LVIII")).toBe(58);
        expect(romanToInt("MCMXCIV")).toBe(1994);
    })

})