import { hammingWeight } from "./191-hammingWeight.js";

describe("hammingWeight", () => {
  it("should return 3 for input 00000000000000000000000000001011", () => {
    expect(hammingWeight(11)).toEqual(3);
  });

  it("should return 1 for input 00000000000000000000000010000000", () => {
    expect(hammingWeight(128)).toEqual(1);
  });

  it("should return 31 for input 11111111111111111111111111111101", () => {
    expect(hammingWeight(4294967293)).toEqual(31);
  });
});
