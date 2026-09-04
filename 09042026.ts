// Longest common prefix of strings in an array. (Array)

function longestCommonPrefix(strs: string[]): string {
  const result: string[] = [];

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    let prefix = true;

    for (const str of strs) {
      if (str[i] !== char) {
        prefix = false;
        break;
      }
    }

    if (!prefix) {
      break;
    }

    result.push(char);
  }

  return result.join("");
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");
// https://leetcode.com/problems/longest-common-prefix/

// strs: string[]. 1 <= strs.length <= 200. 0 <= strs[i].length <= 200. strs[i] consists of lowercase letters.
// Return the longest common prefix amongst all strings in strs.
