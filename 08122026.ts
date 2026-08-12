// Word Search. (Backtracking)

function exist(board: string[][], word: string): boolean {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  // Visit each cell
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }
  }

  function dfs(i: number, j: number, k: number): boolean {
    // Base cases
    if (k === word.length) {
      return true;
    }

    const isCell = board[i] && board[i][j];
    const isCorrectLetter = isCell && board[i][j] === word[k];

    if (!isCell || !isCorrectLetter) {
      return false;
    }

    // Recursive cases
    let result = false;

    board[i][j] = "#";

    for (const [x, y] of directions) {
      if (dfs(i + x, j + y, k + 1)) {
        result = true;
        break;
      }
    }

    board[i][j] = word[k];

    return result;
  }

  return false;
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"), true);
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"), true);
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"), false);
// https://leetcode.com/problems/word-search/

// board: string[][]. 1 <= board.length <= 6. board[i].length = board.length. Uppercase letters.
// word: string. 1 <= word.length <= 15. Uppercase letters.
// Return true if the board contains the word. Each cell can only be used once, and can use any horizontal/vertical direction per turn.
