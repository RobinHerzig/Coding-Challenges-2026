// Word Search. (Backtracking)

function exist(board: string[][], word: string): boolean {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  // Iterate each cell
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const isMatchingLetter = board[i][j] === word[0];

      if (isMatchingLetter) {
        const isMatchingWord = dfs(i, j, 0);

        if (isMatchingWord) {
          return true;
        }
      }
    }
  }

  // DFS to complete word.
  function dfs(i: number, j: number, k: number): boolean {
    // Base case
    if (k === word.length - 1) {
      return true;
    }

    // Recursive case
    board[i][j] = "#";

    for (const [x, y] of directions) {
      const isCell = i + x < board.length && i + x >= 0 && j + y < board[i].length && j + y >= 0;
      const isMatchingLetter = isCell && board[i + x][j + y] === word[k + 1];

      if (isMatchingLetter) {
        const isMatchingWord = dfs(i + x, j + y, k + 1);

        if (isMatchingWord) {
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
