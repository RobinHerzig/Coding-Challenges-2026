// Longest repeating character replacement. (Sliding window)

function characterReplacement(str: string, k: number): number {
  const map = new Map<string, number>();
  let mostFreq = 0;
  let result = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    // Cache right pointer value.
    map.set(str[right], (map.get(str[right]) || 0) + 1);
    mostFreq = Math.max(mostFreq, map.get(str[right]));

    // Check window condition.
    if (right - left + 1 - mostFreq > k) {
      // Decache left pointer value.
      map.set(str[left], map.get(str[left]) - 1);
      // Increment left pointer.
      left++;
    }

    // Update result.
    result = Math.max(result, right - left + 1);

    // Increment right pointer.
    right++;
  }

  return result;
}

console.log(characterReplacement("ABAB", 2), 4);
console.log(characterReplacement("AABABBA", 1), 4);
console.log(characterReplacement("ABABC", 0), 1);
console.log(characterReplacement("ABCCCA", 2), 5);
// https://leetcode.com/problems/longest-repeating-character-replacement/

// str: string. 1 <= str.length <= 10^5. Uppercase English letters.
// k: number. 0 <= k <= str.length. Number of characters that can be changed.
// Return the length of the longest substring possible changing, at most, k characters.
