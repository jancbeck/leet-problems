import { maxSubArray } from "./53-max-subarrays.js";

describe("maxSubArray", function () {
  it("should return 23 for [5,4,-1,7,8]", function () {
    expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
  });

  it("should return 6 for [-2,1,-3,4,-1,2,1,-5,4]", function () {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  it("should return 1 for [1]", function () {
    expect(maxSubArray([1])).toEqual(1);
  });

  it("should return 23 for [5,4,-1,7,8]", function () {
    expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
  });

  it("should return -1 for [-2,-1]", function () {
    expect(maxSubArray([-2, -1])).toEqual(-1);
  });
});
