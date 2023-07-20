import { countBits } from "./338-countBits.js";

describe("countBits", function () {
  it("should return [0, 1, 1] when n = 2", function () {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  it("should return [0, 1, 1, 2, 1, 2] when n = 5", function () {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });
});
