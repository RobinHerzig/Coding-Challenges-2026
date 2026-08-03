// Max area of island. (Graph) (Breadth-first search)

function maxAreaOfIsland(grid: number[][]): number {
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cell = grid[i][j];
      const isIsland = cell;

      if (isIsland) {
        const curr = bfs(i, j);
        max = Math.max(max, curr);
      }
    }
  }

  function bfs(i: number, j: number): number {
    let area = 0;
    let queue: number[][] = [];
    grid[i][j] = 0;

    queue.push([i, j]);

    while (queue.length) {
      const length = queue.length;
      area += length;

      for (let k = 0; k < length; k++) {
        const [i, j] = [...queue.shift()!];

        for (const [x, y] of directions) {
          const isIsland = grid[i + x] && grid[i + x][j + y];

          if (isIsland) {
            queue.push([i + x, j + y]);
            grid[i + x][j + y] = 0;
          }
        }
      }
    }

    return area;
  }

  return max;
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
