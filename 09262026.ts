// Dutch national flag problem. (Array)

function sortColors(nums: number[]): void {
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i <= right; i++) {
    const num = nums[i];

    if (num === 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
    } else if (num === 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
      i--;
    }
  }

  return;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]);
console.log(sortColors([2, 0, 1]), [0, 1, 2]);
// https://leetcode.com/problems/sort-colors/

// nums: number[]. 1 <= nums.length <= 300. nums[i] is either 0, 1, or 2.
// Sort nums in a single pass. O(N) time complexity and O(1) space complexity.
