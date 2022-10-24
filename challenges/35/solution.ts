export const searchInsert = (nums: number[], target: number): number => {
  let low = 0;
  let high = nums.length - 1;

  while (high >= low) {
    let middle = Math.floor((low + high)/2);
    let guess = nums[middle];

    if (guess < target) {
      low = middle + 1;
    }
    if (guess > target) {
      high = middle - 1;
    }
    if (guess === target) return middle;
  }

  return low;
};

const index = searchInsert([1, 3, 5, 6], 7);

console.log("index", index);