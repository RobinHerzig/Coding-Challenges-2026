// Word Search. (Backtracking)

function exist(board: string[][], word: string): boolean {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

  // Iterate each cell of the graph
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      const matchingLetter = cell === word[0];

      if (matchingLetter) {
        let matchingWord = dfs(i, j, 1);

        if (matchingWord) {
          return true;
        }
      }
    }
  }

  // Search for subsequent letters
  function dfs(i: number, j: number, index: number): boolean {
    if (index === word.length) {
      return true;
    }

    board[i][j] = "#";

    for (const [x, y] of directions) {
      const isCellX = i + x >= 0 && i + x < board.length;
      const isCellY = isCellX && j + y >= 0 && j + y < board[i + x].length;
      const cell = isCellX && isCellY ? board[i + x][j + y] : null;
      const matchingLetter = cell === word[index];

      if (matchingLetter) {
        const result = dfs(i + x, j + y, index + 1);

        if (result) {
          return true;
        }
      }
    }

    board[i][j] = word[index - 1];
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
