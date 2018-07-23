'use strict';
var replaceDots = function (str) {
  return str.replace(/\./g, '-');
}

describe("Example Tests", function () {

  it("test dots", function () {
    Test.assertEquals(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");
  });

});