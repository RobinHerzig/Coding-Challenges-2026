// Return all possible subsets. (Backtracking)

function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  (function dfs(set: number[], i): void {
    // Base case
    if (i >= nums.length) {
      result.push(set);

      return undefined;
    }

    // Recursive case
    dfs([...set], i + 1);
    set.push(nums[i]);
    dfs([...set], i + 1);

    return undefined;
  })([], 0);

  return result;
}

console.log(subsets([1, 2, 3]), [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
console.log(subsets([0]), [[], [0]]);
// https://leetcode.com/problems/subsets/

// nums: number[]. 1 <= nums.length <= 10. -10 <= nums[i] <= 10. All numbers are unique.
// Return an array of all possible subsets. Do not include duplicate sets.
