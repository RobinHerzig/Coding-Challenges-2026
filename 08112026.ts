// Word Search. (Backtracking)

function exist(board: string[][], word: string): boolean {
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const visited = new Set<string>();
  let result = false;

  // Iterate each cell.
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];

      if (cell == word[0]) {
        visited.add(`${i},${j}`);
        const found = dfs(i, j, 1);

        if (found) {
          result = true;
        }

        visited.clear();
      }
    }
  }

  function dfs(i: number, j: number, k: number): boolean {
    // Base case
    if (k === word.length) {
      return true;
    }

    // Recursive case
    let found = false;

    for (const [x, y] of directions) {
      const isCell = board[i + x] !== undefined && board[i + x][j + y] !== undefined;
      const isSameLetter = isCell && board[i + x][j + y] === word[k];
      const isRevisit = visited.has(`${i + x},${j + y}`);

      if (isSameLetter && !isRevisit) {
        visited.add(`${i + x},${j + y}`);

        if (dfs(i + x, j + y, k + 1)) {
          found = true;
        }

        visited.delete(`${i + x},${j + y}`);
      }
    }

    return found;
  }

  return result;
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"), true);
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"), true);
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"), false);
// https://leetcode.com/problems/word-search/

// board: string[][]. 1 <= board.length <= 6. board[i].length = board.length. Uppercase letters.
// word: string. 1 <= word.length <= 15. Uppercase letters.
// Return true if the board contains the word. Each cell can only be used once, and can use any horizontal/vertical direction per turn.