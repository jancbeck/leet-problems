/**
 * @param {number[]} height
 * @return {number}
 */
export var maxArea = function (height) {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;

  while (r > l) {
    maxArea = Math.max(maxArea, Math.min(height[l], height[r]) * (r - l));
    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }
  return maxArea;
};
