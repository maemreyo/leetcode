import { describe, expect, test } from '@jest/globals'
import { removeDuplicates } from './solution'

describe('Remove Duplicates from sorted array', () => {

    test("Should return the right value", () => {
        expect(removeDuplicates([1, 1, 2])).toBe(2);
        expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
    })

})