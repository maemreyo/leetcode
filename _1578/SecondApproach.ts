export function minCost(colors: string, neededTime: number[]): number {
    // Initialize a variable to store the total time and the max value
    let totalTime = 0, currMaxTime = 0;

    for (let i = 0; i < colors.length; i++) {
        // If the ballon is the first ballon of a group then set the max value to 0
        if (i > 0 && colors[i] !== colors[i - 1]) {
            currMaxTime = 0;
        }

        // Increase the totalTime by the smaller one
        // Update the max value by the larger one
        totalTime += Math.min(currMaxTime, neededTime[i]);
        currMaxTime  = Math.max(currMaxTime, neededTime[i]);
    }

    return totalTime;
};