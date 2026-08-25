// Palindrome Partitioning (Backtracking)

function partition(str: string): string[][] {
  const dp = Array.from({ length: str.length }, () => Array(str.length).fill(false));

  // Dynamic programming
  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j <= str.length - i; j++) {
      dp[j][j + i - 1] = str[j] === str[j + i - 1] && (j + 1 > j + i - 2 || dp[j + 1][j + i - 2]);
    }
  }

  const result: string[][] = [];

  // Recursive
  function dfs(set: string[], i: number): void {
    if (i === str.length) {
      result.push([...set]);
      return;
    }

    for (let j = i; j < str.length; j++) {
      const substr = str.slice(i, j + 1);

      if (!dp[i][j]) {
        continue;
      }

      set.push(substr);
      dfs(set, j + 1);
      set.pop();
    }
  }

  dfs([], 0);
  return result;
}

console.log(partition("aab"), [["a", "a", "b"], ["aa", "b"]]);
console.log(partition("a"), [["a"]]);
console.log(partition("abbab"), [["a", "b", "b", "a", "b"], ["a", "b", "bab"], ["a", "bb", "a", "b"], ["abba", "b"]]);
// https://leetcode.com/problems/palindrome-partitioning/

// str: string. 1 <= str.length <= 16. Lowercase English letters.
// Return an array of strings such that every substring is a palindrome. Include every combination.
