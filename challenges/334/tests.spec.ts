import { describe, expect, test } from '@jest/globals'
import { increasingTriplet } from './solution'

describe('Increasing triplet subsequence', () => {

    test("Should return the truthy value", () => {
        expect(increasingTriplet([20,100,10,12,5,13])).toBeFalsy();
    })
    test("Should return the truthy value", () => {
        expect(increasingTriplet([1,2,3,4,5])).toBeTruthy();
        expect(increasingTriplet([5,4,1,2,3,4,5])).toBeTruthy();
        expect(increasingTriplet([2,1,3,4,5])).toBeTruthy();
    })

    test("Should return the falsy value", () => {
        expect(increasingTriplet([1,9,3,2,5])).toBeFalsy();
        expect(increasingTriplet([5,4,1,0,3,1,5])).toBeFalsy();
        expect(increasingTriplet([2,1,3,0,5])).toBeFalsy();
    })
})