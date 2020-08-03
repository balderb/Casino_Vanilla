// make a function that compares the two choices
let computerScore = 0;
let playerScore = 0;
function compare(choice1, choice2) {
  
  if (choice1 == choice2) {
    return `it's a tie!`
  } else if (choice1 == 'rock') {
    
    if (choice2 == 'scissors') {
      playerScore++;
     // document.getElementById("player-score").innerHTML = playerScore;
      //document.getElementById("computer-score").innerHTML = computerScore;
      return `rock crushes scissors <br> You Win!`;
    } else if (choice2 == 'paper') {
      computerScore++;
     //document.getElementById("computer-score").innerHTML = computerScore;
     //document.getElementById("player-score").innerHTML = playerScore;
      return `paper covers rock <br> You Lose`;
    } else if (choice2 == 'lizard') {
      playerScore++;
      //document.getElementById("player-score").innerHTML = playerScore;
      //document.getElementById("computer-score").innerHTML = computerScore;
      return `rock crushes lizard <br> You Win!`;
    } else if (choice2 == 'spock') {
      computerScore++;
     // document.getElementById("computer-score").innerHTML = computerScore;
     //document.getElementById("player-score").innerHTML = playerScore;
      return `spock vaporizes rock <br> You Lose`;
    }
  
  }

  else if (choice1 == "paper") {
    if (choice2 == "scissors") {
      computerScore++;
     // document.getElementById("computer-score").innerHTML = computerScore;
    // document.getElementById("player-score").innerHTML = playerScore;
      return `scissors cut paper <br> You Lose`;
    } else if (choice2 == "rock") {
      playerScore++;
     // document.getElementById("player-score").innerHTML = playerScore;
     // document.getElementById("computer-score").innerHTML = computerScore;
      return `paper covers rock <br> You Win!`;
    } else if (choice2 == "lizard") {
      computerScore++;
   //   document.getElementById("computer-score").innerHTML = computerScore;
    // document.getElementById("player-score").innerHTML = playerScore;
      return `lizard eats paper <br> You Lose`;
    } else if (choice2 == 'spock') {
      playerScore++;
    //  document.getElementById("player-score").innerHTML = playerScore;
    //  document.getElementById("computer-score").innerHTML = computerScore;
      return `paper disproves spock <br> You Win!`;
    }
  }

  else if (choice1 == "scissors") {
    if (choice2 == "paper") {
      playerScore++;
    //  document.getElementById("player-score").innerHTML = playerScore;
    //  document.getElementById("computer-score").innerHTML = computerScore;
      return `scissors c;ut paper <br> You Win!`;
    } else if (choice2 == "rock") {
      computerScore++;
    //  document.getElementById("computer-score").innerHTML = computerScore;
    //  document.getElementById("player-score").innerHTML = playerScore;
      return `rock crushes scissors <br> You Lose!`;
    } else if (choice2 == "lizard") {
      computerScore++;
    //  document.getElementById("player-score").innerHTML = playerScore;
    //  document.getElementById("computer-score").innerHTML = computerScore;
      return `scissors decapitate lizard <br> You Win!`;
    } else if (choice2 == 'spock') {
      computerScore++;
    //  document.getElementById("computer-score").innerHTML = computerScore;
    // document.getElementById("player-score").innerHTML = playerScore;
      return `spock smashes scissors <br> You Lose`;
    }
  }

  else if (choice1 == "lizard") {
    if (choice2 == "scissors") {
      computerScore++;
    //  document.getElementById("computer-score").innerHTML = computerScore;
    //  document.getElementById("player-score").innerHTML = playerScore;
      return `scissors decapitate lizard <br> You Lose`;
    } else if (choice2 == "rock") {
      computerScore++;
    //  document.getElementById("computer-score").innerHTML = computerScore;
    // document.getElementById("player-score").innerHTML = playerScore;
      return `rock crushes lizard <br> You Lose`;
    } else if (choice2 == "paper") {
      playerScore++;
    //  document.getElementById("player-score").innerHTML = playerScore;
    //  document.getElementById("computer-score").innerHTML = computerScore;
      return `lizard eats paper <br> You Win!`;
    } else if (choice2 == 'spock') {
      playerScore++;
    //  document.getElementById("player-score").innerHTML = playerScore;
    //  document.getElementById("computer-score").innerHTML = computerScore;
      return `lizard poisons spock <br> You Win!`;
    }
  }

  else if (choice1 == "spock") {
    if (choice2 == "scissors") {
      playerScore++;
    //  document.getElementById("player-score").innerHTML = playerScore;
    //  document.getElementById("computer-score").innerHTML = computerScore;
      return `spock smashes scissors <br> You Win!`;
    } else if (choice2 == "rock") {
      playerScore ++;
    //  document.getElementById("player-score").innerHTML = playerScore;
    //  document.getElementById("computer-score").innerHTML = computerScore;
      return `spock vaporizes rock <br> You Win!`;
    } else if (choice2 == "lizard") {
      computerScore++;
    //  document.getElementById("computer-score").innerHTML = computerScore;
    // document.getElementById("player-score").innerHTML = playerScore;
      return `lizard poisons spock <br> You Lose`;
    } else if (choice2 == 'paper'){
      computerScore++;
    //  document.getElementById("computer-score").innerHTML = computerScore;
    //  document.getElementById("player-score").innerHTML = playerScore;
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

  document.getElementById('computer').addEventListener('click', function(event) {
    switch (computerChoice) { 
      case 0: computerChoice = "rock"; 
        break; 
      case 1: computerChoice = "paper"; 
        break; 
      case 2: computerChoice = "scissors"; 
        break; 
      case 3: computerChoice = "lizard";
        break;
      case 4: computerChoice = "spock"; 
        break; 
    }// after the click on the rock button, do something when clicking on the computer button
    document.getElementById('src-computer').src = `img/${computerChoice}.svg` // change the source of the image to the value that the computer picked
    let result = compare(userChoice, computerChoice); // compare the two choices with the function compare ()
    document.getElementById('target').innerHTML = result;
    document.getElementById("computer-score").innerHTML =computerScore;
    document.getElementById("player-score").innerHTML = playerScore;
  });
  
});

// the user picks PAPER
document.getElementById('button-paper').addEventListener('click', function (e) {
  let userChoice = 'paper';
  document.getElementById('src-player').src = 'img/paper.svg';


  document.getElementById('computer').addEventListener('click', function(event) {
    switch (computerChoice) { 
      case 0: computerChoice = "rock"; 
        break; 
      case 1: computerChoice = "paper"; 
        break; 
      case 2: computerChoice = "scissors"; 
        break; 
      case 3: computerChoice = "lizard";
        break;
      case 4: computerChoice = "spock"; 
        break; 
    }
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
    let result = compare(userChoice, computerChoice);
    document.getElementById('target').innerHTML = result;
    document.getElementById("computer-score").innerHTML = (computerScore - 1);
    document.getElementById("player-score").innerHTML = (playerScore - 1);
  });
 
});

// the user picks SCISSORS
document.getElementById('button-scissors').addEventListener('click', function (e) {
  let userChoice = 'scissors'
  document.getElementById('src-player').src = 'img/scissors.svg';


  document.getElementById('computer').addEventListener('click', function(event) {
    switch (computerChoice) { 
      case 0: computerChoice = "rock"; 
        break; 
      case 1: computerChoice = "paper"; 
        break; 
      case 2: computerChoice = "scissors"; 
        break; 
      case 3: computerChoice = "lizard";
        break;
      case 4: computerChoice = "spock"; 
        break; 
    }
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
    let result = compare(userChoice, computerChoice);
    document.getElementById('target').innerHTML = result;
    document.getElementById("computer-score").innerHTML = (computerScore - 1);
    document.getElementById("player-score").innerHTML = (playerScore - 1);
  });
  
});

// the user picks LIZARD
document.getElementById('button-lizard').addEventListener('click', function (e) {
  let userChoice = 'lizard';
  document.getElementById('src-player').src = 'img/lizard.svg';


  document.getElementById('computer').addEventListener('click', function(event) {
    switch (computerChoice) { 
      case 0: computerChoice = "rock"; 
        break; 
      case 1: computerChoice = "paper"; 
        break; 
      case 2: computerChoice = "scissors"; 
        break; 
      case 3: computerChoice = "lizard";
        break;
      case 4: computerChoice = "spock"; 
        break; 
   
    }
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
    let result = compare(userChoice, computerChoice);
    document.getElementById('target').innerHTML = result;
    document.getElementById("computer-score").innerHTML = (computerScore - 1);
    document.getElementById("player-score").innerHTML = (playerScore - 1);

});

});

// the user picks SPOCK
document.getElementById('button-spock').addEventListener('click', function (e) {
  let userChoice = 'spock';
  document.getElementById('src-player').src = 'img/spock.svg';


  document.getElementById('computer').addEventListener('click', function(event) {

    computerChoice = Math.floor(Math.random() * 5);
    switch (computerChoice) { 
      case 0: computerChoice = "rock"; 
        break; 
      case 1: computerChoice = "paper"; 
        break; 
      case 2: computerChoice = "scissors"; 
        break; 
      case 3: computerChoice = "lizard";
        break;
      case 4: computerChoice = "spock"; 
        break; 
    }
    document.getElementById('src-computer').src = `img/${computerChoice}.svg`
    let result = compare(userChoice, computerChoice);
    document.getElementById('target').innerHTML = result;
    document.getElementById("computer-score").innerHTML = computerScore ;
    document.getElementById("player-score").innerHTML = playerScore;
    
  });
 
});

