import { sum } from "./add-number";
import { it, expect, describe } from "vitest";
it("should return 0 if it called with out paramiters", function () {
  const result = sum();
});


it("should return invalid if the parameters are other than string and number", function () {
  const a = {};
  const b = 1;

  const result = sum(a, b);
  expect(result).toBe(0);
});
