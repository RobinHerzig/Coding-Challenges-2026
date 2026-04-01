// Largest rectangle in histogram. (Monotonic stack)

function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length + 1; i++) {
    const height = heights[i] ?? 0; // Iterate "heights.length + 1" and set undefined elem to 0 to calculate last remaining rectangle.

    while (height < heights[stack.at(-1)]) {
      const j = stack.at(-2) ?? -1; // Left boundary. -2 represents floor of current rectangle.

      const x = i - j - 1;
      const y = heights[stack.pop()];

      const area = x * y;
      maxArea = Math.max(maxArea, area);
    }

    stack.push(i);
  }

  return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
console.log(largestRectangleArea([2, 4]), 4);
// https://leetcode.com/problems/largest-rectangle-in-histogram/

// heights: number[]. 1 <= heights.length <= 10^5. 0 <= heights[i] <= 10^4.
// Return the area of the largest rectangle in the histogram.
// - A rectangle can be made up of multiple bars.
