// 가장 긴 팰린드롬 https://school.programmers.co.kr/learn/courses/30/lessons/12904?language=javascript
// 경우의 수 전부 나열해서...

/**
 * @param {string} s
 * @return {number}
 */
function solution(s) {
  const fullLength = s.length;
  for (let firstIndex = 0; firstIndex < fullLength; firstIndex++) {
    
    const lastIndex = fullLength - firstIndex;
    const str = s.substring(firstIndex, (lastIndex + 1));
    const palindrome = isPalindrome(str);

    console.log('@@', firstIndex, lastIndex+1)
    
    if (palindrome) {
      return str.length;
    }
  }
}

/**
 * @param {string} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const n = x.length;
  for (let i = 0; i < Math.floor(n/2); i++) {
    if (x[i] !== x[n-i-1]) {
      return false;
    }
  }
  return true;
}

const str1 = 'abcdcba'; // 7
const str2 = 'abacde'; // 3
// console.log(solution(str1)); 
console.log(solution(str2)); 