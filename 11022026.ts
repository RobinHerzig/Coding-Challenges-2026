// Group anagrams. (Caching)

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    // Sort string
    const cur = [...str].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");

    // Add to map
    map.set(cur, map.get(cur)?.concat(str) ?? [str]);
  }

  return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
console.log(groupAnagrams([]), [[]]);
// https://leetcode.com/problems/group-anagrams/

// strs: string[][]. 1 <= strs.length <= 10^4. 0 <= strs[i].length <= 100. Consists of lowercase English letters.
// Return string[][], grouping words if they are anagrams.
