var searchInsert = function (nums, target) {
    // if (target < nums[0]) return 0;
    // if (target > nums[nums.length - 1]) return nums.length;
    var low = 0;
    var high = nums.length - 1;
    while (high >= low) {
        var middle = Math.floor((low + high) / 2);
        var guess = nums[middle];
        if (guess < target) {
            low = middle + 1;
        }
        if (guess > target) {
            high = middle - 1;
        }
        if (guess === target)
            return middle;
    }
    return low;
};
// function searchInsert(nums: number[], target: number): number {
//   let start = 0;
//   let end = nums.length - 1;
//   while(end >= start){
//     var mid = Math.floor((start + end) / 2);
//     if(target < nums[mid]){
//       end = mid - 1;
//     }
//     if(target > nums[mid]){
//       start = mid + 1;
//     }
//     if(nums[mid] === target)
//     return mid; 
//   }
//   return start;
// };
var index = searchInsert([1, 3, 5, 6], 7);
console.log("index", index);
