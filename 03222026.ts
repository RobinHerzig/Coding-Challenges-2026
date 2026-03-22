// Largest sum contiguous subarray. (Dynamic programming) (Kadane’s algorithm)

function maxSubArray(nums: number[]): number {
  let curr = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(curr + nums[i], nums[i]);
    max = Math.max(max, curr);
  }

  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSubArray([5, 4, -1, 7, 8]), 23);
console.log(maxSubArray([1]), 1);
console.log(maxSubArray([-1]), -1);
// https://leetcode.com/problems/maximum-subarray/

// nums: number[]. 1 <= nums.length <= 10^5. -10^4 <= nums[i] <= -10^4.
// Find the subarray with the largest sum, and return the sum.