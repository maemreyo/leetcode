export const mySqrt = (x: number): number => {
  if (x === 0 || x === 1) return x;
  let startIdx: number = 1;
  while (startIdx * startIdx <= x) {
    if (startIdx * startIdx === x) return startIdx;
    startIdx += 1;
    if (startIdx * startIdx > x) {
      startIdx -= 1;
      break;
    }
  }
  return startIdx;
}