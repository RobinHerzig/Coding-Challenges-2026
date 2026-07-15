// Count subarrays where each character appears at least once. (Sliding window)

function numberOfSubstrings(str: string): number {
  const table = {
    a: 0,
    b: 0,
    c: 0,
  };
  let result = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    // Cache right-pointer value.
    table[str[right]]++;

    // Calculate window condition.
    while (table.a && table.b && table.c) {
      // Update result.
      result = str.length - right;

      // Decrement left-pointer value.
      table[str[left]]--;

      // Increment left pointer.
      left++;
    }

    // Increment right pointer.
    right++;
  }

  return result;
}

console.log(numberOfSubstrings("abcabc"), 10);
console.log(numberOfSubstrings("aaacb"), 3);
console.log(numberOfSubstrings("abc"), 1);
// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

// str: string. 3 <= str.length <= 5*10^4. Consists of "a", "b", or "c".
// Return the number of substrings containing at least one occurance of "a", "b", and "c".
