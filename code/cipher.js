function caesar(val) {
  const plain = "abcdefghijklmnopqrstuvwxyz";
  let cipher = [];

  Array.from(val).forEach((letter) => {
    if (!plain.includes(letter)) cipher.push(letter);
    else if (letter && plain.indexOf(letter) + 1 == 26) cipher.push("a");
    else if (letter) cipher.push(plain[plain.indexOf(letter) + 1]);
  });

  return cipher.join("");
}

module.exports = caesar;
