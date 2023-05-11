const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [2, 3]", () => {
    assert.deepEqual(middle([2, 3]), ([]));
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), ([2]));
  });
});


