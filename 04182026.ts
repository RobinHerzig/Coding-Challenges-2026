// Generate all valid combinations of parentheses. (Backtracking)

function generateParenthesis(num: number): string[] {
  const result: string[] = [];

  (function dfs(set: string, open: number, close: number): void {
    // Base case
    if (set.length >= num * 2) {
      result.push(set);
      return undefined;
    }

    // Recursive cases
    if (open < num) {
      dfs(set + "(", open + 1, close);
    }

    if (close < open) {
      dfs(set + ")", open, close + 1);
    }

    return undefined;
  })("(", 1, 0);

  return result;
}

console.log(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(generateParenthesis(1), ["()"]);
// https://leetcode.com/problems/generate-parentheses/

// num: number. 1 <= num <= 8.
// Return an array of all valid parentheses using num pairs in any order.
