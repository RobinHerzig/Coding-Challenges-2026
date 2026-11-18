// Word Search. (Backtracking)

function exist(board: string[][], word: string): boolean {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const height = board.length;
  const width = board[0].length;

  // Visit each cell.
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const firstLetter = board[i][j];

      if (firstLetter === word[0]) {
        const result = dfs(i, j, 0);

        if (result) {
          return true;
        }
      }
    }
  }

  // DFS
  function dfs(i: number, j: number, k: number): boolean {
    // Base case
    if (k === word.length - 1) {
      return true;
    }

    // Recursive case
    board[i][j] = "#";

    for (const [x, y] of directions) {
      const isValidHeight = i + x >= 0 && i + x < height;
      const isValidWidth = j + y >= 0 && j + y < width;
      const isCell = isValidHeight && isValidWidth;

      if (isCell) {
        const nextLetter = board[i + x][j + y];

        if (nextLetter === word[k + 1]) {
          const result = dfs(i + x, j + y, k + 1);

          if (result) {
            return true;
          }
        }
      }
    }

    board[i][j] = word[k];

    return false;
  }

  return false;
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"), true);
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"), true);
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"), false);
// https://leetcode.com/problems/word-search/

// board: string[][]. 1 <= board.length <= 6. board[i].length = board.length. Uppercase letters.
// word: string. 1 <= word.length <= 15. Uppercase letters.
// Return true if the board contains the word.
// Each cell can only be used once. The pointer can move any horizontal/vertical direction per turn.
