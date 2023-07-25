/**
 * @param {number[]} nums
 * @return {number}
 */
export var lengthOfLIS = function (nums) {
  let len = nums.length;
  let LIS = Array(len).fill(1);
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j <= len; j++) {
      if (nums[i] < nums[j]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
      }
    }
  }
  return Math.max(...LIS);
};
