import { describe, expect, test } from '@jest/globals'
import { isPalindrome } from './solution'

describe('Palindrome Number', () => {

    test("Should return the right value", () => {
        expect(isPalindrome(-10)).toBeFalsy();
        expect(isPalindrome(121)).toBeTruthy();
        expect(isPalindrome(10)).toBeFalsy();
    })

})