// Permutations. (Backtracking)

function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(i: number): void {
    if (i === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  dfs(0);
  return result;
}

console.log(permute([1, 2, 3]), [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
]);
console.log(permute([0, 1]), [
  [0, 1],
  [1, 0],
]);
console.log(permute([1]), [[1]]);

// nums: number[]. 1 <= nums.length <= 6. -10 <= nums[i] <= 10. All integers are unique.
// Return an array of all possible permutations.
