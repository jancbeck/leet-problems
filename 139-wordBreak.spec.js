import { wordBreak } from "./139-wordBreak.js";

describe("wordBreak", function () {
  it("should return true for s = 'leetcode' and wordDict = ['leet', 'code']", function () {
    expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
  });

  it("should return true for s = 'applepenapple' and wordDict = ['apple', 'pen']", function () {
    expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
  });

  it("should return false for s = 'catsandog' and wordDict = ['cats', 'dog', 'sand', 'and', 'cat']", function () {
    expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(
      false
    );
  });
});
