const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀😀😀Assertion Passed: [actual] === [expected]");
  } else {
    (actual !== expected);
    console.log("🤬🤬🤬Assertion Failed: [actual] !== [expected]");
  }
};


(assertEqual("Lighthouse Labs", "Bootcamp"));
(assertEqual(1, 1));
(assertEqual("ryan", "ryan"));
(assertEqual("pie", "apple"));
(assertEqual(4, 4));
(assertEqual(4, 4.4));


