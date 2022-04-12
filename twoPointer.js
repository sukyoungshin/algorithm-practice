// Two pointer 알고리즘
// - 인덱스 두개를 동시에 컨트롤하는것
const str1 = 'oiasjdfiojaweoijfoiwjefoaofijwfeijoaef';
const str2 = 'abcbaaaabbbddddabcdcbaee';

const isBothSame = function(string, center, compare) {
  if (string[center-compare] === undefined || string[center+compare] === undefined) return false;
  return (string[center-compare] === string[center+compare]);
};

const longestPalindromicSubstring = function(string, center) {
  for (let i = 0; i < string.length; i++) {  
    if (isBothSame(string, center, i)) continue;
    return i;
  }
};

const isPalindromic = function(string) {
  let position;
  let longest = 0;
  for (let i = 0; i < string.length; i++) {
    const len = longestPalindromicSubstring(string, i); 
    if (longest < len) {
      longest = len;
      position = i;
    }
  }
  return string.substring(position - (longest - 1), position + longest);
};

console.log(isPalindromic(str1));
console.log(isPalindromic(str2));