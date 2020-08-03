const suits = ["spades", "diamonds", "clubs", "hearts"]; // The variable suits is an array of "card suites" (kind of of category) that we will use as a lookup table
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; // this value will hold an array with all the possible values a card can have

function createDeck() { // we create a function createdeck (back-end function)
    deck = new Array(); // create a local array inside of the function called deck
    for (let i = 0 ; i < values.length; i++) // for loop to find the value from the received card(s). if this is true, we open another for loop
            {
                for (let x = 0; x < suits.length; x++)// this is another for loop -> if true we continue and we create some if statements
                {
                    let weight = parseInt(values[i]); // if the former is true, we create a vaariablew weight that holds 
                    // the variable from parseInt method and or change it from number to an integer
                    if (values[i] == "J" || values[i] == "Q" || values[i] == "K") // this is an if statement with 3 'or' states, it returns true or false
                        weight = 10; // from above we give the value of 10 => if it's a j q or K the value will be 10
                    if (values[i] == "A")
                        weight = 11;
                    let card = { // create an object called card with few properties
                        Value: values[i], 
                        Suit: suits[x], 
                        Weight: weight 
                    };
                    deck.push(card); // we push the card object to the deck array we created at line 5
                }
            }        
}

function createPlayers(num) // we create a function with a random integer, you can choose how many players 
        {
            players = new Array(); // create new local array inside of the players variable, so we put together in an array 
            for(let i = 1; i <= num; i++) // for loop that is true while <= 1 player 
            {
                let hand = new Array(); 
                let player = { // we generate an object called player with a few properties
                    Name: 'Player ' + i, //gives a name to the player
                    ID: i, // same as above
                    Points: 0, 
                    Hand: hand 
                }; // 
                players.push(player); // adds the player object to the new array defined at line 31
            }
        }

/*        function createPlayersUI() // 
        {
            document.getElementById('players').innerHTML = '';
            for(var i = 0; i < players.length; i++)
            {
                var div_player = document.createElement('div');
                var div_playerid = document.createElement('div');
                var div_hand = document.createElement('div');
                var div_points = document.createElement('div');

                div_points.className = 'points';
                div_points.id = 'points_' + i;
                div_player.id = 'player_' + i;
                div_player.className = 'player';
                div_hand.id = 'hand_' + i;

                div_playerid.innerHTML = 'Player ' + players[i].ID;
                div_player.appendChild(div_playerid);
                div_player.appendChild(div_hand);
                div_player.appendChild(div_points);
                document.getElementById('players').appendChild(div_player);
            }
        }
 */

function shuffle() { // this function ramdomizes the deck
    let deck = new Array(); // okay, this was a global defined array but we made it local for good reasons
    for (let i = 0; i < 1000; i++) // limit a thousand shuffles
    {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}









