function reverseNumber(input) {
  let negative,
    power = 1,
    value,
    result = 0;
  if (input < 0) {
    negative = true;
    input *= -1;
  } else {
    negative = false;
  }
  value = input;
  while (value >= 10) {
    power *= 10;
    value /= 10;
  }
  for (; power >= 1; power /= 10) {
    result += power * (input % 10);
    input = Math.floor(input / 10);
  }
  if (negative) {
    result *= -1;
  }
  return result;
}
console.log(reverseNumber(-2001));