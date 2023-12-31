/**
 * @param {number[]} prices
 * @return {number}
 */
export var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const profit = currentPrice - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }
  return maxProfit;
};
// TODO: revisit this problem
