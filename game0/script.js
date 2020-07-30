// make a function that compares the two choices
function compare(choice1, choice2) {
  if (choice1 == choice2) {
    console.log('tie')
  } else if (choice1 == 'rock') {
    if (choice2 == 'scissors') {
      console.log("Rock wins");
    } else if (choice2 == 'paper') {
      console.log("Paper wins");
    } else if (choice2 == 'lizard') {
      console.log("Rock wins");
    } else if (choice2 == 'spock') {
      console.log("spock wins");
    }
  }

  else if (choice1 == "paper") {
    if (choice2 == "scissors") {
      console.log("Scissors wins!");
    } else if (choice2 == "rock") {
      console.log("Paper wins!");
    } else if (choice2 == "lizard") {
      console.log("Lizard wins!");
    } else if (choice2 == 'spock') {
      console.log("Paper wins!");
    }
  }

  else if (choice1 == "scissors") {
    if (choice2 == "paper") {
      console.log("Scissors wins!");
    } else if (choice2 == "rock") {
      console.log("Rock wins!");
    } else if (choice2 == "lizard") {
      console.log("Scissors wins!");
    } else if (choice2 == 'spock') {
      console.log("Spock wins!");
    }
  }

  else if (choice1 == "lizard") {
    if (choice2 == "scissors") {
      console.log("Scissors wins!");
    } else if (choice2 == "rock") {
      console.log("Rock wins!");
    } else if (choice2 == "paper") {
      console.log("Lizard wins!");
    } else if (choice2 == 'spock') {
      console.log("Lizard wins!");
    }
  }

  else if (choice1 == "spock") {
    if (choice2 == "scissors") {
      console.log("Spock wins!");
    } else if (choice2 == "rock") {
      console.log("Spock wins!");
    } else if (choice2 == "lizard") {
      console.log("Lizard wins!");
    } else if (choice2 == 'paper'){
      console.log("Paper wins!");
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
    compare(userChoice, computerChoice); // compare the two choices with the function compare ()
  });
});

// the user picks PAPER
document.getElementById('button-paper').addEventListener('click', function (e) {
  let userChoice = 'paper';
  document.getElementById('src-player').src = 'img/paper.svg';
  console.log(userChoice);
  console.log(computerChoice);

  document.getElementById('computer').addEventListener('click', function(event) {
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
    compare(userChoice, computerChoice);
  });
});

// the user picks SCISSORS
document.getElementById('button-scissors').addEventListener('click', function (e) {
  let userChoice = 'scissors'
  document.getElementById('src-player').src = 'img/scissors.svg';
  console.log(userChoice);
  console.log(computerChoice);

  document.getElementById('computer').addEventListener('click', function(event) {
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
    compare(userChoice, computerChoice);
  });
});

// the user picks LIZARD
document.getElementById('button-lizard').addEventListener('click', function (e) {
  let userChoice = 'lizard';
  document.getElementById('src-player').src = 'img/lizard.svg';
  console.log(userChoice);
  console.log(computerChoice);

  document.getElementById('computer').addEventListener('click', function(event) {
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
    compare(userChoice, computerChoice);
  });
});

// the user picks SPOCK
document.getElementById('button-spock').addEventListener('click', function (e) {
  let userChoice = 'spock';
  document.getElementById('src-player').src = 'img/spock.svg';
  console.log(userChoice);
  console.log(computerChoice);

  document.getElementById('computer').addEventListener('click', function(event) {
    compare(userChoice, computerChoice);
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
  });
});
