// Max area of island. (Graph) (Depth-first search)

function maxAreaOfIsland(grid: number[][]): number {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const isIsland = grid[i][j];

      if (isIsland) {
        const cur = dfs(i, j);
        maxArea = Math.max(maxArea, cur);
      }
    }
  }

  // Recursion
  function dfs(i: number, j: number): number {
    const isIsland = grid[i][j];

    if (!isIsland) {
      return 0;
    }

    grid[i][j] = 0;
    let area = 1;

    for (const [x, y] of directions) {
      const isCell = grid[i + x] && grid[i + x][j + y];
      const isIsland = isCell && grid[i + x][j + y] === 1;

      if (isIsland) {
        area += dfs(i + x, j + y);
      }
    }

    return area;
  }

  return maxArea;
}

console.log(
  maxAreaOfIsland([
    [0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1],
  ]),
  6,
);
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]), 0);
// https://leetcode.com/problems/max-area-of-island/

// grid: number[][]. 1 <= grid.length <= 50. 1 <= grid[i].length <= 50. Grid[i][j] is 0 or 1.
// Return the size of the largest island, or 0.
