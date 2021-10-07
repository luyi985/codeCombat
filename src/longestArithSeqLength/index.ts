function longestArithSeqLength(nums: number[]): number {
    const diffs: number[] = [];
    const sorted = nums.sort((n1, n2) => n1 - n2);
    for (let i = 0; i < sorted.length - 1; i++) {
        diffs.unshift(sorted[i + 1] - sorted[i]);
    }

}
console.log(longestArithSeqLength([3, 6, 9, 12]));
console.log(longestArithSeqLength([9, 4, 7, 2, 10]));
console.log(longestArithSeqLength([24, 13, 1, 100, 0, 94, 3, 0, 3]));
