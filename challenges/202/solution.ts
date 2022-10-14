export function isHappy(n: number, dict: {} = {}): boolean {
    let num = n.toString().split('');
    let nums = num.map((x) => parseInt(x, 10));
    
    let sum = 0;
    nums.forEach((x) => sum += x * x);
    
    if (dict[sum]) return false;
    if (sum === 1) return true;
    
    dict[sum] = 1;
    
    return isHappy(sum, dict);
};