const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArraysEqual');
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};
// assertArrayEqual(letterPositions("hello").e, [1]);
module.exports = letterPositions;
