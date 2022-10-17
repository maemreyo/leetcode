export const isPalindrome = (x: number): boolean => {
    if (x < 0) return false;
    if (x % 10 === x) return true;

    const string = x.toString();
    const len = Math.floor(string.length / 2);
    for (let i = 0; i < len; i++) {
        if (string[i] !== string[string.length - i - 1]) {
            return false;
        }    
    }
    return true;
};