(function () {

    const suits = ["Spades", "Diamonds", "Clubs", "Hearts"]; // declare a variable with the suits
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // Declare a variable with the values
    let deck = new Array(); // We create an empty array of the deck for the function createDeck ()
  
    // Now we are going to create a deck (of cards) to play with.
    // We're going to pair up each suit from the array above, with each possible value also from the array declared above. And store it in the deck. In this case, Deck variable.
    function createDeck() {
        for (let v = 0; v < values.length; v++) { // We do this for every value
            for (let s = 0; s < suits.length; s++) { // and for every suit
  
                let points = parseInt(values[v]); // convert all the string from the array to integers 
                if (values[v] === "J" || values[v] === "Q" || values[v] === "K")
                    points = 10; // convert the J, Q and K to 10 points
                if (values[v] === "A")
                    points = 11; // convert the A to 11 points
  
                let card = { // create an object for every card and put the values inside it by using properties
                    Value: values[v], 
                    Suits: suits[s],
                    Points: points
                };
                deck.push(card); // Add the card to the and of the deck array
            }
        }
    }
  
    // Create a function that shuffles the order of the deck
    // We are going to pick 2 random locations on the deck, and then switch their values around. We do this 8000 times (s < 8000)
    function scramble() {
        for (let s = 0; s < 8000; s++) { // Do this 8000 times
            let location1 = Math.floor((Math.random() * deck.length));
            let location2 = Math.floor((Math.random() * deck.length));
            
            // now we make a temporary variable to store location1 in. Now we can replace location1 with location2 without losing the value of location1. Then we store the temporary value inside location2
            let tmp = deck[location1];
            deck[location1] = deck[location2];
            deck[location2] = tmp;
        }
    }
  
    // This is the first textaction. We invoke this after they both got two cards and when the players asks for extra cards
    function textActionOne(a, b) {
        let resultOne;
        if (b == 21) {
            resultOne = `I'm sorry, the computer wins!`;
            totalGames();
        } else if (a > 21) {
            resultOne = `You are busted. The computer just won the game!`;
            totalGames();
        } else if (a == 21 && b != 21) {
            resultOne = `Congratulations, you win!`;
            scorePlayer21();
            totalScore();
            totalGames();
        } else if (a == 21 && b == 21) {
            resultOne = `That's a pity, the computer still wins!`;
            totalGames();
        } else if (a < 21 && b > 21) {
            resultOne = `Congratulations, you win!`;
            scorePlayer21();
            totalScore();
            totalGames();
        } else if (a < 21) {
            resultOne = "Please continue! </br> Draw a card or stand your ground against the machine!";
        }
        return resultOne;
    }
  
    // This is the second textaction. We invoke this if the player decides to stand and the computer gets cards
    function textActionTwo(a, b) {
        let resultTwo;
        if (b == 21) {
            resultTwo = `I'm sorry, the computer wins!`;
            totalGames();
        } else if (b > 21) {
            resultTwo = `The computer is busted. You win!`;
            scorePlayer21();
            totalScore();
            totalGames();
        } else if (a < b) {
            resultTwo = `I'm sorry, the computer wins!`;
            totalGames();
        } else if (a > b) {
            resultTwo = `Congratulations, you win!`;
            totalScore();
            scorePlayer21();
            totalGames();
        } else if (a = b) {
            `I'm sorry, the computer wins!`;
            totalGames();
        }
        return resultTwo;
    }
  
    // CREATE ALL THE VARIABLES NEEDED
    let playerCards = []; // an empty array where we can add the player his cards
    let computerCards = []; // an empty array where we can add the computer his cards
    let totalVPlayer = []; // an empty array where we can add the playerCards.points
    let totalVComputer = []; // an empty array where we can add the computerCards.points
    let ActionToTake; // A variable that stores the result of the textaction functions
    let resultPCards = ""; // An empty string to add and print the names of the drawn cards of the player
    let resultPComputer = ""; // An empty string to add and print the names of the drawn cards of the computer
  
    // START THE GAME
    document.getElementById('start').addEventListener('click', () => {
        createDeck();
        scramble();
        playerCards = [deck.pop(), deck.pop()] // add 2 cards to the array playerCards
        computerCards = [deck.pop(), deck.pop()]; // add 2 cards to the array computerCards
  
        totalVPlayer = (playerCards[0].Points) + (playerCards[1].Points); // Get the sum of the 2 player cards
        totalVComputer = (computerCards[0].Points) + (computerCards[1].Points); // Get the sum of the 2 computer cards
        ActionToTake = textActionOne(totalVPlayer, totalVComputer); // Create the text with the result of the first compare function
  
        // Print the text in onto the HTML page inside the DOM
         document.getElementById("output").innerHTML = `${ActionToTake}`; // commented out for redundancy (again^2!)
  



        // *** I DON'T THINK WE NEED THIS PART ANYMORE UNTIL LINE 127 ***
        // Player
        // store the suits and the value of every player card in the empty string resultPCards. Use += to not overwrite each time but add to the string.
        var i;
        for (i = 0; i < playerCards.length; i++) {
            resultPCards += `${playerCards[i].Value} of ${playerCards[i].Suits} </br>`;
        }
        


        // Print the string resultPCards in the HTML
        document.getElementById("result").innerHTML = `Your hand is ${totalVPlayer}`;
        // Change the visibility of the images in the html
        document.getElementById("cardPOne").style.visibility = "visible";
        document.getElementById("cardPTwo").style.visibility = "visible";
        // Change the source of the images so they match the cards values and suits
        document.getElementById('cardPOne').src = `../assets/${playerCards[0].Value}-${playerCards[0].Suits}.png`
        document.getElementById('cardPTwo').src = `../assets/${playerCards[1].Value}-${playerCards[1].Suits}.png`
  
        // Computer
        // store the suits and the value of every computer card in the empty string resultPComputer. Use += to not overwrite each time but add to the string.
        // *** I DON'T THINK WE NEED THIS PART ANYMORE UNTIL LINE 149 ***
        
        var i;
        for (i = 0; i < computerCards.length; i++) {
            resultPComputer += `${computerCards[i].Value} of ${computerCards[i].Suits} </br>`;
        }
  



        // Print the string resultPComputer in the HTML
         document.getElementById("resultComputer").innerHTML = `The computers' hand is ${totalVComputer}`;
        // Change the visibility of the images in the html
        document.getElementById("cardCOne").style.visibility = "visible";
        document.getElementById("cardCTwo").style.visibility = "visible";
        // Change the source of the images so they match the cards values and suits
        document.getElementById('cardCOne').src = `../assets/${computerCards[0].Value}-${computerCards[0].Suits}.png`
        document.getElementById('cardCTwo').src = `../assets/${computerCards[1].Value}-${computerCards[1].Suits}.png`
    });
  
    // **** SPECIFICITIES FOR DRAWING CARDS **** 
    // WHEN THE PLAYER DECIDES TO DRAW
  
    document.getElementById("draw").addEventListener('click', () => {
        playerCards.push(deck.pop()); // add a card to the array playerCards
  
        // Get the sum of all the Points in the playerCards array
        totalVPlayer = playerCards.reduce(function (prev, cur) {
            return prev + cur.Points;
        }, 0);
  
        ActionToTake = textActionOne(totalVPlayer, totalVComputer); // Create the text with the result of the first compare function
  
        // Overprint the text in the HTML
         document.getElementById("result").innerHTML = `${ActionToTake}`;
  
        resultPCards = ""; // reset the string resultPCards to empty
        // store the suits and the value of every player card in the empty string resultPCards. Use += to not overwrite each time but add to the string.
        // *** HERE I ALSO DON'T THINK WE NEED THIS PART until line 188 ANYMORE ***
        var i;
        for (i = 0; i < playerCards.length; i++) {
            resultPCards += `${playerCards[i].Value} of ${playerCards[i].Suits} </br>`;
        }
        
        document.getElementById("result").innerHTML = `Your hand is ${totalVPlayer}`; // Print the result in the innerHTML
  

        // If the player has 3 cards, change the visibility of the 3th image in the html and change the source
        if (playerCards.length == 3) {
            document.getElementById("cardPThree").style.visibility = "visible";
            document.getElementById('cardPThree').src = `../assets/${playerCards[2].Value}-${playerCards[2].Suits}.png`
        }
        // If the player has 4 cards, change the visibility of the 4th image in the html and change the source
        if (playerCards.length == 4) {
            document.getElementById('cardPFour').style.visibility = "visible";
            document.getElementById('cardPFour').src = `../assets/${playerCards[3].Value}-${playerCards[3].Suits}.png`
        }
        // If the player has 5 cards, change the visibility of the 5th image in the html and change the source
        if (playerCards.length == 5) {
            document.getElementById("cardPFive").style.visibility = "visible";
            document.getElementById('cardPFive').src = `../assets/${playerCards[4].Value}-${playerCards[4].Suits}.png`
        }
        // If the player has 6 cards, change the visibility of the 6th image in the html and change the source
        if (playerCards.length == 6) {
            document.getElementById('cardPSix').style.visibility = "visible";
            document.getElementById('cardPSix').src = `../assets/${playerCards[5].Value}-${playerCards[5].Suits}.png`
        }
  
    });
  
    // WHEN THE PLAYER DECIDES TO STAND
    document.getElementById("stand").addEventListener('click', () => {
        // If the computer has not 15 yet, give him a card
        if (totalVComputer < 15) {
            computerCards.push(deck.pop());
        };
  
        // Get the sum of all the Points in the computerCards array
        totalVComputer = computerCards.reduce(function (prev, cur) {
            return prev + cur.Points;
        }, 0);
  
        ActionToTake = textActionTwo(totalVPlayer, totalVComputer); // Create the text with the result of the second compare function
        // Overprint the text in the HTML
         document.getElementById("output").innerHTML = `${ActionToTake}`; // removed for redundancy (again!)
  
        resultPComputer = ""; // reset the string resultPComputer to empty
        // store the suits and the value of every computer card in the empty string resultPComputer. Use += to not overwrite each time but add to the string.
        // **** I DONT THINK WE NEED THIS SECTION UNTIL LINE 237 ANYMORE  ****
        var i;
        for (i = 0; i < computerCards.length; i++) {
            resultPComputer += `${computerCards[i].Value} of ${computerCards[i].Suits} </br>`;
        }
        
        document.getElementById("resultComputer").innerHTML = resultPComputer;
  
        // If the computer has 3 cards, change the visibility of the 3th image in the html and change the source
        if (computerCards.length == 3) {
            document.getElementById("cardCThree").style.visibility = "visible";
            document.getElementById('cardCThree').src = `../assets/${computerCards[2].Value}-${computerCards[2].Suits}.png`
        }
        // If the computer has 4 cards, change the visibility of the 4th image in the html and change the source
        if (computerCards.length == 4) {
            document.getElementById('cardCFour').style.visibility = "visible";
            document.getElementById('cardCFour').src = `../assets/${computerCards[3].Value}-${computerCards[3].Suits}.png`
        }
        // If the computer has 5 cards, change the visibility of the 5th image in the html and change the source
        if (computerCards.length == 5) {
            document.getElementById("cardCFive").style.visibility = "visible";
            document.getElementById('cardCFive').src = `../assets/${computerCards[4].Value}-${computerCards[4].Suits}.png`
        }
        // If the computer has 6 cards, change the visibility of the 6th image in the html and change the source
        if (computerCards.length == 6) {
            document.getElementById('cardCSix').style.visibility = "visible";
            document.getElementById('cardCSix').src = `../assets/${computerCards[5].Value}-${computerCards[5].Suits}.png`
        }
    });
  
    // RELOAD THE PAGE
    document.getElementById("reloadpage").addEventListener('click', () => {
        location.reload(true);
    });
  
    // COUNT THE SCORE
  function scorePlayer21() {
      let scorePlayer21Value;
      // then check whether your localStorage item already exists ...
    if (sessionStorage.getItem('scorePlayer21')) {
      // if so, increase the value and assign it to your variable
      scorePlayer21Value = parseInt(sessionStorage.getItem('scorePlayer21')) + 1;
      // and reset the localStorage item with the new value
      sessionStorage.setItem('scorePlayer21', scorePlayer21Value);
    } else {
      // if localStorage item does not exist yet initialize
      // it with your strat value
      sessionStorage.setItem('scorePlayer21', 1);
      // and assign start value to your variable
      scorePlayer21Value = sessionStorage.getItem('scorePlayer21');
    }
    console.log(scorePlayer21Value);
  
      document.getElementById("wins").innerHTML = scorePlayer21Value;
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
    console.log(totalScoreValue);
    
    
      document.getElementById("total-score").innerHTML = totalScoreValue;
    
    }
    
    // make sure the score stays printed after refreshing the page
    document.getElementById("total-score").innerHTML = sessionStorage.getItem('totalScore'); 
    document.getElementById("wins").innerHTML = sessionStorage.getItem('scorePlayer21');
    document.getElementById("games-played").innerHTML = sessionStorage.getItem('totalGames');
    
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
    console.log(totalGamesValue);
    
    document.getElementById("games-played").innerHTML = totalGamesValue;
    }
  
  
  })();
  
  