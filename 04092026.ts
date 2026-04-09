// Generate all valid combinations of parentheses. (Stack)

function generateParenthesis(num: number): string[] {
  const result: string[] = [];

  // Backtracking algorithm.
  (function dfs(set: string[], open: number, close: number): void {
    if (set.length >= num * 2) {
      const str = set.join("");
      result.push(str);

      return undefined;
    }

    if (open > close) {
      set.push(")");
      dfs([...set], open, close + 1);
      set.pop();
    }

    if (open < num) {
      set.push("(");
      dfs([...set], open + 1, close);
    }

    return undefined;
  })(["("], 1, 0);

  return result;
}

console.log(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(generateParenthesis(1), ["()"]);
// https://leetcode.com/problems/generate-parentheses/

// num: number. 1 <= num <= 8.
// Return an array of all valid parentheses using num pairs in any order.
