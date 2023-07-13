import { containsDuplicate } from "./217-contains-duplicate.js";

describe("containsDuplicate", function () {
  it("should return true for [1,2,3,1]", function () {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it("should return false for [1,2,3,4]", function () {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it("should return true for [1,1,1,3,3,4,3,2,4,2]", function () {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it("should handle an array with one element", function () {
    expect(containsDuplicate([1])).toBe(false);
  });

  it("should handle an array with 105 elements", function () {
    const nums = Array.from({ length: 105 }, function (_, i) {
      return i;
    });
    expect(containsDuplicate(nums)).toBe(false);
    nums.push(104);
    expect(containsDuplicate(nums)).toBe(true);
  });

  it("should handle an array with negative numbers", function () {
    expect(containsDuplicate([-1, 2, 3, -1])).toBe(true);
    expect(containsDuplicate([-1, -2, -3, -4])).toBe(false);
  });

  it("should handle an array with large positive numbers", function () {
    const nums = Array.from({ length: 100000 }, function (_, i) {
      return i + 1000000000;
    });
    expect(containsDuplicate(nums)).toBe(false);
    nums.push(1000000099);
    expect(containsDuplicate(nums)).toBe(true);
  });
});
