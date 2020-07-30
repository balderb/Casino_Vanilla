const suits = ["spades", "diamonds", "clubs", "hearts"]; // The variable suits is an array of "card suites" (kind of of category) that we will use as a lookup table
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // this value will hold an array with all the possible values a card can have

function createDeck() { // we create a function createdeck (back-end function)
    deck = new Array(); // create a local array inside of the function called deck
    for (var i = 0 ; i < values.length; i++) // for loop to find the value from the received card(s). if this is true, we open another for loop
            {
                for (var x = 0; x < suits.length; x++)// this is another for loop -> if true we continue and we create some if statements
                {
                    var weight = parseInt(values[i]); // if the former is true, we create a vaariablew weight that holds 
                    // the variable from parseInt method and or change it from number to an integer
                    if (values[i] == "J" || values[i] == "Q" || values[i] == "K") // this is an if statement with 3 'or' states, it returns true or false
                        weight = 10; // from above we give the value of 10 => if it's a j q or K the value will be 10
                    if (values[i] == "A")
                        weight = 11;
                    var card = { // create an object called card with few properties
                        Value: values[i], 
                        Suit: suits[x], 
                        Weight: weight 
                    };
                    deck.push(card); // we push the card object to the deck array we created at line 5
                }
            }

            
}



