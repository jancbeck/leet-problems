import { lengthOfLIS } from "./300-longest-increasing-sequence.js";
// BEGIN: 8d7f6a3b7xw1
describe("lengthOfLIS", () => {
  it("returns the length of the longest increasing subsequence for [10,9,2,5,3,7,101,18]", () => {
    const nums = [10, 9, 2, 5, 3, 7, 101, 18];
    const expected = 4;
    const result = lengthOfLIS(nums);
    expect(result).toEqual(expected);
  });

  it("returns the length of the longest increasing subsequence for [0,1,0,3,2,3]", () => {
    const nums = [0, 1, 0, 3, 2, 3];
    const expected = 4;
    const result = lengthOfLIS(nums);
    expect(result).toEqual(expected);
  });

  it("returns the length of the longest increasing subsequence for [7,7,7,7,7,7,7]", () => {
    const nums = [7, 7, 7, 7, 7, 7, 7];
    const expected = 1;
    const result = lengthOfLIS(nums);
    expect(result).toEqual(expected);
  });
});
// END: 8d7f6a3b7xw1
