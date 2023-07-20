/**
 * @param {number[]} nums
 * @return {number}
 */
export var missingNumber = function (nums) {
  // because the array is missing one number, the length
  // is one more than the highest number in the array.
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i];
  }
  return res;
};

// TODO: revisit why we start res at nums.length.
