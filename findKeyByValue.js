// const assertEqual = require('./assertEqual');
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
module.exports = findKeyByValue;