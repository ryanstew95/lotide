const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]);


describe("#tail", () => {
  it("returns 3 for [2, 3]", () => {
    assert.deepEqual(tail([2, 3]), ([3]));
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), ([2, 3]));
  });
});


