const countLetters = function(str) {
  
  const count = {};
  for (let i = 0; i < str.length; i++) {
  
    let letters = count[str[i]];

    if (letters) {
      letters += 1;
    } else {
      letters = 1;
    }
  }
  return count;
};

module.exports = countLetters;
