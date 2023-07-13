/**
 * @param {number[]} nums
 * @return {number[]}
 */
export var productExceptSelf = function (nums) {
  const n = nums.length;
  const output = new Array(n);
  let left = 1;
  let right = 1;

  for (let i = 0; i < n; i++) {
    output[i] = left;
    left *= nums[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    output[i] *= right;
    right *= nums[i];
  }

  return output;
};
// TODO: revisit this problem
