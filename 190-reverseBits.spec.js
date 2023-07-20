import { reverseBits } from "./190-reverseBits.js";

describe("reverseBits", function () {
  it("should return 964176192 when given 00000010100101000001111010011100", function () {
    expect(reverseBits(0b00000010100101000001111010011100)).toEqual(964176192);
  });

  it("should return 3221225471 when given 11111111111111111111111111111101", function () {
    expect(reverseBits(0b11111111111111111111111111111101)).toEqual(3221225471);
  });
});
