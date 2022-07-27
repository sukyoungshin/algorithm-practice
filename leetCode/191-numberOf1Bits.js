// 191. Number of 1 Bits (https://leetcode.com/problems/number-of-1-bits/)

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
  n = n.toString(2).split('');

  const result = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] === '1') {
      result.push(n[i]);
    } 
  }

  return result.length;
};

// INPUT
let n1 = 11; // binary string 00000000000000000000000000001011, expected output: 3
let n2 = 128; // binary string 00000000000000000000000010000000, expected output: 1
let n3 = 4294967293; // binary string 11111111111111111111111111111101, expected output: 31

// OUTPUT
console.log(hammingWeight(n1));
console.log(hammingWeight(n2));
console.log(hammingWeight(n3));

// NOTE
// 숫자를 특정 진수의 문자열 리터럴로 변환하려면 number.toString(radix)를 사용하세요. (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt)