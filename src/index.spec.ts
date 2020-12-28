import { diamond, printLine, printChars } from ".";

describe("Test of diamond()", function () {
  it("Should return '* * '", function () {
    expect(printChars('*', 2)).toEqual("* * ");
  });

  it("Should return '* '", function () {
    expect(printLine(1, 1)).toEqual("* \n");
  });

  it("Should return '  *   '", function () {
    expect(printLine(1, 3)).toEqual("  *   \n");
  });

  it("Should return a diamond of size 0", function () {
    expect(diamond(0)).toEqual("");
  });

  it("Should return a diamond of size 1", function () {
    expect(diamond(1)).toEqual("* \n");
  });

  it("Should return a diamond of size 3", function () {
    expect(diamond(3)).toEqual("  *   \n* * * \n  *   \n");
  });

  it("Should return a diamond of size 7", function () {
    expect(diamond(7)).toEqual("      *       \n    * * *     \n  * * * * *   \n* * * * * * * \n  * * * * *   \n    * * *     \n      *       \n");
  });

});
