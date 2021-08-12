const anal = require("../code/arrayAnalysis");

test("Can it analyze the array", () => {
  expect(anal([1, 2, 3]).min).toBe(1);
  expect(anal([1, 2, 3]).max).toBe(3);
  expect(anal([1, 2, 3]).avg).toBe(2);
  expect(anal([1, 2, 3]).length).toBe(3);
});
