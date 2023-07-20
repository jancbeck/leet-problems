import { getSum } from "./sum-of-two-integers.js";

// BEGIN: 8f7e6d5a9c3b
describe("getSum", function () {
  it("should return the sum of two integers", function () {
    expect(getSum(1, 2)).toEqual(3);
    expect(getSum(2, 3)).toEqual(5);
  });
});
// END: 8f7e6d5a9c3b
