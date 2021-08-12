const caesar = require("../code/cipher");

test("Will it cipher", () => expect(caesar("abc a B")).toBe("bcd b B"));
