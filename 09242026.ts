// Rotting oranges. (Graph) (Breadth-first search)

function orangesRotting(grid: number[][]): number {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let rotten: number[][] = [];
  let fresh = 0;
  let cycles = -1;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const isRotten = grid[i][j] === 2;
      const isFresh = grid[i][j] === 1;

      if (isRotten) {
        rotten.push([i, j]);
      } else if (isFresh) {
        fresh++;
      }
    }
  }

  if (!fresh) {
    return 0;
  }

  while (rotten.length) {
    const length = rotten.length;
    cycles++;

    for (let i = 0; i < length; i++) {
      const [i, j] = rotten.shift();

      for (const [x, y] of directions) {
        const isCell = grid[i + x] && grid[i + x][j + y];
        const isFresh = isCell && grid[i + x][j + y] === 1;

        if (isFresh) {
          rotten.push([i + x, j + y]);
          grid[i + x][j + y] = 2;
          fresh--;
        }
      }
    }
  }

  return fresh === 0 ? cycles : -1;
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
