import {threeSum} from "./3-sum.js"

describe("threeSum", function () {
  it("should return the correct output for Example 1", function () {
    const nums = [-1, 0, 1, 2, -1, -4];
    const expected = [[-1, -1, 2], [-1, 0, 1]];
    const result = threeSum(nums);
    expect(result).toEqual(expected);
  });

  it("should return the correct output for Example 2", function () {
    const nums = [0, 1, 1];
    const expected = [];
    const result = threeSum(nums);
    expect(result).toEqual(expected);
  });

  it("should return the correct output for Example 3", function () {
    const nums = [0, 0, 0];
    const expected = [[0, 0, 0]];
    const result = threeSum(nums);
    expect(result).toEqual(expected);
  });
});