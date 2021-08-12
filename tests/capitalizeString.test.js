const capitalize = require("../code/capitalizeString");

test("Will it capitalize?", () => {
  expect(capitalize("henlo frens")).toEqual("Henlo frens");
});
