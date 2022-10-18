export const checkIfPangram = (sentence: string): boolean => {
    const NUMBER_OF_ALPHABET_LETTERS = 26;
    let alphabets: Set<string> = new Set<string>('abcdefghijklmnopqrstuvwxyz');
    let count = 0;
    if (sentence.length < alphabets.size) return false;

    for (const char of sentence) {
        if (alphabets.has(char)) {
            count += 1;
            alphabets.delete(char);
        }
    }

    return count === NUMBER_OF_ALPHABET_LETTERS;
};;