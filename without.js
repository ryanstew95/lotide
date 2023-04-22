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

let without = function(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    const index = array1.indexOf(array2[i]);
    if (index > -1) { // only splice array when item is found
      array1.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  return array1;
};

console.log("without:");

assertArrayEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]