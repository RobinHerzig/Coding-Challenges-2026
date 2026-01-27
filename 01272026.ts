// Largest sum contiguous subarray. (Dynamic programming) (Kadane’s algorithm)

function maxSubArray(nums: number[]): number {
  let currSum = nums[0];
  let maxSum = currSum;

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSubArray([5, 4, -1, 7, 8]), 23);
console.log(maxSubArray([1]), 1);
console.log(maxSubArray([-1]), -1);
// https://leetcode.com/problems/maximum-subarray/

// nums: number[]. 1 <= nums.length <= 10^5. -10^4 <= nums[i] <= -10^4.
// Find the subarray with the largest sum, and return the sum.
