import { minCost as firstApproach } from "./FirstApproach";
import { minCost as secondApproach } from "./SecondApproach";
import { describe, expect, test } from '@jest/globals'

describe("First approach", function () {
    test("Should return the right value", function () {
        expect(firstApproach("abaa", [1, 2, 3, 4])).toBe(3);
        expect(firstApproach("abcaa", [1, 2, 3, 1, 4])).toBe(1);
        expect(firstApproach("aabaa", [1, 1, 2, 3, 4])).toBe(4);
        expect(firstApproach("aaabbbabbbb", [3,5,10,7,5,3,5,5,4,8,1])).toBe(26);
    })
})

describe("Second approach", function () {
    test("Should return the right value", function () {
        expect(secondApproach("abaa", [1, 2, 3, 4])).toBe(3);
        expect(secondApproach("abcaa", [1, 2, 3, 1, 4])).toBe(1);
        expect(secondApproach("aabaa", [1, 1, 2, 3, 4])).toBe(4);
        expect(secondApproach("aaabbbabbbb", [3,5,10,7,5,3,5,5,4,8,1])).toBe(26);
    })
})