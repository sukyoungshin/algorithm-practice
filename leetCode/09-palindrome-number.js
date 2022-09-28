// Palindrome Number https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  x = String(x); 
  const order = getOrderedArray(x);
  const reverse = getReversedArray(order);

  return Number(order.join('')) === Number(reverse.join(''));
};

const getOrderedArray = (str) => {
  const array = [];
  for (let i = 0; i < str.length; i++) {
    array.push(str[i]);
  }

  return array;
};

const getReversedArray = (arr) => {
  const array = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    array.push(arr[i]);
  }

  return array;
};

const x1 = 121; // true
const x2 = -121; // false
const x3 = 10; // false
console.log(isPalindrome(x1));
console.log(isPalindrome(x2));
console.log(isPalindrome(x3));