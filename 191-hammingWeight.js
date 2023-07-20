/**
 * @param {number} n - a positive integer
 * @return {number}
 */
export var hammingWeight = function (n) {
  let res = 0;
  while (n !== 0) {
    res += n % 2;
    n >>>= 1;
  }
  return res;
};
// TODO: review why bitshifting 00000000000000000000000010000000 return 100000000000000000000
// TODO: why (00000000000000000000000010000000 / 2).toString(2) === (00000000000000000000000010000000 >>> 1).toString(2)
