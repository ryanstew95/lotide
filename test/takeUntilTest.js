const assert = require('chai').assert;
const takeUntil = require('../takeUntil');


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

describe("#takeUntil", () => {
  it("arrays are equal", () => {
    assert.deepEqual(results1, data1.slice(0, 5));
  });
  it("arrays are equal", () => {
    assert.deepEqual(results2, data2.slice(0, 4));
  });
});