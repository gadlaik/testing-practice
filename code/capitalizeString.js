function capitalize(str) {
  return str.slice(0, 1).toLocaleUpperCase() + str.slice(1, str.length);
}

module.exports = capitalize;
