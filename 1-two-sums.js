/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const diff = target - element;
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(element, i);
  }
}
