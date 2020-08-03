// Make an array for the random order of the cards
let cards = [1 ,1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];


// Add an image to the array



// Make the function to randomize the order of the cards
const rdmCards = Math.floor(Math.random() * cards.length);
console.log(cards[rdmCards]);



// Create the start game button, and when clicked, change to restart game


// Click on the first card --> turns around, remembers value


// Click on the second card --> turns around, remembers value and compare the values
// if cards are the same, get a point and leave them turned
// if cards are different, turn them around again and start from where you left off