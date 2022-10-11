import { describe, expect, test } from '@jest/globals'
import { increasingTriplet } from './solution'

describe('Increasing triplet subsequence', () => {

    test("Should return the truthy value", () => {
        expect(increasingTriplet([1,2,3,4,5])).toBeTruthy();
        expect(increasingTriplet([5,4,1,2,3,4,5])).toBeTruthy();
        expect(increasingTriplet([2,1,3,4,5])).toBeTruthy();
        expect(increasingTriplet([1,9,3,2,5])).toBeTruthy();
        expect(increasingTriplet([2,1,3,0,5])).toBeTruthy();
        expect(increasingTriplet([5,4,1,0,3,1,5])).toBeTruthy();
    })

    test("Should return the falsy value", () => {
        expect(increasingTriplet([5,4,3])).toBeFalsy();
        expect(increasingTriplet([9,4,3])).toBeFalsy();
        expect(increasingTriplet([5,1,3])).toBeFalsy();
    })
})