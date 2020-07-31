// make a function that compares the two choices
function compare(choice1, choice2) {
  if (choice1 == choice2) {
    return `it's a tie!`
  } else if (choice1 == 'rock') {
    if (choice2 == 'scissors') {
      return `rock crushes scissors <br> You Win!`;
    } else if (choice2 == 'paper') {
      return `paper covers rock <br> You Lose`;
    } else if (choice2 == 'lizard') {
      return `rock crushes lizard <br> You Win!`;
    } else if (choice2 == 'spock') {
      return `spock vaporizes rock <br> You Lose`;
    }
  }

  else if (choice1 == "paper") {
    if (choice2 == "scissors") {
      return `scissors cut paper <br> You Lose`;
    } else if (choice2 == "rock") {
      return `paper covers rock <br> You Win!`;
    } else if (choice2 == "lizard") {
      return `lizard eats paper <br> You Lose`;
    } else if (choice2 == 'spock') {
      return `paper disproves spock <br> You Win!`;
    }
  }

  else if (choice1 == "scissors") {
    if (choice2 == "paper") {
      return `scissors cut paper <br> You Win!`;
    } else if (choice2 == "rock") {
      return `rock crushes scissors <br> You Lose!`;
    } else if (choice2 == "lizard") {
      return `scissors decapitate lizard <br> You Win!`;
    } else if (choice2 == 'spock') {
      return `spock smashes scissors <br> You Lose`;
    }
  }

  else if (choice1 == "lizard") {
    if (choice2 == "scissors") {
      return `scissors decapitate lizard <br> You Lose`;
    } else if (choice2 == "rock") {
      return `rock crushes lizard <br> You Lose`;
    } else if (choice2 == "paper") {
      return `lizard eats paper <br> You Win!`;
    } else if (choice2 == 'spock') {
      return `lizard poisons spock <br> You Win!`;
    }
  }

  else if (choice1 == "spock") {
    if (choice2 == "scissors") {
      return `spock smashes scissors <br> You Win!`;
    } else if (choice2 == "rock") {
      return `spock vaporizes rock <br> You Win!`;
    } else if (choice2 == "lizard") {
      return `lizard poisons spock <br> You Lose`;
    } else if (choice2 == 'paper'){
      return `paper disproves spock <br> You Lose`;
    }
  }
};



// the computer picks a random number between 0 and 1 and store it into a variable
  let computerChoice = Math.random();

  // give the randomly picked number from above a value (to compare later on)
  if (computerChoice < 0.2) {
    computerChoice = 'rock' // assign the value rock
  } else if (computerChoice < 0.4) {
    computerChoice = 'paper'

  } else if (computerChoice < 0.6) {
    computerChoice = 'scissors'
    
  } else if (computerChoice < 0.8) {
    computerChoice = 'lizard'
    
  } else if (computerChoice < 1) {
    computerChoice = 'spock'
  };




// Now the user has to pick a button
// the user picks ROCK
document.getElementById('button-rock').addEventListener('click', function (e) { // do something when the button is clicked
  let userChoice = 'rock'; // Make a variable for the user (also possible: document.getElementById('button-rock').value)
  document.getElementById('src-player').src = 'img/rock.svg'; // change the source of the image when you press the button
  // console.log(userChoice); // just for checking
  // console.log(computerChoice); // just for checking

  document.getElementById('computer').addEventListener('click', function(event) { // after the click on the rock button, do something when clicking on the computer button
    document.getElementById('src-computer').src = `img/${computerChoice}.svg` // change the source of the image to the value that the computer picked
    let result = compare(userChoice, computerChoice); // compare the two choices with the function compare ()
    document.getElementById('target').textContent = result;
  });
});

// the user picks PAPER
document.getElementById('button-paper').addEventListener('click', function (e) {
  let userChoice = 'paper';
  document.getElementById('src-player').src = 'img/paper.svg';


  document.getElementById('computer').addEventListener('click', function(event) {
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
    let result = compare(userChoice, computerChoice);
    document.getElementById('target').textContent = result;
  });
});

// the user picks SCISSORS
document.getElementById('button-scissors').addEventListener('click', function (e) {
  let userChoice = 'scissors'
  document.getElementById('src-player').src = 'img/scissors.svg';


  document.getElementById('computer').addEventListener('click', function(event) {
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
    let result = compare(userChoice, computerChoice);
    document.getElementById('target').textContent = result;
  });
});

// the user picks LIZARD
document.getElementById('button-lizard').addEventListener('click', function (e) {
  let userChoice = 'lizard';
  document.getElementById('src-player').src = 'img/lizard.svg';


  document.getElementById('computer').addEventListener('click', function(event) {
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
    let result = compare(userChoice, computerChoice);
    document.getElementById('target').textContent = result;
  });
});

// the user picks SPOCK
document.getElementById('button-spock').addEventListener('click', function (e) {
  let userChoice = 'spock';
  document.getElementById('src-player').src = 'img/spock.svg';


  document.getElementById('computer').addEventListener('click', function(event) {
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
    let result = compare(userChoice, computerChoice);
    document.getElementById('target').textContent = result;
    
  });
});

document.getElementById('reset').addEventListener('click', function(event) {
  location.reload();
})
