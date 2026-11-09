// Arrange substrings into all possible palindromes. (Backtracking)

function partition(str: string): string[][] {
  const result: string[][] = [];

  function dfs(set: string[], i: number): void {
    // Base case
    if (i === str.length) {
      result.push([...set]);
      return;
    }

    // Recursive case
    for (let j = i; j < str.length; j++) {
      const substr = str.slice(i, j + 1);

      if (!isPalindrome(substr)) {
        continue;
      }

      set.push(substr);
      dfs(set, j + 1);
      set.pop();
    }
  }

  function isPalindrome(str: string): boolean {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }

      left++;
      right--;
    }

    return true;
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
