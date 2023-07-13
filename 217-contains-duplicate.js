

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (num === nums[j] && i !== j) {
        return true;
      }
    }
  }
  return false;
}
