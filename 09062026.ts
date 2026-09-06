// Return the majority element. (Array)

function majorityElement(nums: number[]): number {
  const map = new Map<number, number>();

  // Populate map.
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Populate result.
  let result = -1;
  let cache = -1;

  for (const [num, count] of map) {
    if (count > cache) {
      result = num;
      cache = count;
    }
  }

  return result;
}

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
// https://leetcode.com/problems/majority-element/

// nums: number[]. 1 <= nums.length <= 5*10^4. -10^9 <= nums[i] <= 10^9;
// Return the majority element of the array.
