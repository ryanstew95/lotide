const flatten = function(arr) {
  let flatArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    
    const arrIsArr = Array.isArray(arr[i]);

    if (arrIsArr) {
      for (let q = 0; q < arr[i].length; q++) {
        flatArray.push(arr[i][q]);
      }
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;