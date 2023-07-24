import { climbStairs } from "./70-climbing-stairs.js";

describe("climbStairs", function () {
  it("should return 1 for n = 1", function () {
    expect(climbStairs(1)).toEqual(1);
  });

  it("should return 2 for n = 2", function () {
    expect(climbStairs(2)).toEqual(2);
  });

  it("should return 3 for n = 3", function () {
    expect(climbStairs(3)).toEqual(3);
  });

  it("should return 5 for n = 4", function () {
    expect(climbStairs(4)).toEqual(5);
  });

  it("should return 8 for n = 5", function () {
    expect(climbStairs(5)).toEqual(8);
  });

  it("should return 13 for n = 6", function () {
    expect(climbStairs(6)).toEqual(13);
  });
});
