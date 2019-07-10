function isInteger(num) {
  let isInt = false;
  if (typeof num === "number") {
    if (num % 1 === 0) {
      isInt = true;
    }
  }
  return isInt;
}
console.log(isInteger(5.1));
