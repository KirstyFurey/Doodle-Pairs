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

//The decks
//array to hold 8 cards for 16 card game
const cardsArray16 = [
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
]

//array to hold 16 cards for 32 card game
const cardsArray32 = [
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
]
//array to hold all 32 cards for 64 card game
const cardsArray64 = [
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

//load the deck and close start modal on hitting start button
const startGame = document.getElementById('start-button');

startGame.onclick = function () {

    //code for deck creation and card shuffle from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

    // Grab the game board div
    const game = document.getElementById('game-board');

    // Create a section with a class of grid
    const grid = document.createElement('section');
    grid.setAttribute('class', 'grid');

    // Append the grid section to the game div
    game.appendChild(grid);

    // Duplicate each array to create a match for each card
    let gameGrid16 = cardsArray16.concat(cardsArray16);
    let gameGrid32 = cardsArray32.concat(cardsArray32);
    let gameGrid64 = cardsArray64.concat(cardsArray64);
	
	startNewGame.style.display = "none";
}