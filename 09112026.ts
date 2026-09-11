// Dutch national flag problem. (Array)

function sortColors(nums: number[]): void {
  let beg = 0;
  let end = nums.length - 1;

  for (let i = 0; i <= end; i++) {
    const num = nums[i];

    // Move 0 to beginning.
    if (num === 0) {
      [nums[i], nums[beg]] = [nums[beg], nums[i]];
      beg++;
    }

    // Move 2 to end.
    if (num === 2) {
      [nums[i], nums[end]] = [nums[end], nums[i]];
      i--;
      end--;
    }
  }

  return;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]);
console.log(sortColors([2, 0, 1]), [0, 1, 2]);
// https://leetcode.com/problems/sort-colors/

// nums: number[]. 1 <= nums.length <= 300. nums[i] is either 0, 1, or 2.
// Sort nums in a single pass. O(N) time complexity and O(1) space complexity.
