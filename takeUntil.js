const takeUntil = function(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return results;
    }
    results.push(array[i]);
  }
};

module.exports = takeUntil;