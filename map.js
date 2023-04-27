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

const soda = ["cocaCola", "drPepper", "rootBeer", "creamSoda", "iceTea"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
  
};


const lowerSodas = map(soda, (soda) => soda.toLowerCase());
assertArrayEqual((lowerSodas),(['cocacola', 'drpepper', 'rootbeer', 'creamsoda', 'icetea']));

const upperSodas = map(soda, (soda) => soda.toUpperCase());
assertArrayEqual((upperSodas), (['COCACOLA', 'DRPEPPER', 'ROOTBEER', 'CREAMSODA', 'ICETEA']));

const dietSodas = map(soda, (soda) => "diet " + soda);
assertArrayEqual((dietSodas), (['diet cocaCola', 'diet drPepper', 'diet rootBeer', 'diet creamSoda', 'diet iceTea']));
