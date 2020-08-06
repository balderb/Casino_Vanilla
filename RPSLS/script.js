/// make a function that compares the two choices
function game() {
  function compare(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
      return `<span>Tie</span><br>it's a tie!`;
    } else if (userChoice == "rock") {
    if (computerChoice == "scissors") {
      playerScore++;
        return `<span>Congratulations</span><br>rock crushes scissors <br> You Win!`;
      } else if (computerChoice == "paper") {
        computerScore++;
        return '<span>Sorry</span><br>paper covers rock <br> You Lose';
      } else if (computerChoice == "lizard") {
        playerScore++;
        return `<span>Congratulations</span><br>rock crushes lizard <br> You Win!`;
      } else if (computerChoice == "spock") {
        computerScore++;
        return '<span>Sorry</span><br> spock vaporizes rock <br> You Lose';
      }
    } else if (userChoice == "paper") {
      if (computerChoice == "scissors") {
        computerScore++;
        return '<span>Sorry</span><br> scissors cut paper <br> You Lose';
      } else if (computerChoice == "rock") {
        playerScore++;
        return `<span>Congratulations</span><br>paper covers rock <br> You Win!`;
      } else if (computerChoice == "lizard") {
        computerScore++;
        return '<span>Sorry</span><br> lizard eats paper <br> You Lose';
      } else if (computerChoice == "spock") {
        playerScore++;
        return `<span>Congratulations</span><br>paper disproves spock <br> You Win!`;
      }
    } else if (userChoice == "scissors") {
      if (computerChoice == "paper") {
        playerScore++;
        return `<span>Congratulations</span><br>scissors ciut paper <br> You Win!`;
      } else if (computerChoice == "rock") {
        computerScore++;
        return '<span>Sorry</span><br> rock crushes scissors <br> You Lose!';
      } else if (computerChoice == "lizard") {
        playerScore++;
        return `<span>Congratulations</span><br>scissors decapitate lizard <br> You Win!`;
      } else if (computerChoice == "spock") {
        computerScore++;
        return '<span>Sorry</span> <br>spock smashes scissors <br> You Lose';
      }
    } else if (userChoice == "lizard") {
      if (computerChoice == "scissors") {
        computerScore++;
        return '<span>Sorry</span><br> scissors decapitate lizard <br> You Lose';
      } else if (computerChoice == "rock") {
        computerScore++;
        return '<span>Sorry</span><br> rock crushes lizard <br> You Lose';
      } else if (computerChoice == "paper") {
        playerScore++;
        return `<span>Congratulations</span><br>lizard eats paper <br> You Win!`;
      } else if (computerChoice == "spock") {
        playerScore++;
        return `<span>Congratulations</span><br>lizard poisons spock <br> You Win!`;
      }
    } else if (userChoice == "spock") {
      if (computerChoice == "scissors") {
        playerScore++;
        return `<span>Congratulations</span><br>spock smashes scissors <br> You Win!`;
      } else if (computerChoice == "rock") {
        playerScore++;
        return '<span>Congratulations</span><br>spock vaporizes rock <br> You Win!';
      } else if (computerChoice == "lizard") {
        computerScore++;
        return '<span>Sorry</span><br> lizard poisons spock <br> You Lose';
      } else if (computerChoice == "paper") {
        computerScore++;
        return '<span>Sorry</span><br> paper disproves spock <br> You Lose';
      }
    }
  }
  let computerScore = 0;
  let playerScore = 0;
  /*function score(userChoice, computerChoice) {
    if (userChoice == "rock") {
     if (computerChoice == "scissors"&& computerChoice == "lizard") {
         playerScore++;
       } else if (computerChoice == "paper" && computerChoice == "spock") {
         computerScore++;
     } else if (userChoice == "paper") {
       if (computerChoice == "scissors" && computerChoice == "lizard") {
         computerScore++;
        }else if  (computerChoice == "rock"&& computerChoice == "spock") {
         playerScore++;
     } 
   }
     else if (userChoice == "scissors") {
      if (computerChoice == "paper" && computerChoice == "spock") {
         playerScore++;
       } else if (computerChoice == "rock"&& computerChoice == "lizard") {
         computerScore++; 
       }
     }
     }else if (userChoice == "lizard") {
       if (computerChoice == "scissors"&& computerChoice == "rock" ) {
         computerScore++;
       } else  if(computerChoice == "paper" && computerChoice == "spock") {
         playerScore++;
       }
     }
     else if (userChoice == "spock") {
       if (computerChoice == "scissors" && computerChoice == "rock" ) {
         playerScore++;
       } else if(computerChoice == "lizard"&& computerChoice == "paper" ) {
         computerScore++;
       }
     }
   }
  */
  // the computer picks a random number between 0 and 1 and store it into a variable
  let computerChoice = Math.random();

  // give the randomly picked number from above a value (to compare later on)
  if (computerChoice < 0.2) {
    computerChoice = "rock"; // assign the value rock
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
  function buttons(){
  
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
           
            document.getElementById("wins").innerHTML =  playerScore;
            
            console.log(computerScore)
           console.log(playerScore)

            
         
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
            document.getElementById("wins").innerHTML = "Wins<br>"+ playerScore;
            
            console.log(computerScore)
            console.log(playerScore)
           
           
         
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
          document.getElementById("wins").innerHTML =playerScore;
            console.log(computerScore)
            console.log(playerScore)
            
          
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
            
            document.getElementById("wins").innerHTML = playerScore;
           
            console.log(computerScore)
           console.log(playerScore)
           
         
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
            document.getElementById("src-player").src = `../assets/${computerChoice}.svg`;
            document.getElementById("target").innerHTML = result;
          });
            let result = compare(userChoice, computerChoice);
            document.getElementById("wins").innerHTML = playerScore;
            
           console.log(computerScore)
           console.log(playerScore)
           
            
          
      });

  }
  buttons();
          }


game();

document.getElementById('reset').addEventListener('click', function (event) {
  window.location.reload();
})