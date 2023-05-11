const eqArrays = require('./eqArrays');
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
module.exports = eqObjects;

