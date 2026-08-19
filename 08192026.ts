// Return all possible subsets. (Backtracking)

function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  function dfs(set: number[], i: number): void {
    result.push([...set]);

    for (let j = i; j < nums.length; j++) {
      const num = nums[j];

      set.push(num);
      dfs(set, j + 1);
      set.pop();
    }
  }

  dfs([], 0);
  return result;
}

console.log(subsets([1, 2, 3]), [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
console.log(subsets([0]), [[], [0]]);
// https://leetcode.com/problems/subsets/

// nums: number[]. 1 <= nums.length <= 10. -10 <= nums[i] <= 10. All numbers are unique.
// Return an array of all possible subsets. Do not include duplicate sets.
