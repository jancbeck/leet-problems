/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export var threeSum = function (nums) {
  let res = [];
  let arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = arr.length - 1;
    while (l < r) {
      let threeSum = nums[i] + nums[l] + nums[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] == nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
};
// TODO rehearse problem
