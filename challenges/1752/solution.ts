export const check = (nums: number[], count: number = 0): boolean => {
    if (isSorted(nums)) {
        return true;
    } else if (count === nums.length) {
        return false;
    } else {
        let firstNum = nums.shift();
        nums = [...nums, firstNum];

        return check(nums, count + 1);
    }
};

export const isSorted = (nums: number[]): boolean => {
    let sorted = true;
    if (!nums.length) return sorted;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > nums[index + 1]) {
            sorted = false;
        }
    }
    return sorted;
}
