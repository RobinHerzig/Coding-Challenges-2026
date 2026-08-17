// Generate all valid combinations of parentheses. (Backtracking)

function generateParenthesis(num: number): string[] {
  const result: string[] = [];

  function dfs(set: string[], open: number, close: number): void {
    if (set.length === num * 2) {
      result.push(set.join(""));
      return;
    }

    if (open > close) {
      set.push(")");
      dfs(set, open, close + 1);
      set.pop();
    }

    if (open < num) {
      set.push("(");
      dfs(set, open + 1, close);
      set.pop();
    }
  }

  dfs(["("], 1, 0);
  return result;
}

console.log(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(generateParenthesis(1), ["()"]);
// https://leetcode.com/problems/generate-parentheses/

// num: number. 1 <= num <= 8.
// Return an array of all valid parentheses using num pairs in any order.
