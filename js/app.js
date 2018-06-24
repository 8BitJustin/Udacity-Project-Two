

// Variables for card, cards, and deck.
const card = document.querySelectorAll('.card');
const cards = Array.from(document.getElementsByClassName('card'));
const deck = document.querySelector('.deck');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

// Shuffles cards and displays on board.
const shuffling = function() {
    const shuffled = shuffle(cards);
    for (let i = 0; i < shuffled.length; i++) {
        [].forEach.call(shuffled, function(item) {
            deck.appendChild(item);
        });
    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Variable placing all clicked cards within array.
let opened = [];

// Variable placing all matched cards within array.
let matchedTotal = [];

// Function to give clicked card open and show classes, indicating flipped.
const flipped = function() {
    this.classList.add('open');
    this.classList.add('show');
    opened.push(this);
    match();
    if(matchedTotal.length === 8) {
        winnerWinnerChickenDinner();
    }
};

// For loop to run flipped() for every card clicked.
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', flipped);
};

// Function created to disable clicking when cards are temporary shown.
const disabled = function() {
    deck.style.pointerEvents = 'none';
}

// Function to reenable pointer events when the cards 'flip back'.
const enabled = function() {
    deck.style.pointerEvents = 'auto';
}

// Function that sees what is placed within the opened array. If two cards are clicked, they are compared and either matched() or remove() is ran.
const match = function() {
    if (opened.length === 2) {
        if (opened[0].type === opened[1].type) {
            matched();
        } else {
            remove();
        }
    }
};

// Function that runs if both cards have same type. Removed open and show classes, adds match class and empties opened array.
const matched = function() {
    opened[0].classList.add('match');
    opened[0].classList.remove('open', 'show');
    opened[1].classList.add('match');
    opened[1].classList.remove('open', 'show');
    matchedTotal.push(this);
    opened = [];
};

// Function to remove the open and show classes and places them face down again.
const remove = function() {
    disabled();
    // Timeout setup for .900 second to display cards and then turn them back over.
    setTimeout(() => {
        opened[0].classList.remove('open', 'show');
        opened[1].classList.remove('open', 'show');
        enabled();
        opened = [];
    }, 900);
};

// Congrats!!
const winnerWinnerChickenDinner = function() {
    modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
};

// Restart game, reloads page.
const restart = function() {
    location.reload();
};

// Timer function
// let timer = function() {
//     setInterval(function() {
//         console.log('hi');
//     }, 1000);
// };

shuffling();

/*
 * Create a list that holds all of your cards
 */

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
*/

/*
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */