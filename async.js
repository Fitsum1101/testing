import { sign } from "jsonwebtoken";

export const generateToken = (email, cb) => {
  return sign({email}, "mysecret", cb);
};

function heelo() {
  console.log("hi");
}