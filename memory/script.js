const cards = document.querySelectorAll('.memory-card'); // make a nodelist

let hasFlippedCard = false; // The player has not flipped a card yet
let lockBoard = false; // The board is not locked in the beginning
let firstCard;
let secondCard;
let playerscore = 0;
function flipCard() {
  if (lockBoard) return; // you can play unless this is true (= locked)
  if (this === firstCard) return; //If we click the same card two times, don't execute the function

  this.classList.add('flip') //Add a class to each card
 
  if (!hasFlippedCard) {
    //first click
    
    hasFlippedCard = true;
    firstCard = this;
    document.getElementById("wins").innerHTML = playerscore;
    document.getElementById("total-score").innerHTML = playerscore;
    return;
  }

  // second click
  hasFlippedCard = false;
  secondCard = this;

  // function to check if the cards match
  checkIfMatch();

}

// This is the function to check if there is a match
function checkIfMatch() {
  
  if (firstCard.dataset.name === secondCard.dataset.name) {
    // it's a match
    
    console.log('yeey!');
    playerscore ++;
  
    
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
    let rdmPosition = Math.floor(Math.random()*12); // create a random number between 0 and 11
    card.style.order = rdmPosition; // Give the random number to the order (flexbox) of the card
  });
})();

// Go through the nodelist of divs and give them an eventlistener
cards.forEach(card => card.addEventListener('click', flipCard));