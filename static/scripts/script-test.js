"use strict";

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
let start16 = document.getElementById('16-deck');
let start32 = document.getElementById('32-deck');
let start64 = document.getElementById('64-deck');

startGame.onclick = function () {
	//if statement to create 16 card game
	if (start16.checked === true) {
		console.log(start16);

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
	
	// Randomize game grid on each load
    gameGrid16.sort(() => 0.5 - Math.random());

      // For each item in the gameGrid array...
      gameGrid16.forEach(item => {
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
        //card.appendChild(front);
        card.appendChild(back);
	})
	}
	//if statement to create 32 card game
	else if (start32.checked === true) {
		console.log(start32);

    //code for deck creation and card shuffle from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

    // Grab the game board div
    const game = document.getElementById('game-board');

    // Create a section with a class of grid
    const grid = document.createElement('section');
    grid.setAttribute('class', 'grid');

    // Append the grid section to the game div
    game.appendChild(grid);

    // Duplicate each array to create a match for each card
    let gameGrid32 = cardsArray32.concat(cardsArray32);
	
	// Randomize game grid on each load
    gameGrid32.sort(() => 0.5 - Math.random());

      // For each item in the gameGrid array...
      gameGrid32.forEach(item => {
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
        //card.appendChild(front);
        card.appendChild(back);
	})
	}
	//if statement to create 64 card game
	else if (start64.checked === true) {
		console.log(start64);

    //code for deck creation and card shuffle from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

    // Grab the game board div
    const game = document.getElementById('game-board');

    // Create a section with a class of grid
    const grid = document.createElement('section');
    grid.setAttribute('class', 'grid');

    // Append the grid section to the game div
    game.appendChild(grid);

    // Duplicate each array to create a match for each card
    let gameGrid64 = cardsArray64.concat(cardsArray64);
	
	// Randomize game grid on each load
    gameGrid64.sort(() => 0.5 - Math.random());

      // For each item in the gameGrid array...
      gameGrid64.forEach(item => {
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
        //card.appendChild(front);
        card.appendChild(back);
	})	
		
    //else statement to ensure start button cannot be clicked without making a selection
	} else {
		return;
	}
	startNewGame.style.display = "none";
}

//make the start button open the reset modal instead of the start modal once a game has started
let gameOngoing = document.getElementById("start");
let gameWarning = document.getElementsByClassName("grid")

//syntax for the if statement from: https://stackoverflow.com/questions/26254957/if-class-exists-do-something-with-javascript
gameOngoing.onclick = function () {
	if (gameWarning.length > 0) {
		startNewGame.style.display = "none";
		resetModal.style.display = "block";
		
	}
}


	

/*
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
	
	// Randomize game grid on each load
    gameGrid16.sort(() => 0.5 - Math.random());
	gameGrid32.sort(() => 0.5 - Math.random());
	gameGrid64.sort(() => 0.5 - Math.random());
	
	
	//store all 3 decks in a variable
	let gameSelection = document.getElementsByName("deck-choice");
	console.log(gameSelection);
	
	//store all 3 arrays in one variable
	let gameArrays = [gameGrid16, gameGrid32, gameGrid64];
	console.log(gameArrays);

	if (gameSelection.input === 0) {
	
    // For each item in the gameGrid array...
    gameGrid16.forEach(item => {
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
		
      console.log(gameGrid16);
	})
	}
	//append correct deck to the grid based on radio button selected
	
	
	startNewGame.style.display = "none";
}
*/