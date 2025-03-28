export const sum = (a, b) => {
  const typeofA = typeof a;
  const typeofB = typeof b;
  if (
    typeofA === "number" ||
    typeofA === "string" ||
    typeofB === "number" ||
    typeofB === "string"
  ) {
    return +a + +b;
  }
  return 0;
};

console.log(sum(1, 2));
