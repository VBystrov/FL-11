let coordinats = prompt('Введіть шість чисел - координати (x,y) для трьох точок');
let isCoordinatsCorrect = true;
let isCenter = false;
let ax = 0,
  ay = 1,
  bx = 2,
  by = 3,
  cx = 4,
  cy = 5;
coordinats = coordinats.trim();
coordinats = coordinats.split(/[\s,]+/);
for (let i = 0; i < coordinats.length; i++) {
  coordinats[i] = Number(coordinats[i]);
  if (isNaN(coordinats[i])) {
    isCoordinatsCorrect = false;
  }
}
if (isCoordinatsCorrect) {
  if ((coordinats[ax] + coordinats[bx]) / 2 === coordinats[cx] && 
        (coordinats[ay] + coordinats[by]) / 2 === coordinats[cy]) {
    isCenter = true;
  }
}
console.log(isCenter);