// Combination sum II. (Backtracking)

function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);

  (function dfs(set: number[], sum: number, i: number): void {
    // Base case
    if (sum === target) {
      result.push([...set]);
      return undefined;
    }

    // Recursive case
    const candidate = candidates[i];

    if (i < candidates.length && sum + candidate <= target) {
      set.push(candidate);
      dfs(set, sum + candidate, i + 1);
      set.pop();
    }

    while (i < candidates.length && candidates[i] === candidate) {
      i++;
    }

    if (i < candidates.length) {
      dfs(set, sum, i);
    }

    return undefined;
  })([], 0, 0);

  return result;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8), [
  [1, 1, 6],
  [1, 2, 5],
  [1, 7],
  [2, 6],
]);
console.log(combinationSum2([2], 1), []);
console.log(combinationSum2([2, 5, 2, 1, 2], 5), [[1, 2, 2], [5]]);
// https://leetcode.com/problems/combination-sum-ii/

// candidates: number[]. 1 <= candidates.length <= 100. 2 <= candidates[i] <= 50. All elements are distinct.
// target: number. 1 <= target <= 30.
// Return an array of all unique number combinations that add to the target. Numbers can be used once per occurance.
