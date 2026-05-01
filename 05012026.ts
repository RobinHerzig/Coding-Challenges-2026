// Largest rectangle in histogram. (Monotonic stack)

function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let result = 0;

  for (let i = 0; i < heights.length + 1; i++) {
    const height = heights[i] || 0;

    while (height < heights[stack.at(-1)!]) {
      const j = stack.at(-2) ?? -1; // Lower bound (exclusive)

      const x = i - j - 1;
      const y = heights[stack.pop()!];
      const area = x * y;

      result = Math.max(result, area);
    }

    stack.push(i);
  }

  return result;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
console.log(largestRectangleArea([2, 4]), 4);
// https://leetcode.com/problems/largest-rectangle-in-histogram/

// heights: number[]. 1 <= heights.length <= 10^5. 0 <= heights[i] <= 10^4.
// Return the area of the largest rectangle in the histogram.
// - A rectangle can be made up of multiple bars.
