/**
 * @param {number[]} nums
 * @return {number}
 */
export var maxProduct = function (nums) {
  let res = Math.max(...nums);
  let curMin = 1;
  let curMax = 1;
  for (let i of nums) {
    let tmp = i * curMax;
    curMax = Math.max(i * curMax, i * curMin, i);
    curMin = Math.min(tmp, i * curMin, i);
    res = Math.max(res, curMax);
  }
  return res;
};

// TODO: revisit this problem
