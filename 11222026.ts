// Minimum cost to climb stairs. (Dynamic programming) (Top-down)

function minCostClimbingStairs(cost: number[]): number {
  const memo: number[] = [];

  function dfs(i: number): number {
    // Base case
    if (i >= cost.length) {
      return 0;
    }

    if (typeof memo[i] === "number") {
      return memo[i];
    }

    // Recursive case
    const cur = cost[i] || 0;
    const one = dfs(i + 1);
    const two = dfs(i + 2);

    memo[i] = cur + Math.min(one, two);
    return memo[i];
  }

  return dfs(-1);
}

console.log(minCostClimbingStairs([10, 15, 20]), 15);
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6);
// https://leetcode.com/problems/min-cost-climbing-stairs/

// cost: number[]. 2 <= cost.length <= 1000. 0 <= cost[i] <= 999.
// Return the minimum cost to reach the top of the staircase (position above cost.length).
// - Can climb one or two steps per landing.
