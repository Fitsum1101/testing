import { expect, it } from "vitest";
import { generateToken } from "./async";
it("should return valid token when the user give valid data", () => {
  const email = "test@test.com";

  generateToken(email, async (err, token) => {
    expect(token).toBeDefined(2);
    done();
  });
});
