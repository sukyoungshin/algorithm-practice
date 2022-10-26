// 27 Remove Element https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

const nums1 = [3,2,2,3], val1 = 3; // [2, 2]
const nums2 = [0,1,2,2,3,0,4,2], val2 = 2; // [0,1,4,0,3]
console.log(removeElement(nums1, val1));
console.log(removeElement(nums2, val2));