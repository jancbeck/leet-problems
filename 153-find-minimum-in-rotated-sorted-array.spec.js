import { findMin } from "./153-find-minimum-in-rotated-sorted-array.js";

describe("findMin", function () {
  it("should return 1 for [3,4,5,1,2]", function () {
    expect(findMin([3, 4, 5, 1, 2])).toEqual(1);
  });

  it("should return 0 for [4,5,6,7,0,1,2]", function () {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0);
  });

  it("should return 11 for [11,13,15,17]", function () {
    expect(findMin([11, 13, 15, 17])).toEqual(11);
  });
});
