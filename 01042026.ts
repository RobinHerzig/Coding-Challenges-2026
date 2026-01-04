// Next greater element I. (Monotonic stack)

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>(); // <num1, num2>
  nums1.forEach((num1) => map.set(num1, -1));
  const stack = [];

  for (const num2 of nums2) {
    while (num2 > stack.at(-1)) {
      const prev = stack.pop()!;

      if (map.has(prev)) {
        map.set(prev, num2);
      }
    }

    stack.push(num2);
  }

  return [...map.values()];
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]);
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]), [3, -1]);
// https://leetcode.com/problems/next-greater-element-i/

// nums1: number[]. 1 <= nums1.length <= 1000. 0 <= nums1[i] <= 10^4. All integers are unique. Driving array.
// nums2: number[]. 1 <= nums2.length <= 1000. 0 <= nums2[i] <= 10^4. All integers are unique.
// Map each value from nums1 to nums2, then return the next greater nums2 value, or -1 if none exists.
