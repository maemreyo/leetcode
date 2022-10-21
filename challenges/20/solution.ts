const brackets: { [key: string]: string } = {
    ']': '[',
    '}': '{',
    ')': '('
}

export const isValid = (s: string): boolean => {
    const stack: string[] = []
    const chars = s.split('')

    for (const char of chars) {
        if (isClosing(char)) {
            const opening = stack.pop()

            if (brackets[char] !== opening) { return false }
        } else { stack.push(char) }
    }

    return stack.length === 0
};

const isClosing = (s: string): boolean => {
    return brackets.hasOwnProperty(s)
};