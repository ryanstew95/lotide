const assert = require('chai').assert;
const map = require('../map');
const soda = ["cocaCola", "drPepper", "rootBeer", "creamSoda", "iceTea"];

const lowerSodas = map(soda, (soda) => soda.toLowerCase());
const upperSodas = map(soda, (soda) => soda.toUpperCase());
const dietSodas = map(soda, (soda) => "diet " + soda);

describe("#map", () => {
  it("returns soda's to lower case letters", () => {
    assert.deepEqual((lowerSodas),(['cocacola', 'drpepper', 'rootbeer', 'creamsoda', 'icetea']));
  });

  it("returns soda's to upper case letters", () => {
    assert.deepEqual((upperSodas),(['COCACOLA', 'DRPEPPER', 'ROOTBEER', 'CREAMSODA', 'ICETEA']));
  });

  it("returns soda's to diet soda's", () => {
    assert.deepEqual((dietSodas),(['diet cocaCola', 'diet drPepper', 'diet rootBeer', 'diet creamSoda', 'diet iceTea']));
  });
  
});