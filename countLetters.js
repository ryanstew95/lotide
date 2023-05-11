const countLetters = function(str) {
  const count = {};
  for (let i = 0; i < str.length; i++) {
  
    if (count[str[i]]) {
      count[str[i]] += 1;
    } else {
      count[str[i]] = 1;
    }
  }
  return count;
};
module.exports = countLetters;
