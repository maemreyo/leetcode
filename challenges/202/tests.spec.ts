import { describe, expect, test } from '@jest/globals'
import { isHappy } from './solution'

describe('Happy Number', () => {

    test("Should return the right value", () => {
        expect(isHappy(1)).toBeTruthy();
        expect(isHappy(2)).toBeFalsy();
        expect(isHappy(19)).toBeTruthy();
    })

})