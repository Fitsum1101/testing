import { sum } from "./add-number";
import { it, expect, describe } from "vitest";
it("should return 0 if it called with out paramiters", function () {
  const result = sum();
});


const newPromise = new Promise((resolve, reject) => {
  reject("something is wrong");
  resolve(() => {
    return new Promise((innerResolve) => {
      innerResolve("inner resolve");
    });
  });
});