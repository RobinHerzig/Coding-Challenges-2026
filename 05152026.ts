// 4sum.

function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];

  // Step 1: Sort nums.
  nums.sort((a, b) => a - b);

  // Step 2: Place i pointer.
  for (let i = 0; i < nums.length - 3; i++) {
    // Skip if value isn't unique.
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    // Step 3: Place j pointer.
    for (let j = i + 1; j < nums.length - 2; j++) {
      // Skip if value isn't unique.
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      // Step 4: Place k and l pointers.
      let k = j + 1;
      let l = nums.length - 1;

      // Two-pointer algorithm.
      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l];

        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          const set = [nums[i], nums[j], nums[k], nums[l]];
          result.push(set);

          k++;
          l--;

          // Skip if value isn't unique.
          while (nums[k] === nums[k - 1]) {
            k++;
          }

          // Skip if value isn't unique.
          while (nums[l] === nums[l + 1]) {
            l--;
          }
        }
      }
    }
  }

  return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0), [
  [-2, -1, 1, 2],
  [-2, 0, 0, 2],
  [-1, 0, 0, 1],
]);
console.log(fourSum([2, 2, 2, 2, 2], 8), [[2, 2, 2, 2]]);
console.log(fourSum([1000000000, 1000000000, 1000000000, 1000000000], -294967296), []);
// https://leetcode.com/problems/4sum/

// nums: number[]. 1 <= nums.length <= 200. -10^9 <= nums[i] <= 10^9.
// target: number. -10^9 <= target <= 10^9.
// Return an array of all the unique quadruplets that add to the target.
