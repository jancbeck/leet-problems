/**
 * @param {number} n
 * @return {number}
 */
export var climbStairs = function (n) {
  if (n < 3) {
    // handle base case
    return n;
  }
  let prev1 = 2,
    prev2 = 1;
  for (let i = 3; i <= n; i++) {
    // start at third step
    let tmp = prev1 + prev2; // calculate current solution
    prev2 = prev1; // reassign variable
    prev1 = tmp; // prepare variable for next iteration
  }
  return prev1;
};
