const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');
// const assertEqual = require('../assertEqual');
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns drama for the wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns comedy for brooklyn nine-nine", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
  it("returns scifi for the expanse", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  });
});