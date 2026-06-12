// Longest repeating character replacement. (Sliding window)

function characterReplacement(str: string, k: number): number {
  const freq = new Map<string, number>(); // {char, count}
  let maxLength = 0;
  let maxFreq = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    // Cache right-pointer value.
    freq.set(str[right], (freq.get(str[right]) || 0) + 1);
    maxFreq = Math.max(maxFreq, freq.get(str[right])!);

    // Check window condition.
    while (right - left + 1 - maxFreq > k) {
      // Decache left-pointer value.
      freq.set(str[left], freq.get(str[left])! - 1);

      // Increment left pointer.
      left++;
    }

    // Update maxLength.
    maxLength = Math.max(maxLength, right - left + 1);

    // Increment right pointer.
    right++;
  }

  return maxLength;
}

console.log(characterReplacement("ABAB", 2), 4);
console.log(characterReplacement("AABABBA", 1), 4);
console.log(characterReplacement("ABABC", 0), 1);
console.log(characterReplacement("ABCCCA", 2), 5);
// https://leetcode.com/problems/longest-repeating-character-replacement/

// str: string. 1 <= str.length <= 10^5. Uppercase English letters.
// k: number. 0 <= k <= str.length. Number of characters that can be changed.
// Return the length of the longest substring possible changing, at most, k characters.
