import { describe, expect, test } from '@jest/globals'
import { breakPalindrome } from './solution'

describe('Solution: Break a Palindrome', () => {

    test("Should return empty string when the given input cant be replaced to make it not a palindrome", () => {
        expect(breakPalindrome("w")).toBe("");
    })

    test("Should return the right value", () => {
        expect(breakPalindrome("babbab")).toBe("aabbab");
        expect(breakPalindrome("abccba")).toBe("aaccba");
        expect(breakPalindrome("aabaa")).toBe("aabab");
    })

})