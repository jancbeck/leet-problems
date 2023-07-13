import { maxProduct } from "./152-maximum-product-subarray.js";

// BEGIN: ed8c6549bwf9
describe("maxProduct", function () {
  it("should return 6 for [2,3,-2,4]", function () {
    expect(maxProduct([2, 3, -2, 4])).toEqual(6);
  });

  it("should return 0 for [-2,0,-2, 4,-3]", function () {
    expect(maxProduct([-2, 0, -1, -2, 4,-3])).toEqual(0);
  });

  it("should return 0 for [0,2]", function () {
    expect(maxProduct([0, 2])).toEqual(2);
  });
});
// END: ed8c6549bwf9
