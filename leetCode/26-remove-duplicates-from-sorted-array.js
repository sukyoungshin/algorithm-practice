// 26-remove-duplicates-from-sorted-array https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let insertIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  return (nums.length = insertIndex);
};

const nums1 = [1, 1, 2];
const nums2 = [0, 1, 1, 1, 2, 2, 3, 3, 4];
const nums3 = [1, 1];

console.log(removeDuplicates(nums1));
console.log(removeDuplicates(nums2));
console.log(removeDuplicates(nums3));
