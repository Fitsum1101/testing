export const sum = (a, b) => {
  const typeofA = typeof a;
  const typeofB = typeof b;
  if (
    typeofA !== "number" ||
    typeofA !== "string" ||
    typeofB !== "number" ||
    typeofB !== "string"
  ) {
    return 0;
  }
  return +a + +b;
};
