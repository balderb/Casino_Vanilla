const cards = document.querySelectorAll('.memory-card'); // make a nodelist

let hasFlippedCard = false; // The player has not flipped a card yet
let lockBoard = false; // The board is not locked in the beginning
let firstCard;
let secondCard;

function flipCard() {
  if (lockBoard) return; // you can play unless this is true (= locked)
  if (this === firstCard) return; //If we click the same card two times, don't execute the function

  this.classList.add('flip') //Add a class to each card

  if (!hasFlippedCard) {
    //first click

    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  hasFlippedCard = false;
  secondCard = this;

  // function to check if the cards match
  checkIfMatch();
  checkIfWin();

}

// This is the function to check if there is a match
function checkIfMatch() {

  if (firstCard.dataset.name === secondCard.dataset.name) {
    // it's a match

    console.log('yeey!');


    // make sure you can not click again
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  } else {
    // It's not a match
    console.log('booo!');
    lockBoard = true; // The board is locked, no more clicking
    setTimeout(() => {
      // flip the cards back after 2s
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard(); // We unlock the board, no cards are flipped, there's no first or second card
    }, 1500);
  }
};

// function to reset the board: unlock board, no cards flipped, no value for firstCard and secondCard
function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
};

// Shuffle the order of the cards using order from flexbox
// Make it an IIFE (immediately invoked function expression) = start when page loads
(function shuffle() {
  cards.forEach(card => { // do this function for every card (div)
    let rdmPosition = Math.floor(Math.random() * 12); // create a random number between 0 and 11
    card.style.order = rdmPosition; // Give the random number to the order (flexbox) of the card
  });
})();

// Go through the nodelist of divs and give them an eventlistener
cards.forEach(card => card.addEventListener('click', flipCard));

// COUNT THE SCORE
function scorePlayerMemory() {
  let scorePlayerMemoryValue;
  // then check whether your localStorage item already exists ...
  if (sessionStorage.getItem('scorePlayerMemory')) {
    // if so, increase the value and assign it to your variable
    scorePlayerMemoryValue = parseInt(sessionStorage.getItem('scorePlayerMemory')) + 1;
    // and reset the localStorage item with the new value
    sessionStorage.setItem('scorePlayerMemory', scorePlayerMemoryValue);
  } else {
    // if localStorage item does not exist yet initialize
    // it with your strat value
    sessionStorage.setItem('scorePlayerMemory', 1);
    // and assign start value to your variable
    scorePlayerMemoryValue = sessionStorage.getItem('scorePlayerMemory');
  }

  document.getElementById("wins").innerHTML = scorePlayerMemoryValue;
}

// TOTAL SCORE
function totalScore() {
  let totalScoreValue;
  // then check whether your localStorage item already exists ...
  if (sessionStorage.getItem('totalScore')) {
    // if so, increase the value and assign it to your variable
    totalScoreValue = parseInt(sessionStorage.getItem('totalScore')) + 1;
    // and reset the localStorage item with the new value
    sessionStorage.setItem('totalScore', totalScoreValue);
  } else {
    // if localStorage item does not exist yet initialize
    // it with your strat value
    sessionStorage.setItem('totalScore', 1);
    // and assign start value to your variable
    totalScoreValue = sessionStorage.getItem('totalScore');
  }

  document.getElementById("total-score").innerHTML = totalScoreValue;
}

// make sure the score stays printed after refreshing the page
document.getElementById("total-score").innerHTML = sessionStorage.getItem('totalScore');
document.getElementById("wins").innerHTML = sessionStorage.getItem('scorePlayerMemory');

// TOTAL GAMES PLAYES
function totalGames() {
  let totalGamesValue;
  // then check whether your localStorage item already exists ...
  if (sessionStorage.getItem('totalGames')) {
    // if so, increase the value and assign it to your variable
    totalGamesValue = parseInt(sessionStorage.getItem('totalGames')) + 1;
    // and reset the localStorage item with the new value
    sessionStorage.setItem('totalGames', totalGamesValue);
  } else {
    // if localStorage item does not exist yet initialize
    // it with your strat value
    sessionStorage.setItem('totalGames', 1);
    // and assign start value to your variable
    totalGamesValue = sessionStorage.getItem('totalGames');
  }

  document.getElementById("games-played").innerHTML = totalGamesValue;
}

function checkIfWin() {
  let test = document.querySelectorAll('.flip').length;

  let memoryCard = document.querySelectorAll('.memory-card').length;

  if (test == memoryCard) {
    totalGames();
    scorePlayerMemory();
    totalScore();
  }
}