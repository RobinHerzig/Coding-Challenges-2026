// Find the duplicate number. (Floyd's algorithm)

function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  let slow2 = nums[0];

  while (slow !== slow2) {
    slow2 = nums[slow2];
    slow = nums[slow];
  }

  return slow;
}

console.log(findDuplicate([1, 3, 4, 2, 2]), 2);
console.log(findDuplicate([3, 1, 3, 4, 2]), 3);
console.log(findDuplicate([3, 3, 3, 3, 3]), 3);
// https://leetcode.com/problems/find-the-duplicate-number

// nums: number[]. 1 <= n <= 10^5. 1 <= nums[i] <= n + 1.
// Return the only integer that appears two or more times.
// - Don't modify nums and use constant space.
