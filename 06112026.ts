// Combination sum. (Backtracking)

function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  candidates = candidates.sort((a, b) => a - b);

  (function dfs(set: number[], sum: number, i: number): void {
    if (sum === target) {
      result.push([...set]);
      return undefined;
    }

    for (let j = i; j < candidates.length; j++) {
      const candidate = candidates[j];

      if (sum + candidate > target) {
        break;
      }

      set.push(candidate);
      dfs([...set], sum + candidate, j);
      set.pop();
    }
  })([], 0, 0);

  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7), [[2, 2, 3], [7]]);
console.log(combinationSum([2], 1), []);
// https://leetcode.com/problems/combination-sum/

// candidates: number[]. 1 <= candidates.length <= 30. 2 <= candidates[i] <= 40. All elements are distinct.
// target: number. 1 <= target <= 40.
// Return an array of all unique number combinations that add to the target. Numbers can be used more than once.
