
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀😀😀Assertion Passed: "  + `${actual}` + " === " + `${expected}`);
  } else {
    (actual !== expected);
    console.log("🤬🤬🤬Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
  }
};

// [x] Implement the function findKeyByValue which takes in an object and a value.
// [x] It should scan the object and return the first key which contains the given value.
// [x] If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) {
  let objectkeys = Object.keys(object);
  let index = 0;
  for (let element in object) {
    if (object[element] === value) {
      return objectkeys[index];
    }
    index++;
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");