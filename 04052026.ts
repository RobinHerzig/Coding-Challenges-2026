// Longest substring without repeating characters. (Sliding window)

function lengthOfLongestSubstring(str: string): number {
  const map = new Map<string, number>(); // <char, count>
  let left = 0;
  let right = 0;
  let result = 0;

  // Sliding window algorithm
  while (right < str.length) {
    // Cache right-pointer value.
    map.set(str[right], (map.get(str[right]) || 0) + 1);

    // Check window condition.
    while (map.get(str[right])! > 1) {
      map.set(str[left], map.get(str[left])! - 1);

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

console.log(lengthOfLongestSubstring("abcabcbb"), 3);
console.log(lengthOfLongestSubstring("bbbbb"), 1);
console.log(lengthOfLongestSubstring("pwwkew"), 3);
console.log(lengthOfLongestSubstring(""), 0);
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// str: string. 0 <= str.length <= 5*10^4. English letters, digits, symbols, and spaces.
// Return the length of the longest substring without duplicate characters.
