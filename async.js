import { sign } from "jsonwebtoken";

export const generateToken = (email, cb) => {
  return sign({email}, "mysecret", cb);
};

