// Trapping rain water in elevation chart.

function trap(heights: number[]): number {
  const left = new Array(heights.length).fill(0);
  const right = new Array(heights.length).fill(0);
  let result = 0;

  // Step 1: Populate left-max array.
  for (let i = 0; i < left.length; i++) {
    let prev = left[i - 1] || 0;
    let height = heights[i];

    left[i] = Math.max(prev, height);
  }

  // Step 2: Populate right-max array.
  for (let i = right.length - 1; i >= 0; i--) {
    let prev = right[i + 1] || 0;
    let height = heights[i];

    right[i] = Math.max(prev, height);
  }

  // Step 3: Count difference of values for each unit.
  for (let i = 0; i < heights.length; i++) {
    const min = Math.min(left[i], right[i]);
    const difference = min - heights[i];

    result += difference;
  }

  return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(trap([4, 2, 0, 3, 2, 5]), 9);
// https://leetcode.com/problems/trapping-rain-water/

// heights: number[]. 1 <= heights.length <= 2*10^4. 0 <= heights[i] <= 10^5.
// Return the amount of rain water collected in the dips of the elevation chart.
