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

const assertArrayEqual = function(array1,array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};

const takeUntil = function(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return results;
    }
    results.push(array[i]);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ["Testing", "one", "two", "three", ",", "Testing", "one", "two", "three", "!"];
const results3 = takeUntil(data3, x => x === ',');
console.log(results3);

assertArrayEqual(results1, data1.slice(0, 5));
assertArrayEqual(results2, data2.slice(0, 4));
assertArrayEqual(results3, data3.slice(0, 4));
