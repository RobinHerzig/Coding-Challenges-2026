// Return all possible subsets. (Backtracking)

function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  // Backtracking algorithm
  (function dfs(subset: number[], i: number): void {
    // Base case
    if (i >= nums.length) {
      result.push([...subset]);
      return undefined;
    }

    // Recursive case
    subset.push(nums[i]);
    dfs(subset, i + 1);

    subset.pop();
    dfs(subset, i + 1);
  })([], 0);

  return result;
}

console.log(subsets([1, 2, 3]), [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
console.log(subsets([0]), [[], [0]]);
// https://leetcode.com/problems/subsets/

// nums: number[]. 1 <= nums.length <= 10. -10 <= nums[i] <= 10. All numbers are unique.
// Return an array of all possible subsets. Do not include duplicate sets.
