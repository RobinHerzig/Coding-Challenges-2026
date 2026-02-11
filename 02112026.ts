// Find the duplicate number. (Floyd's algorithm)

function findDuplicate(nums: number[]): number {
  let fast = nums[0];
  let slow = nums[0];

  // Step 1: Find intersection between fast and slow pointers.
  do {
    fast = nums[nums[fast]];
    slow = nums[slow];
  } while (fast !== slow);

  // Step 2: Find intersection between fast pointer and beginning.
  slow = nums[0];

  while (fast !== slow) {
    fast = nums[fast];
    slow = nums[slow];
  }

  return fast;
}

console.log(findDuplicate([1, 3, 4, 2, 2]), 2);
console.log(findDuplicate([3, 1, 3, 4, 2]), 3);
console.log(findDuplicate([3, 3, 3, 3, 3]), 3);
// https://leetcode.com/problems/find-the-duplicate-number

// nums: number[]. 1 <= n <= 10^5. 1 <= nums[i] <= n + 1.
// Return the only integer that appears two or more times.
// - Don't modify nums and use constant space.
