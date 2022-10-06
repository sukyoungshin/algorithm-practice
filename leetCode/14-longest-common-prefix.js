// 14 Longest Common Prefix (https://leetcode.com/problems/longest-common-prefix/)

// 1
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


// 2.
 const longestCommonPrefix = function(strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    prefix = compare(prefix, strs[i]);
  }

  return prefix;
};

const compare = (str1, str2) => {
  let answer = '';
  for (let i = 0; i < str2.length; i++) {
    if (str1[i] === str2[i]) {
      answer += str1[i];
    } else {
      return answer;
    }
  }

  return answer;
};


const strs1 = ["flower","flow","flight"];
const strs2 = ["dog","racecar","car"];
const strs3 = ["flower","flower","flower","flower"];
console.log(longestCommonPrefix(strs1)); // "fl"
console.log(longestCommonPrefix(strs2)); // ""
console.log(longestCommonPrefix(strs3)); // flower