const reverseString = require("../code/reverseString");

test("Reverse a word", () => expect(reverseString("Potato")).toBe("otatoP"));

test("Reverse a string", () =>
  expect(reverseString("Ana voli Milovana")).toBe("anavoliM ilov anA"));
