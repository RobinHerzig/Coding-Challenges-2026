// Minimum cost to climb stairs. (Dynamic programming) (Bottom-up)

function minCostClimbingStairs(cost: number[]): number {
  const dp = new Array(cost.length + 1).fill(0);

  for (let i = 2; i <= cost.length; i++) {
    const one = cost[i - 1] + dp[i - 1];
    const two = cost[i - 2] + dp[i - 2];
    dp[i] = Math.min(one, two);
  }

  return dp.at(-1);
}

console.log(minCostClimbingStairs([10, 15, 20]), 15);
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6);
// https://leetcode.com/problems/min-cost-climbing-stairs/

// cost: number[]. 2 <= cost.length <= 1000. 0 <= cost[i] <= 999.
// Return the minimum cost to reach the top of the staircase (position above cost.length).
// - Can climb one or two steps per landing.
