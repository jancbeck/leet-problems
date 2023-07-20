import { missingNumber } from "./268-missingNumber.js";

describe("missingNumber", function () {
  it("should return 2 for [3,0,1]", function () {
    expect(missingNumber([3, 0, 1])).toEqual(2);
  });

  it("should return 2 for [0,1]", function () {
    expect(missingNumber([0, 1])).toEqual(2);
  });

  it("should return 8 for [9,6,4,2,3,5,7,0,1]", function () {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8);
  });
});
