export const calculate = (input: number[]): number => {
    let max: number = 0;
    for (let b = 0; b < input.length - 1; b++) {
        const p = Math.max(...input.slice(b + 1)) - input[b];
        max = p > max ? p : max;
    }
    return max;
};
