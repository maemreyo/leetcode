export function minCost(colors: string, neededTime: number[]): number {
    // Initialize two pointers (left, right) and a variable for store the result
    let totalTime = 0, left = 0, right = 0;

    while (left < neededTime.length && right < neededTime.length) {
        let currTotal = 0;
        let currMax = 0;

        // Find all the balloons having the same color as the ballon indexed at `left`, record the total removal time
        while (right < neededTime.length && colors[left] === colors[right]) {
            currTotal += neededTime[right];
            currMax = Math.max(currMax, neededTime[right]);

            right++;
        }

        // Once we reach the end of the current group, add the cost of this group to total_time and reset two pointers
        totalTime += currTotal - currMax;
        left = right;
    }

    return totalTime;
};