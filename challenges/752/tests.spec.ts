import { describe, expect, test } from '@jest/globals'
import { openLock } from './solution';

describe('Solution: Open the lock', () => {

    test("Should return the right value", () => {
        const deadends = ["0201","0101","0102","1212","2002"];
        const target = "0202";

        expect(openLock(deadends, target)).toBe(6);
    })

})