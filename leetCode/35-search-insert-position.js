// 35-search-insert-position https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  // The insert position is the index which element’s value is greater or equal with target.
  // So we scan linearly the array will find the answer.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};

const nums1 = [1, 3, 5, 6],
  target1 = 5; // 2
const nums2 = [1, 3, 5, 6],
  target2 = 2; // 1
const nums3 = [1, 3, 5, 6],
  target3 = 7; // 4

console.log(searchInsert(nums1, target1));
console.log(searchInsert(nums2, target2));
console.log(searchInsert(nums3, target3));

// 💡 Explanation: https://www.geeksforgeeks.org/binary-search/
// - Linear Search Approach (https://www.geeksforgeeks.org/linear-search/)
// - Binary Search Approach
