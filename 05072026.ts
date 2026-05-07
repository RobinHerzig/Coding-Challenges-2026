// Group anagrams. (Caching)

function groupAnagrams(strs: string[]): string[][] {
  const cache = new Map<string, string[]>(); // {counts_string: [anagrams]}

  // Step 1: Iterate each word in strs.
  for (const str of strs) {
    const counts = new Array(26).fill(0);

    // Step 2: Plot the counts of each characters to an array to normalize character order.
    for (const char of str) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      counts[index] = counts[index] + 1;
    }

    // Step 3: Convert count array to string to use as property. All words that share the same count_string are anagrams.
    const counts_string = counts.join("-");
    cache.set(counts_string, (cache.get(counts_string) || []).concat(str));
  }

  return [...cache.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
console.log(groupAnagrams([]), [[]]);
// https://leetcode.com/problems/group-anagrams/

// strs: string[][]. 1 <= strs.length <= 10^4. 0 <= strs[i].length <= 100. Consists of lowercase English letters.
// Return string[][], grouping words if they are anagrams.
