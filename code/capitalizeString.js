function capitalizeString(str) {
  return (
    str.trim().slice(0, 1).toLocaleUpperCase() + str.trim().slice(1, str.length)
  );
}

module.exports = capitalizeString;
