// Subsets II. (Backtracking)

function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  function dfs(set: number[], i: number): void {
    result.push([...set]);

    for (let j = i; j < nums.length; j++) {
      const num = nums[j];

      if (j > i && num === nums[j - 1]) {
        continue;
      }

      set.push(num);
      dfs(set, j + 1);
      set.pop();
    }
  }

  dfs([], 0);
  return result;
}

console.log(subsetsWithDup([1, 2, 2]), [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]);
console.log(subsetsWithDup([0]), [[], [0]]);
// https://leetcode.com/problems/subsets-ii/

// nums: number[]. 1 <= nums.length <= 10. -10 <= nums[i] <= 10.
// Return an array of all possible subsets, including partial or empty subsets. Do not include duplicate sets.
