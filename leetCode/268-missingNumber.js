// 268 Missing Number (https://leetcode.com/problems/missing-number/)

/**
 * @param {number[]} nums
 * @return {number}
 */

const missingNumber = function(nums) {
  const MAX_NUMBER = searchMaxNumber(nums); 
  nums = nums.sort(sortNumbers);
  
  return getResult(nums, MAX_NUMBER);
};

const searchMaxNumber = (arr) => {
  let MAX = 0;
  for (let i = 0; i < arr.length; i++) {
    if (MAX <= arr[i]) {
      MAX = arr[i];
    }
  }
  return (MAX < arr.length ? arr.length : MAX);
};

const sortNumbers = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const getResult = (arr, MAX_NUMBER) => {
  for (let i = 0; i <= MAX_NUMBER; i++) {
    if (arr[i] === i) continue;
    return i;
  }
};

// INPUT
const num1 = [3, 0, 1];
const num2 = [0, 1];

// OUTPUT
console.log(missingNumber(num1));
console.log(missingNumber(num2));