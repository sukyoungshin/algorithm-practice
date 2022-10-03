// 14 Longest Common Prefix (https://leetcode.com/problems/longest-common-prefix/)

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {    
    for (const s of strs) {
      if (s[i] !== strs[0][i]) return s.substring(0, i);
    }
  }

  return strs[0];
};

const strs1 = ["flower","flow","flight"];
const strs2 = ["dog","racecar","car"];
const strs3 = ["flower","flower","flower","flower"];
console.log(longestCommonPrefix(strs1)); // "fl"
console.log(longestCommonPrefix(strs2)); // ""
console.log(longestCommonPrefix(strs3)); // flower