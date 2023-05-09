const assertArrayEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2]), []);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);