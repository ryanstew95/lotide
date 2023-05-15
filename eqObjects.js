const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  let result = false;
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const arrIsArr = Array.isArray;

  if (keys1.length === keys2.length) {

    keys1.forEach(element => {
      if (keys2.includes(element) && object1[element] === object2[element]) {
        result = true;

      } else if (arrIsArr(object1[element]) === arrIsArr(object2[element])) {
        result = eqArrays(object1[element], object2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};

module.exports = eqObjects;

