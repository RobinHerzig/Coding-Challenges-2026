// Combination sum II. (Backtracking)

function combinationSum2(candidates: number[], target: number): number[][] {
  let result: number[][] = [];
  candidates.sort((a, b) => a - b);

  (function dfs(set: number[], sum: number, i: number): void {
    if (sum === target) {
      result.push([...set]);
      return undefined;
    }

    for (let j = i; j < candidates.length; j++) {
      const prevCandidate = candidates[j - 1];
      const candidate = candidates[j];

      // Skip duplicate candidates.
      if (j !== i && candidate === prevCandidate) {
        continue;
      }

      // Stop iterating when the total sum becomes bigger than the target.
      if (sum + candidate > target) {
        break;
      }

      set.push(candidate);
      dfs(set, sum + candidate, j + 1);
      set.pop();
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
