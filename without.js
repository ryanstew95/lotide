let without = function(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    const index = array1.indexOf(array2[i]);
    if (index > -1) { // only splice array when item is found
      array1.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  return array1;
};


module.exports = without;