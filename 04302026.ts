// Find the duplicate number. (Floyd's algorithm)

function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[nums[0]];

  // Iterate until both pointers land on same node.
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  let reset = 0;

  // Increment from beginning of list until pointers meet.
  while (reset !== slow) {
    slow = nums[slow];
    reset = nums[reset];
  }

  return reset;
}

console.log(findDuplicate([1, 3, 4, 2, 2]), 2);
console.log(findDuplicate([3, 1, 3, 4, 2]), 3);
console.log(findDuplicate([3, 3, 3, 3, 3]), 3);
// https://leetcode.com/problems/find-the-duplicate-number

// nums: number[]. 1 <= n <= 10^5. 1 <= nums[i] <= n + 1.
// Return the only integer that appears two or more times.
// - Don't modify nums and use constant space.
