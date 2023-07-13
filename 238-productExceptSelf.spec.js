// BEGIN: 7f3b5f8d8c1d
import { productExceptSelf } from "./238-productExceptSelf.js";

describe("productExceptSelf", () => {
  it("should return the correct output for [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const expectedOutput = [24, 12, 8, 6];
    expect(productExceptSelf(nums)).toEqual(expectedOutput);
  });

  it("should return the correct output for [-1,1,0,-3,3]", () => {
    const nums = [-1, 1, 0, -3, 3];
    const expectedOutput = [0, 0, 9, 0, 0];
    expect(productExceptSelf(nums)).toEqual(expectedOutput);
  });
});
// END: 7f3b5f8d8c1d
