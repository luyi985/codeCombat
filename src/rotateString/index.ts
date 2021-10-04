// Solution 1
function rotateString(s: string, goal: string, num: number = 0): boolean {
    if (s === goal) return true;
    if (num > s.split('').length - 1) return false;
    const sList = s.split('');
    const first = sList.shift();
    const newS = [...sList, first].join('');
    return rotateString(newS, goal, num + 1);
}
// Solution 2
function rotateString1(s: string, goal: string): boolean {
    if (s === goal) return true;

    for (let i = 0; i < s.length; i++) {
        const toMove = s.slice(0, i);
        const resetPart = s.slice(i);
        if (`${resetPart}${toMove}` === goal) return true;
    }

    return false;
}

console.log(rotateString1('abcde', 'cdeab'));
console.log(rotateString1('abcde', 'abced'));
