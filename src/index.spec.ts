import { diamond, printLine, printChars, equivalentTopHalfIndex } from ".";

describe("Test of printChars()", function () {

  it("Should return '* * '", function () {
    expect(printChars("* ", 2)).toEqual("* * ");
  });

});

describe("Test of equivalentTopHalfIndex()", function () {

  it("Should return 0", function () {
    expect(equivalentTopHalfIndex(0, 3)).toEqual(0);
  });

  it("Should return 1", function () {
    expect(equivalentTopHalfIndex(1, 3)).toEqual(1);
  });

  it("Should return 0", function () {
    expect(equivalentTopHalfIndex(2, 3)).toEqual(0);
  });


});

describe("Test of printLine()", function () {

  it("Should return '* '", function () {
    expect(printLine(0, 1)).toEqual("* \n");
  });

  it("Should return '  *   '", function () {
    expect(printLine(0, 3)).toEqual("  *   \n");
  });

});

describe("Test of diamond()", function () {

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
