/**
 * @param {number} n
 * @return {number[]}
 */
export var countBits = function (n) {
  let dp = new Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) {
      offset *= 2;
    }
    dp[i] = dp[i - offset] + 1;
  }
  return dp;
};
// TODO: review and explain this solution
