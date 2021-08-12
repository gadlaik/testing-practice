const capitalizeString = require("../code/capitalizeString");

test("Will it capitalize?", () => {
  expect(capitalizeString("henlo frens")).toEqual("Henlo frens");
});
