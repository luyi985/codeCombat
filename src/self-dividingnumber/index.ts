function selfDividingNumbers(left: number, right: number): number[] {
    const result: number[] = [];
    for (let current = left; current <= right; current++) {
        const digits = `${current}`.split('');
        if (digits.some((d) => d === '0')) {
            continue;
        }

        if (digits.every((d) => current % parseInt(d) === 0)) {
            result.push(current);
        }
    }
    return result;
}
console.log(selfDividingNumbers(1, 22));
// [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(47, 85));
// [48,55,66,77]
