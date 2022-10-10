export function breakPalindrome(palindrome: string): string {
    if (palindrome.length <= 1) return '';

    for (let i = 0; i < palindrome.length; i++) {
        if (palindrome[i] === 'a') continue; // 'a' is already the lowest, so don't change

        if (palindrome.length % 2 !== 0
            && i === Math.floor(palindrome.length / 2)) continue; // when the length is odd, the middle character changes will not effect the palidrome
        return palindrome.substring(0, i) + 'a' + palindrome.substring(i + 1);
    }

    return palindrome.substring(0, palindrome.length - 1) + 'b';
};
