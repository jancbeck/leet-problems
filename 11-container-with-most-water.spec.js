import { maxArea } from "./11-container-with-most-water.js";

describe("maxArea", () => {
  it("should return 49 for [1,8,6,2,5,4,8,3,7]", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const expected = 49;
    const result = maxArea(height);
    expect(result).toEqual(expected);
  });

  it("should return 1 for [1,1]", () => {
    const height = [1, 1];
    const expected = 1;
    const result = maxArea(height);
    expect(result).toEqual(expected);
  });
});
