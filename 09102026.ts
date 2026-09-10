// Dutch national flag problem. (Array)

function sortColors(nums: number[]): void {
  function sortColors(nums: number[]): void {
    let low = 0;
    let high = nums.length - 1;

    for (let i = 0; i <= high; i++) {
      const num = nums[i];

      // Move 0 to the beginning.
      if (num === 0) {
        [nums[low], nums[i]] = [nums[i], nums[low]];
        low++;
      }

      // Move 2 to the end.
      if (num === 2) {
        [nums[high], nums[i]] = [nums[i], nums[high]];
        high--;
        i--;
      }
    }

    return;
  }
}

console.log(sortColors([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]);
console.log(sortColors([2, 0, 1]), [0, 1, 2]);
// https://leetcode.com/problems/sort-colors/

// nums: number[]. 1 <= nums.length <= 300. nums[i] is either 0, 1, or 2.
// Sort nums in a single pass. O(N) time complexity and O(1) space complexity.
