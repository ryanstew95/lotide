const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀😀😀Assertion Passed: "  + `${actual}` + " === " + `${expected}`);
  } else {
    (actual !== expected);
    console.log("🤬🤬🤬Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
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
  return false;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false