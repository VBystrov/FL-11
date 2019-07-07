let isExist = true;
let message = 'Triangle doesn’t exist';
let lengths = prompt('Введіть три числа - довжини трьох сторін трикутника');
lengths = lengths.trim();
lengths = lengths.split(/[\s,]+/);
let a = Number(lengths[0]);
let b = Number(lengths[1]);
let c = Number(lengths[1+1]);
if (a <= 0 || b <= 0 || c <= 0) {
  isExist = false;
}
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  isExist = false;
}
if (a + b <= c || a + c <= b || b + c <= a) {
  isExist = false;
}
if (isExist) {
  if (a === b && a === c) {
    message = 'Equivalent triangle';
  } else {
    if (a === b || a === c || b === c) {
      message = 'Isosceles triangle';
    } else {
      message = 'Normal triangle';
    }
  }
}
console.log(message);