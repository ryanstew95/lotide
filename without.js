let without = function(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    const index = array1.indexOf(array2[i]);
    if (index > -1) {
      array1.splice(index, 1);
    }
  }
  return array1;
};


module.exports = without;