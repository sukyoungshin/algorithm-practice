// 66. Plus One (https://leetcode.com/problems/plus-one/)

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 const plusOne = function(digits) {
  let end = digits.length - 1; // 2
  for (let i = end; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] = digits[i] + 1;
      break;
    } else {
      digits[i] = 0;
    }
  }

  if (digits[0] === 0) digits.unshift(1);
  return digits;
};


// INPUT
const digit1 = [1, 2, 3]; // 124
const digit2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]; // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
const digit3 = [9,9,9]; // 10
const digit4 = [3,3,9];

// OUTPUT
console.log(plusOne(digit1));
console.log(plusOne(digit2));
console.log(plusOne(digit3));
console.log(plusOne(digit4));

// NOTE
Number.MAX_SAFE_INTEGER; // 9007199254740991
'9007199254740991'.length; // 16
[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3].join(''); // 
'6145390195186705543'.length; // 19