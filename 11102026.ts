// Count number of islands. (Graph)

function numIslands(grid: string[][]): number {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let result = 0;

  // Iterate each cell
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const isIsland = grid[i][j] === "1";

      if (isIsland) {
        result++;
        dfs(i, j);
      }
    }
  }

  // Explore each island
  function dfs(i: number, j: number): void {
    // Base case
    if (grid[i][j] !== "1") {
      return;
    }

    // Recursive case
    grid[i][j] = "2";

    for (const [x, y] of directions) {
      const isCell = grid[i + x] && grid[i + x][j + y];

      if (isCell) {
        dfs(i + x, j + y);
      }
    }
  }

  return result;
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
  1,
);
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
  2,
);
// https://leetcode.com/problems/number-of-islands/

// grid: string[][]. 1 <= grid.length <= 300. 1 <= grid.length[i] <= 300. grid[i][j] is '0' or '1'.
// Return the total number of islands. Connected islands touch along the side, but not diagonally.
