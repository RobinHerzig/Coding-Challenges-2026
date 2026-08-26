// Word Search. (Backtracking)

function exist(board: string[][], word: string): boolean {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // Iterate each cell of the graph.
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const letter = board[i][j];
      const letterMatch = letter === word[0];

      if (letterMatch) {
        const result = dfs(i, j, 0);

        if (result) {
          return true;
        }
      }
    }
  }

  function dfs(i: number, j: number, k: number): boolean {
    // Base case
    if (k === word.length - 1) {
      return true;
    }

    // Recursive case
    board[i][j] = "#";

    for (const [x, y] of directions) {
      const isCell = board[i + x] && board[i + x][j + y];

      if (!isCell) {
        continue;
      }

      const letter = board[i + x][j + y];
      const letterMatch = letter === word[k + 1];

      if (letterMatch) {
        const result = dfs(i + x, j + y, k + 1);

        if (result) {
          return true;
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
