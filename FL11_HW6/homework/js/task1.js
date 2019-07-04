let coordinats = prompt('Введіть шість чисел - координати (x,y) для трьох точок');
coordinats = coordinats.trim();
coordinats = coordinats.split(/[\s,]+/);
let isCoordinatsCorrect = true;
let isCenter = false;
for (let i = 0; i < 6; i++) {
  coordinats[i] = Number(coordinats[i]);
  if (isNaN(coordinats[i])) {
    isCoordinatsCorrect = false;
  }
}
if (isCoordinatsCorrect) {
  if ((coordinats[0] + coordinats[2]) / 2 === coordinats[4] && (coordinats[1] + coordinats[3]) / 2 === coordinats[5]) {
    isCenter = true;
  }
}
console.log(isCenter);