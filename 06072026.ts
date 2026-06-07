// Rotting oranges. (Graph) (Breadth-first search)

function orangesRotting(grid: number[][]): number {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const rottens: [number, number][] = [];
  let cycles = 0;
  let fresh = 0;

  // Step 1: Increment each cell.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const isFresh = grid[i][j] === 1;
      const isRotten = grid[i][j] === 2;

      if (isFresh) {
        fresh++;
      }

      if (isRotten) {
        rottens.push([i, j]);
      }
    }
  }

  if (fresh === 0) {
    return cycles;
  }

  // Step 2: BFS for each rotten cell.
  while (rottens.length) {
    const length = rottens.length;
    cycles++;

    for (let k = 0; k < length; k++) {
      const [i, j] = rottens.shift();

      for (const [x, y] of directions) {
        const isCell = grid[i + x] && grid[i + x][j + y];
        const isFresh = isCell && grid[i + x][j + y] === 1;

        if (isFresh) {
          grid[i + x][j + y] = 2;
          fresh--;

          rottens.push([i + x, j + y]);
        }
      }
    }
  }

  return fresh === 0 ? cycles - 1 : -1;
}

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]), 4);
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]), -1);
console.log(orangesRotting([[0, 2]]), 0);
// https://leetcode.com/problems/rotting-oranges

// Grid: number[][]. 1 <= grid.length <= 10. 1 <= grid[0].length <= 10. grid[i][j] is 0, 1, or 2.
// Return the number of cycles for all fruit to become rotten.
// - 0 represents empty cell.
// - 1 represents fresh orange.
// - 2 represents rotten orange.
// - Each cycle, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.