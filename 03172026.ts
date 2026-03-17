// Count subarrays where max element appears at least K times. (Sliding window)

function countSubarrays(nums: number[], k: number): number {
  const maxElem = Math.max(...nums);
  let maxCount = 0;
  let result = 0;
  let left = 0;
  let right = 0;

  // Step 1: Sliding window algorithm.
  while (right < nums.length) {
    // Cache right-pointer value.
    if (nums[right] === maxElem) {
      maxCount++;
    }

    // Decache and increment left pointer.
    while (maxCount >= k) {
      // Check window condition.
      result += nums.length - right + 1;

      if (nums[left] === maxElem) {
        maxCount--;
      }

      left++;
    }

    // Increment right pointer.
    right++;
  }

  return result;
}

console.log(countSubarrays([1, 3, 2, 3, 3], 2), 6); // The max value, 3, appears at least twice in 6 subarrays.
console.log(countSubarrays([1, 4, 2, 1], 3), 0);
// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/

// nums: number[]. 1 <= nums.length <= 10^5. 1 <= nums[i] <= 10^6.
// k: number. 1 <= k <= 10^5.
// Return the number of subarrays where the maximum element of nums appears at least k times.