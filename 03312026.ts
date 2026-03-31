// Max area of island. (Graph) (Breadth-first search)

function maxAreaOfIsland(grid: number[][]): number {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const queue: number[][] = []; // [[i, j], [i, j], ...]
  let maxArea = 0;

  // Step 1: Iterate through each cell of the graph.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Step 2: If cell is island, run bfs algorithm.
      const isIsland = grid[i][j];

      if (isIsland) {
        queue.push([i, j]);
        grid[i][j] = 0;
        maxArea = Math.max(maxArea, bfs());
      }
    }
  }

  // Step 3: Bfs algorithm.
  function bfs(): number {
    let area = 1;

    while (queue.length) {
      const length = queue.length;

      for (let k = 0; k < length; k++) {
        const [i, j] = queue.pop();

        for (const [x, y] of directions) {
          const isCell = grid[i + x] && grid[i + x][j + y];
          const isIsland = isCell && grid[i + x][j + y] === 1;

          if (isIsland) {
            queue.push([i + x, j + y]);
            grid[i + x][j + y] = 0;
            area++;
          }
        }
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
