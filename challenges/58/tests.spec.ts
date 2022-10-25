import { describe, expect, test } from '@jest/globals'
import { lengthOfLastWord } from './solution'

describe('Length of last word', () => {

    test("Should return the right value", () => {
        expect(lengthOfLastWord("aabbaaaa")).toBe(8);
        expect(lengthOfLastWord("Hello World")).toBe(5);
        expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
        expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
    })

})