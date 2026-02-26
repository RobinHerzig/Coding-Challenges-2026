// Find minimum in rotated sorted array. (Binary search)

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] <= nums.at(-1)) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return nums[left];
}

console.log(findMin([3, 4, 5, 1, 2]), 1);
console.log(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
console.log(findMin([11, 13, 15, 17]), 11);
console.log(findMin([3, 1, 2]), 1);
console.log(findMin([5, 1, 2, 3, 4]), 1);
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// nums: number[]. 1 <= nums.length <= 5000. -5000 <= nums[i] <= 5000. All integers are unique.
// Return the minimum element of the sorted array in O(log n) time complexity.