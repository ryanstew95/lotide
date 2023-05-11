const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns 2 for how many L's in LHL", () => {
    assert.deepEqual(countLetters('LHL').L, (2));
  });
  it("returns 1 for how many r's in ryan", () => {
    assert.deepEqual(countLetters('ryan').r, (1));
  });
  it("returns 3 for how many a's in how many characters", () => {
    assert.deepEqual(countLetters('how many characters').a, (3));
  });
});