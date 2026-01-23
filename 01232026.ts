// Search insert index. (Binary search)

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return left;
}

console.log(searchInsert([2, 3, 4, 5, 6], 4), 2);
console.log(searchInsert([2, 3, 4, 5, 6], 1), 0);
console.log(searchInsert([2, 3, 4, 5, 6], 8), 5);
console.log(searchInsert([2], 2), 0);
// https://leetcode.com/problems/search-insert-position/

// nums: number[]. 1 <= nums.length <= 10^4. -10^4 <= nums[i] <= 10^4. Ascending order. Distinct integers.
// target: number. -10^4 <= target <= 10^4.
// Return the index of the target, or where it would be. Solve in O(logn) time.
