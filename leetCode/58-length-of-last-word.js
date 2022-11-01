// 58-length-of-last-word https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const word = s.trim().split(' ');
  return word[word.length - 1].length;
};
