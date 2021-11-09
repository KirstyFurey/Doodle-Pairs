//Modal writing code amended from https://www.w3schools.com/howto/howto_css_modals.asp
// Making Javascript work on multiple modals - code amended from : https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page 
// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
      e.preventDefault();
      let modal = document.querySelector(e.target.getAttribute("href"));
      modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (var j = 0; j < spans.length; j++) {
    spans[j].onclick = function() {
      for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

// Get the button to cancel reset and return to game
var resetModal = document.getElementById("myModal3");
var cancel = document.getElementById("cancel");
var reset = document.getElementById("hard-reset");

//Cancel button to close modal
cancel.onclick = function() {
	resetModal.style.display = "none";
}

//Reset board
reset.onclick  = function() {
	window.location.reload();
}

//Play again button clicked in congrats modal
let playAgain = document.getElementById("play-again");
let startNewGame = document.getElementById("myModal2");
let closeCongrats = document.getElementById("myModal4");

playAgain.onclick = function() {
	startNewGame.style.display = "block";
	closeCongrats.style.display = "none";
}

//load the deck and close start modal on hitting start button
let startGame = document.getElementById('start-button');

startGame.onclick = function() {
	startNewGame.style.display = "none";
}

//The deck
//array to hold all 32 cards
const cardsArray = [
	{
		name: 'alien',
		img: 'static/images/alien.jpg',
	},
	{
		name: 'antlers',
		img: 'static/images/antlers.jpg',
	},
	{
		name: 'apple',
		img: 'static/images/apple.jpg',
	},
	{
		name: 'avocado',
		img: 'static/images/avocado.jpg',
	},
	{
		name: 'broken-heart',
		img: 'static/images/broken-heart.jpg',
	},
	{
		name: 'cactus',
		img: 'static/images/cactus.jpg',
	},
	{
		name: 'cat',
		img: 'static/images/cat.jpg',
	},
	{
		name: 'cloud',
		img: 'static/images/cloud.jpg',
	},
	{
		name: 'diamond',
		img: 'static/images/diamond.jpg',
	},
	{
		name: 'donut',
		img: 'static/images/donut.jpg',
	},
	{
		name: 'drink',
		img: 'static/images/drink.jpg',
	},
	{
		name: 'egg',
		img: 'static/images/egg.jpg',
	},
	{
		name: 'eye',
		img: 'static/images/eye.jpg',
	},
	{
		name: 'glasses',
		img: 'static/images/glasses.jpg',
	},
	{
		name: 'ice-cream',
		img: 'static/images/ice-cream.jpg',
	},
	{
		name: 'ice-lolly',
		img: 'static/images/ice-lolly.jpg',
	},
	{
		name: 'lightning',
		img: 'static/images/lightning.jpg',
	},
	{
		name: 'lollypop',
		img: 'static/images/lollypop.jpg',
	},
	{
		name: 'milk-carton',
		img: 'static/images/milk-carton.jpg',
	},
	{
		name: 'mountains',
		img: 'static/images/mountains.jpg',
	},
	{
		name: 'moustache',
		img: 'static/images/moustache.jpg',
	},
	{
		name: 'music',
		img: 'static/images/music.jpg',
	},
	{
		name: 'nope',
		img: 'static/images/nope.jpg',
	},
	{
		name: 'paper-plane',
		img: 'static/images/paper-plane.jpg',
	},
	{
		name: 'pizza',
		img: 'static/images/pizza.jpg',
	},
	{
		name: 'sunrise',
		img: 'static/images/sunrise.jpg',
	},
	{
		name: 'tea',
		img: 'static/images/tea.jpg',
	},
	{
		name: 'umbrella',
		img: 'static/images/umbrella.jpg',
	},
	{
		name: 'unicorn',
		img: 'static/images/unicorn.jpg',
	},
	{
		name: 'whale',
		img: 'static/images/whale.jpg',
	},
	{
		name: 'yes',
		img: 'static/images/yes.jpg',
	},
	{
		name: 'yin-yang',
		img: 'static/images/yin-yang.jpg',
	},
]

//code for deck creation and card shuffle from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

// Grab the game board div
const game = document.getElementById('game-board')

// Create a section with a class of grid
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Append the grid section to the game div
game.appendChild(grid)

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

// For each item in the gameGrid array...
gameGrid.forEach(item => {
   // Create a parent div to hold front and back of cards
  const card = document.createElement('div');
  // Apply a card class to that div
  card.classList.add('card');
  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = item.name;
	
  //front of the card
  const front = document.createElement('div');
  front.classList.add('front');
  //back.style.backgroundImage = 'static/images/Deck.jpg';
	
  //back of the card with the individual image
  const back = document.createElement('div');
  back.classList.add('back');
  // Apply the background image of the div to the cardsArray image
  back.style.backgroundImage = `url(${item.img})`;

  // Append the div to the grid section
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
	
  gameGrid.object.style.display = 'none';
})

//Matches function
// Add match CSS
const match = () => {
  var selected = document.querySelectorAll('.selected')
  selected.forEach((card) => {
    card.classList.add('match')
  })
}

let count = 0;
let firstGuess = ''
let secondGuess = ''
let previousTarget = 'null'
let delay = 1200

//add 'selected' class on click & toggle
grid.addEventListener('click', function (event) {
  let clicked = event.target;
  //do not allow the game board to be selected, do not allow the same card to be clicked twice in a row, do not allow a matched pair to be clicked again 
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('match')) { 
    return; 
  } 
  //clicked.classList.toggle('selected'); for ridiculous mode, off for now
//call match function
  if (count < 2) {
    count++
    if (count === 1) {
      // Assign first guess
      firstGuess = clicked.parentNode.dataset.name
      console.log(firstGuess)
      clicked.parentNode.classList.add('selected')
    } else {
      // Assign second guess
      secondGuess = clicked.parentNode.dataset.name
      console.log(secondGuess)
      clicked.parentNode.classList.add('selected')
    }
    // If both guesses are not empty...
    if (firstGuess !== '' && secondGuess !== '') {
      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        // run the match function, with 1200ms delay
        setTimeout(match, delay)
        setTimeout(resetGuesses, delay)
      }
      else {
        setTimeout(resetGuesses, delay)
      }
    }
    previousTarget = clicked;
  }
});

// reset guesses to allow continued matches
const resetGuesses = () => {
  firstGuess = ''
  secondGuess = ''
  count = 0

  var selected = document.querySelectorAll('.selected')
  selected.forEach((card) => {
    card.classList.remove('selected')
  })
}

/*
// Add event listener to grid & allow max 2 cards to be selected
let count = 0;

grid.addEventListener('click', function (event) {
  let clicked = event.target;
  if (clicked.nodeName === 'SECTION') { return; }
  if (count < 2) {
    count++;
    clicked.classList.add('selected');
  }
});

grid.addEventListener('click', function (event) {
  let deselect = event.target;
  if (deselect.nodeName === 'SECTION') { return; }
  if ((count == 1) || (deselect.classList == 'selected')) {
    deselect.classList.toggle('selected');
  }
});
*/

/*
grid.addEventListener('click', function (event) {
  let click2 = event.target;
  if ((count == 1) || (click2.classList == 'selected')) {
    click2.classList.toggle('selected');
  }
})
*/


