// Find the smallest letter greater than target. (Binary search)

function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (letters[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return letters[left] || letters[0];
}

console.log(nextGreatestLetter(["c", "f", "j"], "a"), "c");
console.log(nextGreatestLetter(["c", "f", "j"], "c"), "f");
console.log(nextGreatestLetter(["c", "f", "f", "f", "j"], "f"), "j");
console.log(nextGreatestLetter(["a", "x", "y", "y"], "z"), "a");
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

// letters: string[]. 2 <= letters.length <= 10^4. letters[i] is a lowercase English letter. Sorted in non-decreasing order.
// target: string. Lowercase English letter.
// Return the smallest letter that is lexicographically greater than target, or the first element if none exists.
