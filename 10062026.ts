// Generate all letter combinations from phone number. (Backtracking)

function letterCombinations(digits: string): string[] {
  const result: string[] = [];
  const map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  function dfs(set: string[], i: number): void {
    // Base case
    if (set.length === digits.length) {
      result.push(set.join(""));
      return;
    }

    // Recursive case
    const letters = map[digits[i]];

    for (const letter of letters) {
      set.push(letter);
      dfs(set, i + 1);
      set.pop();
    }
  }

  dfs([], 0);
  return result;
}

console.log(letterCombinations("2"), ["a", "b", "c"]);
console.log(letterCombinations("23"), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// digits: string. 1 <= digits.length <= 4. digits[i] range is [2, 9].
// Return all possible letter combinations when converting each digit into phone characters.
