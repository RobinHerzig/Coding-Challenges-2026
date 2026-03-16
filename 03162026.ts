// Longest repeating character replacement. (Sliding window)

function characterReplacement(str: string, k: number): number {
  const map = new Map<string, number>(); // <char, count>
  let maxLength = 0;
  let maxFreq = 0;
  let left = 0;
  let right = 0;

  // Step 1: Sliding-window algorithm.
  while (right < str.length) {
    // Cache right-pointer value.
    map.set(str[right], (map.get(str[right]) || 0) + 1);
    maxFreq = Math.max(maxFreq, map.get(str[right]) || 0);

    // Decache and increment left pointer.
    while (right - left + 1 - maxFreq > k) {
      map.set(str[left], map.get(str[left])! - 1);
      left++;
      // maxFreq does not need to be decremented or reset.
    }

    // Check condition.
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
