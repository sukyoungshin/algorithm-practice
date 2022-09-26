// two-sum https://leetcode.com/problems/two-sum/

// 1. brute force
const twoSum = function(nums, target) {  

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] !== target) continue;
      return [i, j];
    }
  }
};

// 2. 

const nums1 = [2,7,11,15];
const target1 = 9;
const nums2 = [3,2,3];
const target2 = 6;
const nums3 = [2,5,5,11];
const target3 = 10;

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));