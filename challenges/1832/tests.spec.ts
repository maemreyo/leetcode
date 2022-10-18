import { describe, expect, test } from '@jest/globals'
import { checkIfPangram } from './solution'

describe('Check if the sentence is pangram', () => {

    test("Should return the right value", () => {
        expect(checkIfPangram('leetcode')).toBeFalsy();
        expect(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')).toBeTruthy();
        expect(checkIfPangram('A aB bC cD dE eF fG gH hI iJ jK kL lM mN nO oP pQ qR rS sT tU uV vW wX xY yZ z')).toBeTruthy();
    })

})