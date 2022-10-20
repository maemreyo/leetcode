import { describe, expect, test } from '@jest/globals'
import { longestCommonPrefix } from './solution';

describe('Longest Common Prefix', () => {

    test("Should return the right value", () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
        expect(longestCommonPrefix(["dog","racecar","car"])).toBe("");
    })

})