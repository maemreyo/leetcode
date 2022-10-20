export const longestCommonPrefix = (strs: string[]): string => {
    const shortestWordLength = Math.min(...strs.map(str => str.length));

    for (let i = shortestWordLength; i > 0; i--) {
        const prefix = strs[0].substring(0, i);

        if (strs.every(s => s.startsWith(prefix))) {
            return prefix;
        }
    }

    return "";
};