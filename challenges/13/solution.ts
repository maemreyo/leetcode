export const romanToInt = (s: string, symbols: { [key: string]: number } = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
): number => {
    const next = (): string => {
        for (const symbol of Object.keys(symbols)) {
            if (s.startsWith(symbol)) {
                s = s.substring(symbol.length);

                return symbol;
            }
        }
    }

    const chars: string[] = [];

    while (s.length > 0) {
        chars.push(next())
    }

    return chars.reduce((sum, char) => {
        return sum += symbols[char]
    }, 0);
};