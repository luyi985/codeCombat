export const lengthOfLongestSubstring = (s: string): number => {
    // Solution 1: bad performance
    let max = s.length;
    while (max > 0) {
        for (let i = 0; i + max <= s.length; i++) {
            if (new Set(s.substring(i, i + max)).size === max) {
                return max;
            }
        }
        max -= 1;
    }
    return max;
};
