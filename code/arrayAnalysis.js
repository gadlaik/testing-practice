function analyze(arr) {
  const min = arr.sort()[0];
  const max = arr.reverse()[0];
  const avg = arr.reduce((total, curr) => (total += curr), 0) / arr.length;
  const length = arr.length;

  return { min, max, avg, length };
}

module.exports = analyze;
