/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
export var wordBreak = function (s, wordDict) {
  let slen = s.length;
  let dp = Array(slen + 1).fill(false);
  dp[slen] = true;
  for (let i = s.length - 1; i >= 0; i--) {
    for (const w of wordDict) {
      if (i + w.length <= slen && s.substring(i, i + w.length) == w) {
        dp[i] = dp[i + w.length];
      }
      if (dp[i]) {
        break;
      }
    }
  }
  return dp[0];
};
