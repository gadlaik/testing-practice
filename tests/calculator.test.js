const calculator = require("../code/calculator");

test("Can it add?", () => expect(calculator.add(3, 3)).toBe(6));
test("Can it subtract?", () => expect(calculator.sub(3, 3)).toBe(0));
test("Can it multiply?", () => expect(calculator.multi(3, 3)).toBe(9));
test("Can it divide?", () => expect(calculator.divide(3, 3)).toBe(1));
