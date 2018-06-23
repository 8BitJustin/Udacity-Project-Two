/*
 * Create a list that holds all of your cards
 */

let card = document.querySelectorAll('.card');
let cards = Array.from(document.getElementsByClassName('card'));

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

const deck = document.querySelector('.deck');

const setup = () => {
    const shuffled = shuffle(cards);
    for (let i = 0; i < shuffled.length; i++) {
        [].forEach.call(shuffled, function(item) {
            deck.appendChild(item);
        });
    }
}

setup();

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

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
*/

let opened = [];

const flipped = function() {
    this.classList.add('open');
    this.classList.add('show');
    opened.push(this);
    match();
};

const disabled = function() {
    deck.style.pointerEvents = 'none';
}

const enabled = function() {
    deck.style.pointerEvents = 'auto';
}

const remove = function() {
    disabled();
    setTimeout(() => {
        opened[0].classList.remove('open', 'show');
        opened[1].classList.remove('open', 'show');
        enabled();
        opened = [];
    }, 900);

};

const matched = function() {
    opened[0].classList.add('match');
    opened[0].classList.remove('open', 'show');
    opened[1].classList.add('match');
    opened[1].classList.remove('open', 'show');
    opened = [];
};

const match = () => {
    if (opened.length === 2) {
        if (opened[0].type === opened[1].type) {
            matched();
        } else {
            remove();
        }
    }
};

/*
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', flipped);
};