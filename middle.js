let assertArrayEqual = function(array1,array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};
let eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1.length === array2.length) {
      if (array1[i] === array2[i]) {
        return true;
      } else return false;
    }
  }
  return true;
};

// Implement middle which will take in an array and return the middle-most element(s) of the given array.
// [x] return empty for arrays with on or two elements
// [x] for arrays with odd number elements, an array containing a single middle element should be returned
// [x] for arrays with an even number of elements, an array containing the two elements in the middle should be return
// [x] write test for various scenarios

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    let newArray = [];
    let middleNum = Math.round(array.length / 2);
    newArray.push(array[middleNum - 1]);
    return newArray;
  }
};
// test code
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2]), []);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);