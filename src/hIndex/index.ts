function hIndex(citations: number[]): number {
    const sorted = citations.sort((c1, c2) => c2 - c1);
    return sorted.reduce((acc, current, index) => (current > index ? index + 1 : acc), 0);
}

console.log(hIndex([3, 0, 6, 1, 5])); // 6,5,3,1,0
console.log(hIndex([1, 3, 1]));
