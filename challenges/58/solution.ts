export const lengthOfLastWord = (s: string): number => {
  let countSpaces = 0;
  const trimmed = s.trim();

  for (let index = trimmed.length; index > 0; index--) {
    if (trimmed[index] === " ") {
      countSpaces += 1;
    }
    if (countSpaces === 1) {
      return trimmed.length - index - countSpaces;
    }
  }
  return trimmed.length
};