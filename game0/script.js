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

  //If the user chose paper...
  else if (choice1 == "paper") {
    if (choice2 == "scissors") {
      console.log("Scissors wins!");
    } else if (choice2 == "rock") {
      console.log("Paper wins!");
    } else if (choice2 == "lizard") {
      console.log("Lizard wins!");
    } else {
      console.log("Paper wins!");
    }
  }

  //If the user chose scissors...
  else if (choice1 == "scissors") {
    if (choice2 == "paper") {
      console.log("Scissors wins!");
    } else if (choice2 == "rock") {
      console.log("Rock wins!");
    } else if (choice2 == "lizard") {
      console.log("Scissors wins!");
    } else {
      console.log("Spock wins!");
    }
  }

  //If the user chose lizard...
  else if (choice1 == "lizard") {
    if (choice2 == "scissors") {
      console.log("Scissors wins!");
    } else if (choice2 == "rock") {
      console.log("Rock wins!");
    } else if (choice2 == "paper") {
      console.log("Lizard wins!");
    } else {
      console.log("Lizard wins!");
    }
  }

  //If the user chose spock...
  else if (choice1 == "spock") {
    if (choice2 == "scissors") {
      console.log("Spock wins!");
    } else if (choice2 == "rock") {
      console.log("Spock wins!");
    } else if (choice2 == "lizard") {
      console.log("Lizard wins!");
    } else {
      console.log("Paper wins!");
    }
  }

};

document.getElementById('computer').addEventListener('click', function (event) {

  let computerChoice = Math.random(); // random number between 0 and 1

  // give a value to the randomly picked number between 0-1
  if (computerChoice < 0.2) {
    computerChoice = 'rock' // assign the value rock
    document.getElementById('src-computer').src = 'img/rock.svg' // change the source of the image
  } else if (computerChoice < 0.4) {
    computerChoice = 'paper'
    document.getElementById('src-computer').src = 'img/paper.svg'
  } else if (computerChoice < 0.6) {
    computerChoice = 'scissors'
    document.getElementById('src-computer').src = 'img/scissors.svg'
  } else if (computerChoice < 0.8) {
    computerChoice = 'lizard'
    document.getElementById('src-computer').src = 'img/lizard.svg'
  } else if (computerChoice < 1) {
    computerChoice = 'spock'
    document.getElementById('src-computer').src = 'img/spock.svg'
  };

  // console.log(computerChoice);


// make an event listener
let Userchoice;
document.getElementById('button-rock').addEventListener('click', function (e) {
  Userchoice = document.getElementById('button-rock').value;
});

document.getElementById('button-paper').addEventListener('click', function (e) {
  Userchoice = document.getElementById('button-paper').value;
});

document.getElementById('button-scissors').addEventListener('click', function (e) {
  Userchoice = document.getElementById('button-scissors').value;
});

document.getElementById('button-lizard').addEventListener('click', function (e) {
  Userchoice = document.getElementById('button-lizard').value;
});

document.getElementById('button-spock').addEventListener('click', function (e) {
  Userchoice = document.getElementById('button-spock').value;
});

compare(computerChoice, Userchoice)

});

// make an event listener
let Userchoice;
document.getElementById('button-rock').addEventListener('click', function (e) {
  document.getElementById('src-player').src = 'img/rock.svg';
});

document.getElementById('button-paper').addEventListener('click', function (e) {
  document.getElementById('src-player').src = 'img/paper.svg';
});

document.getElementById('button-scissors').addEventListener('click', function (e) {
  document.getElementById('src-player').src = 'img/scissors.svg';
});

document.getElementById('button-lizard').addEventListener('click', function (e) {
  document.getElementById('src-player').src = 'img/lizard.svg';
});

document.getElementById('button-spock').addEventListener('click', function (e) {
  document.getElementById('src-player').src = 'img/spock.svg';
});