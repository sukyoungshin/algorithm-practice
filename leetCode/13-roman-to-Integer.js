// 13. Roman to Integer https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
const symbols = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};
 const romanToInt = function(s) {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = symbols[s[i]], next = symbols[s[i+1]];
    if (curr < next) {
      num = num - curr;
    } else {
      num = num + curr;
    }
  }

  return num;
};

const s1 = 'IIIX';
const s2 = 'LVIII';
const s3 = 'MCMXCIV';
console.log(romanToInt(s1));
console.log(romanToInt(s2));
console.log(romanToInt(s3));