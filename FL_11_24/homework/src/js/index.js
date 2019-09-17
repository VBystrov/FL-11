import showResult from './showResult.js';
import './../scss/styles.scss';
import stoneIcon from '../img/stone.jpg';
import scissorsIcon from '../img/scissors.jpg';
import paperIcon from '../img/paper.jpg';

window.addEventListener('load', function() {
  let counter = 0;
  let computerWins = 0;
  let humanWins = 0;
  var stoneImg = document.getElementById('stone');
  stoneImg.src = stoneIcon;
  stoneImg.addEventListener('click', play);
  var scissorsImg = document.getElementById('scissors');
  scissorsImg.src = scissorsIcon;
  scissorsImg.addEventListener('click', play);
  var paperImg = document.getElementById('paper');
  paperImg.src = paperIcon;
  paperImg.addEventListener('click', play);
  let resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => {
    counter = 0;
    humanWins = 0;
    computerWins = 0;
    var resultText = document.getElementById('results');
    resultText.innerText = '';
  });

  function play(event) {
    const computerPlay = ['stone', 'scissors', 'paper'];
    let index = Math.floor(Math.random() * 3);
    let humanPlay = event.target.id;
    let result;
    if (humanPlay === computerPlay[index]) {
      result = 'tie';
    } else {
      switch (index) {
        case 0:
          if (humanPlay === 'scissors') {
            result = 'lose';
          } else {
            result = 'win';
          }
          break;
        case 1:
          if (humanPlay === 'paper') {
            result = 'lose';
          } else {
            result = 'win';
          }
          break;
        case 2:
          if (humanPlay === 'stone') {
            result = 'lose';
          } else {
            result = 'win';
          }
          break;
        default:
          result = 'ERRROR';
          break;
      }
    }
    if (result === 'lose') {
      computerWins++;
    }
    if (result === 'win') {
      humanWins++;
    }
    counter++;
    showResult(
      `\nRound ${counter}, ${humanPlay} vs. ${computerPlay[index]}, You’ve ${result}!`
    );
    if (counter === 3) {
      showResult(`\nEnd game. Wins: ${humanWins}. Loses: ${computerWins}`);
      counter = 0;
    }
  }
});
