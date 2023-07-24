/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(amount + 1); // fill output array with large number that we can check against later
  dp[0] = 0; // initialize base case
  for (let a = 1; a < amount + 1; a++) {
    coins.forEach((c) => {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c]); // this is why we filled with a large number. We use min so that we don't update with greater than necessary change
      }
    });
  }
  return dp[amount] != amount + 1 ? dp[amount] : -1; // we check if we actually got a valid change
};
