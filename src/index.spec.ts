import { diamond, printLine, equivalentTopHalfIndex } from ".";

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
    // When
    const d = diamond(0);
    // Then
    console.log(d);
    expect(d).toEqual("");
  });

  it("Should return a diamond of size 1", function () {
    // When
    const d = diamond(1);
    // Then
    console.log(d);
    expect(d).toEqual("* \n");
  });

  it("Should return a diamond of size 3", function () {
    // When
    const d = diamond(3);
    // Then
    console.log(d);
    expect(d).toEqual("  *   \n* * * \n  *   \n");
  });

  it("Should return a diamond of size 7", function () {
    // When
    const d = diamond(7);
    // Then
    console.log(d);
    expect(d).toEqual("      *       \n    * * *     \n  * * * * *   \n* * * * * * * \n  * * * * *   \n    * * *     \n      *       \n");
  });

});
