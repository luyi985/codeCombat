// const findNextIndex = (list: number[], currentIndex: number): number => {
//     if (currentIndex > list.length - 1) return NaN;
//     for (let i = currentIndex; i < list.length; i++) {
//         if (list[i] > list[currentIndex] && i !== currentIndex) {
//             return i;
//         }
//     }
//     return NaN;
// };

// const lts = (list: number[], n: number): number => {
//     if (n > list.length - 1) return 1;
//     let len = 1;
//     let nextIndex = n;
//     while ((nextIndex = findNextIndex(list, nextIndex))) {
//         len += 1;
//         console.log(len);
//     }
//     return len;
// };

// const LISsolveDP = (list: number[]): number => {
//     let max = 0;

//     for (let i = 0; i < list.length; i++) {
//         max = Math.max(max, lts(list, i));
//     }

//     return max;
// };

/**
 * Dynamic programming approach to find longest increasing subsequence.
 * Complexity: O(n * n)
 *
 * @param {number[]} arr
 * @return {number}
 */
//https://algodaily.com/challenges/longest-increasing-subsequence
function LISsolveDP(arr: number[]) {
    // Create an array for longest increasing substrings lengths and
    // fill it with 1s. This means that each element of the arr
    // is itself a minimum increasing subsequence.
    const lengthsArr = Array(arr.length).fill(1);

    let prevElIdx = 0;
    let currElIdx = 1;

    while (currElIdx < arr.length) {
        if (arr[prevElIdx] < arr[currElIdx]) {
            // If current element is bigger then the previous one. then
            // it is a part of increasing subsequence where length is
            // by 1 bigger than the length of increasing subsequence
            // for the previous element.
            const newLen = lengthsArr[prevElIdx] + 1;
            if (newLen > lengthsArr[currElIdx]) {
                // Increase only if previous element would give us a
                // bigger subsequence length then we already have for
                // current element.
                lengthsArr[currElIdx] = newLen;
            }
        }

        // Move previous element index right.
        prevElIdx += 1;

        // If previous element index equals to current element index then
        // shift current element right and reset previous element index to zero.
        if (prevElIdx === currElIdx) {
            currElIdx += 1;
            prevElIdx = 0;
        }
    }

    // Find the largest element in lengthsArr, as it
    // will be the biggest length of increasing subsequence.
    let longestIncreasingLength = 0;

    for (let i = 0; i < lengthsArr.length; i += 1) {
        if (lengthsArr[i] > longestIncreasingLength) {
            longestIncreasingLength = lengthsArr[i];
        }
    }

    return longestIncreasingLength;
}

//console.log(LISsolveDP([1, 1, 1])); //1
console.log(LISsolveDP([0, 1, 0, 3, 2, 3])); // 4
//console.log(LISsolveDP([1, 5, 2, 7, 3])); //3

//console.log(LISsolveDP([13, 1, 3, 4, 8, 4])); //4

//console.log(LISsolveDP([13, 1, 3, 4, 8, 19, 17, 8, 0, 20, 14])); // 6
