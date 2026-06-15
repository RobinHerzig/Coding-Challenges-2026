// Longest consecutive sequence in unsorted array.

function longestConsecutive(nums: number[]): number {
  const set = new Set<number>(nums);
  let result = 0;

  for (const num of set) {
    let cur = 1;

    if (set.has(num - 1)) {
      continue;
    }

    while (set.has(num + cur)) {
      cur++;
    }

    result = Math.max(result, cur);
  }

  return result;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]), 4); // [1, 2, 3, 4]
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]), 4); // [1, 2, 3, 4]
console.log(longestConsecutive([]), 0);
// https://leetcode.com/problems/longest-consecutive-sequence/

// nums: number[]. 0 <= nums.length <= 10^5. -10^9 <= nums[i] <= 10^9. Unsorted.
// Return the length of the longest consecutive sequence. Complexity must be O(n).
