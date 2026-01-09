// Largest sum contiguous subarray. (Dynamic programming) (Kadane’s algorithm)

function maxSubArray(nums: number[]): number {
  let currMax = nums[0];
  let max = currMax;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    currMax = Math.max(currMax + num, num);
    max = Math.max(max, currMax);
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
