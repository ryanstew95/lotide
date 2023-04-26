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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    Object.keys(object1).forEach(element => {
      if (Object.keys(object2).includes(element) && object1[element] === object2[element]) {
        result = true;
      } else if (Array.isArray(object1[element]) === Array.isArray(object2[element])) {

        result = eqArrays(object1[element], object2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

console.log("TESTONE:");
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual((anotherShirtObject), (shirtObject)); // => true
assertObjectsEqual((longSleeveShirtObject), (shirtObject)); // => false
console.log("TESTTWO:");
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual((multiColorShirtObject) , (anotherMultiColorShirtObject)); // => true
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual((multiColorShirtObject), (longSleeveMultiColorShirtObject)); // => false