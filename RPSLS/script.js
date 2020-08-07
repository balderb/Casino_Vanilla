// make a function that compares the two choices
function game() {
  function compare(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
      return `<span>Tie</span><br>it's a tie!`;
    } else if (userChoice == "rock") {
      if (computerChoice == "scissors") {
        scorePlayerRPSLS();
        return `<span>Congratulations</span><br>rock crushes scissors <br> You Win!`;
      } else if (computerChoice == "paper") {
        return "<span>Sorry</span><br>paper covers rock <br> You Lose";
      } else if (computerChoice == "lizard") {
        scorePlayerRPSLS();
        return `<span>Congratulations</span><br>rock crushes lizard <br> You Win!`;
      } else if (computerChoice == "spock") {
        return "<span>Sorry</span><br> spock vaporizes rock <br> You Lose";
      }
    } else if (userChoice == "paper") {
      if (computerChoice == "scissors") {
        return "<span>Sorry</span><br> scissors cut paper <br> You Lose";
      } else if (computerChoice == "rock") {
        scorePlayerRPSLS();
        return `<span>Congratulations</span><br>paper covers rock <br> You Win!`;
      } else if (computerChoice == "lizard") {
        return "<span>Sorry</span><br> lizard eats paper <br> You Lose";
      } else if (computerChoice == "spock") {
        scorePlayerRPSLS();
        return `<span>Congratulations</span><br>paper disproves spock <br> You Win!`;
      }
    } else if (userChoice == "scissors") {
      if (computerChoice == "paper") {
        scorePlayerRPSLS();
        return `<span>Congratulations</span><br>scissors cut paper <br> You Win!`;
      } else if (computerChoice == "rock") {
        return "<span>Sorry</span><br> rock crushes scissors <br> You Lose!";
      } else if (computerChoice == "lizard") {
        scorePlayerRPSLS();
        return `<span>Congratulations</span><br>scissors decapitate lizard <br> You Win!`;
      } else if (computerChoice == "spock") {
        return "<span>Sorry</span> <br>spock smashes scissors <br> You Lose";
      }
    } else if (userChoice == "lizard") {
      if (computerChoice == "scissors") {
        return "<span>Sorry</span><br> scissors decapitate lizard <br> You Lose";
      } else if (computerChoice == "rock") {
        return "<span>Sorry</span><br> rock crushes lizard <br> You Lose";
      } else if (computerChoice == "paper") {
        scorePlayerRPSLS();
        return `<span>Congratulations</span><br>lizard eats paper <br> You Win!`;
      } else if (computerChoice == "spock") {
        scorePlayerRPSLS();
        return `<span>Congratulations</span><br>lizard poisons spock <br> You Win!`;
      }
    } else if (userChoice == "spock") {
      if (computerChoice == "scissors") {
        scorePlayerRPSLS();
        return `<span>Congratulations</span><br>spock smashes scissors <br> You Win!`;
      } else if (computerChoice == "rock") {
        scorePlayerRPSLS();
        return "<span>Congratulations</span><br>spock vaporizes rock <br> You Win!";
      } else if (computerChoice == "lizard") {
        return "<span>Sorry</span><br> lizard poisons spock <br> You Lose";
      } else if (computerChoice == "paper") {
        return "<span>Sorry</span><br> paper disproves spock <br> You Lose";
      }
    }
  }

  // the computer picks a random number between 0 and 1 and store it into a variable
  let computerChoice = Math.random();

  // give the randomly picked number from above a value (to compare later on)
  if (computerChoice < 0.2) {
    computerChoice = "rock";
    // assign the value rock
  } else if (computerChoice < 0.4) {
    computerChoice = "paper";
  } else if (computerChoice < 0.6) {
    computerChoice = "scissors";
  } else if (computerChoice < 0.8) {
    computerChoice = "lizard";
  } else if (computerChoice < 1) {
    computerChoice = "spock";
  }

  // Now the user has to pick a button
  // the user picks ROCK
  function buttons() {
    document
      .getElementById("button-rock")
      .addEventListener("click", function (e) {
        // do something when the button is clicked
        let userChoice = "rock"; // Make a variable for the user (also possible: document.getElementById('button-rock').value)
        document.getElementById("src-player").src = "../assets/rock.svg"; // change the source of the image when you press the button
        // console.log(userChoice); // just for checking
        // console.log(computerChoice); // just for checking

        document
          .getElementById("computer")
          .addEventListener("click", function (event) {
            switch (computerChoice) {
              case 0:
                computerChoice = "rock";
                break;
              case 1:
                computerChoice = "paper";
                break;
              case 2:
                computerChoice = "scissors";
                break;
              case 3:
                computerChoice = "lizard";
                break;
              case 4:
                computerChoice = "spock";
                break;
            } // after the click on the rock button, do something when clicking on the computer button
            document.getElementById(
              "src-computer"
            ).src = `../assets/${computerChoice}.svg`;
            document.getElementById("target").innerHTML = result;
          }); // change the source of the image to the value that the computer picked
        let result = compare(userChoice, computerChoice); // compare the two choices with the function compare ()
      });

    // the user picks PAPER
    document
      .getElementById("button-paper")
      .addEventListener("click", function (e) {
        let userChoice = "paper";
        document.getElementById("src-player").src = "../assets/paper.svg";

        document
          .getElementById("computer")
          .addEventListener("click", function (event) {
            switch (computerChoice) {
              case 0:
                computerChoice = "rock";
                break;
              case 1:
                computerChoice = "paper";
                break;
              case 2:
                computerChoice = "scissors";
                break;
              case 3:
                computerChoice = "lizard";
                break;
              case 4:
                computerChoice = "spock";
                break;
            }
            document.getElementById(
              "src-computer"
            ).src = `../assets/${computerChoice}.svg`;
            document.getElementById("target").innerHTML = result;
          });
        let result = compare(userChoice, computerChoice);
      });

    // the user picks SCISSORS
    document
      .getElementById("button-scissors")
      .addEventListener("click", function (e) {
        let userChoice = "scissors";
        document.getElementById("src-player").src = "../assets/scissors.svg";

        document
          .getElementById("computer")
          .addEventListener("click", function (event) {
            switch (computerChoice) {
              case 0:
                computerChoice = "rock";
                break;
              case 1:
                computerChoice = "paper";
                break;
              case 2:
                computerChoice = "scissors";
                break;
              case 3:
                computerChoice = "lizard";
                break;
              case 4:
                computerChoice = "spock";
                break;
            }
            document.getElementById(
              "src-computer"
            ).src = `../assets/${computerChoice}.svg`;
            document.getElementById("target").innerHTML = result;
          });
        let result = compare(userChoice, computerChoice);
      });
    // the user picks LIZARD
    document
      .getElementById("button-lizard")
      .addEventListener("click", function (e) {
        let userChoice = "lizard";
        document.getElementById("src-player").src = "../assets/lizard.svg";

        document
          .getElementById("computer")
          .addEventListener("click", function (event) {
            switch (computerChoice) {
              case 0:
                computerChoice = "rock";
                break;
              case 1:
                computerChoice = "paper";
                break;
              case 2:
                computerChoice = "scissors";
                break;
              case 3:
                computerChoice = "lizard";
                break;
              case 4:
                computerChoice = "spock";
                break;
            }
            document.getElementById(
              "src-computer"
            ).src = `../assets/${computerChoice}.svg`;
            document.getElementById("target").innerHTML = result;
          });
        let result = compare(userChoice, computerChoice);
      });

    // the user picks SPOCK
    document
      .getElementById("button-spock")
      .addEventListener("click", function (e) {
        let userChoice = "spock";
        document.getElementById("src-player").src = "../assets/spock.svg";

        document
          .getElementById("computer")
          .addEventListener("click", function (event) {
            computerChoice = Math.floor(Math.random() * 5);
            switch (computerChoice) {
              case 0:
                computerChoice = "rock";
                break;
              case 1:
                computerChoice = "paper";
                break;
              case 2:
                computerChoice = "scissors";
                break;
              case 3:
                computerChoice = "lizard";
                break;
              case 4:
                computerChoice = "spock";
                break;
            }
            document.getElementById(
              "src-player"
            ).src = `../assets/${computerChoice}.svg`;
            document.getElementById("target").innerHTML = result;
          });
        let result = compare(userChoice, computerChoice);
      });
  }
  buttons();
}

game();

document.getElementById("reset").addEventListener("click", function (event) {
  window.location.reload();
});

// Function to count the score
function scorePlayerRPSLS() {
  let scorePlayerRPSLSValue;
  // then check whether your localStorage item already exists ...
if (sessionStorage.getItem('scorePlayer')) {
  // if so, increase the value and assign it to your variable
  scorePlayerRPSLSValue = parseInt(sessionStorage.getItem('scorePlayer')) + 1;
  // and reset the localStorage item with the new value
  sessionStorage.setItem('scorePlayer', scorePlayerRPSLSValue);
} else {
  // if localStorage item does not exist yet initialize
  // it with your strat value
  sessionStorage.setItem('scorePlayer', 1);
  // and assign start value to your variable
  scorePlayerRPSLSValue = paresInt(sessionStorage.getItem('scorePlayer'));
}
console.log(scorePlayerRPSLSValue);

document.getElementById('computer').addEventListener('click', function(event) {
  document.getElementById("wins").innerHTML = scorePlayerRPSLSValue;
})
}
