function majorityElement(nums: number[]): number[] {
    if (nums.length <= 2) return Array.from(new Set(nums));
    const results: Set<number> = new Set();
    const counter: Map<number, number> = new Map();
    const minToApperar = nums.length / 3;
    for (let current of nums) {
        if (results.has(current)) {
            continue;
        }
        counter.set(current, (counter.get(current) || 0) + 1);
        if ((counter.get(current) as number) > minToApperar) {
            results.add(current);
        }
    }
    return Array.from(results);
}

console.log(majorityElement([3, 2, 3, 2]));
