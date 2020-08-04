const suits = ["spades", "diamonds", "clubs", "hearts"]; 
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
    for (let s = 0; s < 52; s++)
    {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

document.getElementById('start').addEventListener('click', () => { 
    createDeck();
    scramble();
    let playerCards = [];
        playerCards = [deck.pop(), deck.pop()];
        console.log(playerCards);
});

document.getElementById("draw").addEventListener('click', () => {
    let playerCards = [];
    playerCards.push(deck.pop());
    console.log(playerCards);
})
