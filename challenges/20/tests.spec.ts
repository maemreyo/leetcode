import { describe, expect, test } from '@jest/globals'
import { isValid } from './solution'

describe('Valid Parentheses', () => {

    test("Should return the right value", () => {
        expect(isValid("()")).toBeTruthy();
        expect(isValid("()[]{}")).toBeTruthy();
        expect(isValid("(]")).toBeFalsy();
    })

})