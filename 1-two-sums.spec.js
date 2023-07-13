import { twoSum } from "./1-two-sums.js";

// BEGIN: 9d7f6a5b1e5c
describe("twoSum", function () {
  it("should return [0,1] when given nums = [2,7,11,15] and target = 9", function () {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("should return [1,2] when given nums = [3,2,4] and target = 6", function () {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("should return [0,1] when given nums = [3,3] and target = 6", function () {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
// END: 9d7f6a5b1e5c
