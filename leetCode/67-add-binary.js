// 67-add-binary https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  a = a.split('').reverse(); // ✅
  b = b.split('').reverse();

  const result = [];
  const len = a.length > b.length ? a.length : b.length;
  for (let i = 0; i < len; i++) {
    num1 = Number(a[i] || 0);
    num2 = Number(b[i] || 0);
    curr = Number(result[i] || 0) + num1 + num2;

    if (curr >= 2) {
      result[i] = curr % 2; // ✅
      result.push(1);
    } else {
      result[i] = curr;
    }
  }
  return result.reverse().join('');
};

const a1 = '11',
  b1 = '1'; // 100
const a2 = '1010',
  b2 = '1011'; // 10101

console.log(addBinary(a1, b1));
console.log(addBinary(a2, b2));
