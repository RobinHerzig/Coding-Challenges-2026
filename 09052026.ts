// Remove elements from an array in-place. (Array)

function removeElement(nums: number[], val: number): number {
    let result = nums.length;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num === val) {
            nums[i] = -1;
            result--;
        }
    }

    nums.sort((a, b) => b - a);
    return result;
};

console.log(removeElement([3, 2, 2, 3], 3), 2);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
console.log(removeElement([1, 1, 1, 1], 1), 0);
console.log(removeElement([], 1), 0);
// https://leetcode.com/problems/remove-element/

// nums: number[]. 0 <= nums.length <= 100. 0 <= nums[i] <= 50.
// val: number. 0 <= val <= 100.
// Remove all instances of val from nums, and return the new array length.