import { describe, expect, test } from '@jest/globals'
import { arrayStringsAreEqual } from './solution'

describe('Check if two string arrays are equivalent', () => {

    test("Should return the right value", () => {
        expect(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc'])).toBeTruthy();
        expect(arrayStringsAreEqual(['a', 'cb'], ['a', 'bc'])).toBeFalsy();
        expect(arrayStringsAreEqual(['abc', 'd', 'defg'], ['abcddefg'])).toBeTruthy();
    })

})