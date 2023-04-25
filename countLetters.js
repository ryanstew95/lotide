const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀😀😀Assertion Passed: "  + `${actual}` + " === " + `${expected}`);
  } else {
    (actual !== expected);
    console.log("🤬🤬🤬Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
  }
};


const countLetters = function(str) {
  const count = {};
  for (let i = 0; i < str.length; i++) {
    //if the key is there in the count object
    if (count[str[i]]) {
      count[str[i]] += 1; //increase the existing value by 1
    } else { //if the key is not present in the count object
      count[str[i]] = 1;
    }
  }
  return count;
};
console.log(countLetters("lighthouse labs"));


assertEqual(countLetters('LHL').L, (2));
assertEqual(countLetters('ryan').r, (1));
assertEqual(countLetters('how many characters').a, (3));
