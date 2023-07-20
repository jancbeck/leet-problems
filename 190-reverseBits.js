/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export var reverseBits = function (n) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    ans = (ans << 1) + (n & 1);
    n >>= 1;
  }
  return ans >>> 0; // TODO: why >>> 0?
};
