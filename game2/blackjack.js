const suits = ["Spades", "Diamonds", "Clubs", "Hearts"]; 
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = new Array ();

// Now we are going to create a deck (of cards) to play with.

function createDeck() {                                     // here we are going to create the deck by using the "suits" values and "values" values loop in order to get a randomized combination
     // deck = new Array();
    for (let v = 0; v < values.length; v++) {
        for(let s = 0; s < suits.length; s++) {
            
            let points = parseInt(values[v]);               // here we just convert all the string from the array to integers 
                if (values[v] === "J" || values[v] === "Q" || values[v] === "K")
                points = 10;
                if (values[v] === "A")
                points = 11;
            
            let card = {                                    // here we basically create an object and put the values for the card inside it by using properties
                Value: values[v],                           // I wonder if we can also put a method inside here where we can also flip the card, or should we place that somewhere else?
                Suits: suits[s],
                Points: points
            };
            deck.push(card);
        }
    }
}

function scramble()
{
    for (let s = 0; s < 8000; s++)
    {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

// from here it will be the "user interface" section

function TextAction (a, b) {
    let result;
    if (b >= 15)
        result = "The computer got busted! You just won the Game! <br> Congratulations!";
    else if (a < 21) {
        result = "You have the possibility to continue! </br> So please draw a card (hit me) towards the winning hand or stand your ground against the machine!";
    } else {
        result = "You are busted. The computer just won the game!";
    }
    return result;
}

document.getElementById('start').addEventListener('click', () => { 
    createDeck();
    scramble();
    let playerCards = [];
        playerCards = [deck.pop(), deck.pop(), deck.pop(), deck.pop()];
        console.log(playerCards);       
    let totalVPlayer = (playerCards[0].Points) + (playerCards[1].Points);
    let totalVComputer = (playerCards[2].Points) + (playerCards[3].Points);
    let ActionToTake = TextAction(totalVPlayer, totalVComputer);
    let outp1p = `${playerCards[0].Value} of ${playerCards[0].Suits}`
    let outp2p = `${playerCards[1].Value} of ${playerCards[1].Suits}`
    let outp1c = `${playerCards[2].Value} of ${playerCards[2].Suits}`
    let outp2c = `${playerCards[3].Value} of ${playerCards[3].Suits}`

    let nodePlayer = document.createElement("LI");
    let textNode = document.createTextNode(outp1p);
    let textNode2 = document.createTextNode(outp2p);
    let textNode3 = document.createTextNode(outp1c);
    let textNode4 = document.createTextNode(outp2c);
    //let textNode = document.createTextNode(`${playerCards[2].Value} of ${playerCards[2].Suits} ${playerCards[3].Value} of ${playerCards[3].Suits}`);
    nodePlayer.appendChild(textNode);
    nodePlayer.appendChild(textNode2);
    nodePlayer.appendChild(textNode3);
    nodePlayer.appendChild(textNode4);
    document.getElementById("myListPlayer").appendChild(textNode);
    document.getElementById("myListPlayer").appendChild(textNode2);
    document.getElementById("myListDealer").appendChild(textNode3);
    document.getElementById("myListDealer").appendChild(textNode4);
        //document.getElementById("myListPlayer").innerHTML = `${playerCards[0].Value} of ${playerCards[0].Suits}<br>
        //${playerCards[1].Value} of ${playerCards[1].Suits}`;
        //document.getElementById("displayDealer").innerHTML = `${playerCards[2].Value} of ${playerCards[2].Suits} <br> 
        //${playerCards[3].Value} of ${playerCards[3].Suits}`;
    document.getElementById("output").innerHTML = `Your hand is ${totalVPlayer} <br>
    The computers' hand is ${totalVComputer} <br>
    ${ActionToTake}`;
});

document.getElementById("draw").addEventListener('click', () => {
    let playerCard = [];
    playerCard.push(deck.pop());
    console.log(playerCard);
    // document.getElementById("displayPlayer").innerHTML = `${playerCards[0].Value} of ${playerCards[0].Suits}`;
    let totalVPlayer = (playerCard[0].Points);
    
    let outp1p = `${playerCard[0].Value} of ${playerCard[0].Suits}`
    let nodePlayer = document.createElement("LI");
    let textNode = document.createTextNode(outp1p);
    nodePlayer.appendChild(textNode);
    document.getElementById("myListPlayer").appendChild(textNode);
});

document.getElementById("stand").addEventListener('click', () => {
    let playerCards = [];
    playerCards.push(deck.pop());
    console.log(playerCards);
    // document.getElementById("displayPlayer").innerHTML = `${playerCards[0].Value} of ${playerCards[0].Suits}`;
    let outp1p = `${playerCards[0].Value} of ${playerCards[0].Suits}`
    let nodePlayer = document.createElement("LI");
    let textNode = document.createTextNode(outp1p);
    nodePlayer.appendChild(textNode);
    document.getElementById("myListDealer").appendChild(textNode);
});

document.getElementById("reloadpage").addEventListener('click', () => {
    location.reload(true);
    document.getElementById("output").innerHTML = `Welcome to Vanilla Casino Blackjack<br>
    Please get as close to 21 as possible!`
});