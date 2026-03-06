// Permutation in str2. (Sliding window)

function checkInclusion(str1: string, str2: string): boolean {
  const map = new Map<string, number>(); // <char, count>
  let left = 0;
  let right = 0;

  // Step 1: Create and populate str1 cache.
  [...str1].forEach((char) => map.set(char, (map.get(char) || 0) + 1));

  // Step 2: Sliding window algorithm.
  while (right < str2.length) {
    // Cache right pointer value.
    map.set(str2[right], (map.get(str2[right]) || 0) - 1);

    if (map.get(str2[right]) === 0) {
      map.delete(str2[right]);
    }

    // Increment left pointer and remove from cache.
    if (right - left + 1 > str1.length) {
      map.set(str2[left], (map.get(str2[left]) || 0) + 1);

      if (map.get(str2[left]) === 0) {
        map.delete(str2[left]);
      }

      left++;
    }

    // Check condition.
    if (map.size === 0) {
      return true;
    }

    // Increment right pointer.
    right++;
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo"), true);
console.log(checkInclusion("ab", "eidboaoo"), false);
console.log(checkInclusion("bc", "abcd"), true);
console.log(checkInclusion("cb", "abcd"), true);
console.log(checkInclusion("bd", "abcd"), false);
// https://leetcode.com/problems/permutation-in-string/

// str1: string. 1 <= str1.length <= 10^4. Lower English letters.
// str2: string. 1 <= str2.length <= 10^4. Lower English letters.
// Return true if str2 contains a permutation of str1.
