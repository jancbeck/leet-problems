import { maxProfit } from "./121-max-profit.js";

describe("maxProfit", () => {
  it("should return 5 when given [7,1,5,3,6,4]", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const expected = 5;
    const actual = maxProfit(prices);
    expect(actual).toEqual(expected);
  });

  it("should return 0 when given [7,6,4,3,1]", () => {
    const prices = [7, 6, 4, 3, 1];
    const expected = 0;
    const actual = maxProfit(prices);
    expect(actual).toEqual(expected);
  });
});
