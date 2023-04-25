const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀😀😀Assertion Passed: "  + `${actual}` + " === " + `${expected}`);
  } else {
    (actual !== expected);
    console.log("🤬🤬🤬Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
  }
};

let countLetters = function(str,letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter)
      console.log(str,charAt(i));
    count++;
  }
  return count;
};

assertEqual(countLetters('LHL'), (3));
assertEqual(countLetters('ryan'), (4));
assertEqual(countLetters('how many characters'), (19));
// spaces count as a character