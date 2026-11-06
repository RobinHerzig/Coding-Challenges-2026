// Palindrome Partitioning. (Backtracking)

function partition(str: string): string[][] {
  const result: string[][] = [];

  function dfs(set: string[], i: number): void {
    if (i === str.length) {
      result.push([...set]);
      return;
    }

    for (let j = i; j < str.length; j++) {
      const sub = str.slice(i, j + 1);

      if (!isPalindrome(sub)) {
        continue;
      }

      set.push(sub);
      dfs(set, j + 1);
      set.pop();
    }
  }

  function isPalindrome(str: string): boolean {
    let a = 0;
    let b = str.length - 1;

    while (str[a] === str[b] && a < b) {
      a++;
      b--;
    }

    return a >= b;
  }

  dfs([], 0);
  return result;
}

// console.log(partition("aab"), [["a", "a", "b"], ["aa", "b"]]);
// console.log(partition("a"), [["a"]]);
// console.log(partition("abbab"), [["a", "b", "b", "a", "b"], ["a", "b", "bab"], ["a", "bb", "a", "b"], ["abba", "b"]]);
// https://leetcode.com/problems/palindrome-partitioning/

// str: string. 1 <= str.length <= 16. Lowercase English letters.
// Return an array of strings such that every substring is a palindrome. Include every combination.
