let play = confirm('Do you want to play a game?');
if (play) {
  let continueGame = true;
  let two=2;
  let increaseNumber=4;
  let pocket,
    guess,
    message,
    currentPrize;
  while (continueGame) {
    let totalPrize = 0,
      bazePrize = 100,
      maxNumber = 8;
    for (; continueGame; maxNumber += increaseNumber, bazePrize *= two) {
      pocket = Math.floor(Math.random() * (maxNumber + 1));
      let attempts = 3;
      for (currentPrize = bazePrize; attempts > 0; attempts--) {
        message = 'Choose a roulette pocket number from 0 to ' + maxNumber;
        message += '\nAttempts left: ' + attempts;
        message += '\nPrize: ' + totalPrize;
        message += '\nPossible prize on current attempt: ' + currentPrize + '$';
        guess = prompt(message);
        guess = Number(guess);
        if (guess === pocket) {
          totalPrize += currentPrize;
          break;
        }
        currentPrize /= two;
      }
      if (attempts > 0) {
        message = 'Congratulation, you won!   Your prize is: ' + currentPrize + '$. Do you want to continue?';
        continueGame = confirm(message);
        if (!continueGame) {
          alert('Thank you for your participation. Your prize is: ' + totalPrize + ' $');
          continueGame = confirm('Do you want to play a game?');
          break;
        }
      } else {
        totalPrize = 0;
        alert('Thank you for your participation. Your prize is: ' + totalPrize + ' $');
        continueGame = confirm('Do you want to play a game?');
        break;
      }
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}