describe("pow", function() {

  describe("raises x to power of 3", () => {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, () => {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; ++x) {
      makeTest(x);
    }
  });

  it("for negative n the result is NaN", () => {
    assert.isNaN(pow(2, -1));
  });

  it ("for non-integer n the result is NaN", () => {
    assert.isNaN(pow(2, 1.5));
  });

});
