const { expect } = require("chai");
const printPretty = require("../lib");

describe("printPretty", function () {
  it("should throw an error when [level] is not between 'info', 'warn', 'log', and 'debug'.", function () {
    const level = "xyz";
    const args = ["Hello", "World", 1, 2, 3];

    expect(() => printPretty(level, ...args)).to.throw();
  });

  it("should complete successfully when [level] is between 'info', 'warn', 'log', and 'debug'.", function () {
    const level = "error";
    const args = ["Hello", "World", 1, 2, 3];

    expect(() => printPretty(level, ...args)).not.to.throw();
  });
});
