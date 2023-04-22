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

let assertArrayEqual = function(array1,array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};
console.log("assertArrayEqual:");
assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
assertArrayEqual([1, 2, 3], [3, 2, 1]); // => false

assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => false

const flatten = function(arr) {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let q = 0; q < arr[i].length; q++) {
        flatArray.push(arr[i][q]);
      }
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
};

console.log("flatten:");

assertArrayEqual(flatten([1, 2, [3, 4], 5,[6]]), [1, 2, 3, 4, 5, 6]); // => ✅✅✅ Assertion passed: [1, 2, 3, 4, 5, 6] === [1, 2, 3, 4, 5, 6]
assertArrayEqual(flatten([[1, 2, 3], [1]]), [2, 3]);
assertArrayEqual(flatten(["1", "2", "3"]), ["1", "2"]);
