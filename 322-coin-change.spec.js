import { coinChange } from "./322-coin-change.js";

describe("coinChange", function () {
  it("should return the correct number of coins for [1,2,5] and 11", function () {
    expect(coinChange([1, 2, 5], 11)).toEqual(3);
  });

  it("should return -1 for [2] and 3", function () {
    expect(coinChange([2], 3)).toEqual(-1);
  });

  it("should return 0 for [1] and 0", function () {
    expect(coinChange([1], 0)).toEqual(0);
  });
});
