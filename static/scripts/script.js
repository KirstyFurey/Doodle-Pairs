"use strict";

//Modal writing code amended from https://www.w3schools.com/howto/howto_css_modals.asp
// Making Javascript work on multiple modals - code amended from : https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page 
// Get the button that opens the modal
const btn = document.querySelectorAll('a.modal-button');

// All page modals
const modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
const spans = document.getElementsByClassName('close');

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
	btn[i].onclick = function(e) {
		e.preventDefault();
		const modal = document.querySelector(e.target.getAttribute('href'));
		modal.style.display = 'block';
	}
}

// When the user clicks on <span> (x), close the modal, restart timer if it was paused
for (let j = 0; j < spans.length; j++) {
	spans[j].onclick = function() {
		for (let index in modals) {
			if (typeof modals[index].style !== 'undefined') modals[index].style.display = 'none';    
		}
		if (seconds !== 0 || minutes !== 0 || hours !== 0) {
			startWatch();
		} else {
			return;
		}
	}
}

// When the user clicks anywhere outside of the modal, close it, restart timer if it was paused
window.onclick = function(event) {
	if (event.target.classList.contains('modal')) {
		for (let index in modals) {
			if (modals[index].style) modals[index].style.display = 'none';    
		}
		if (seconds || minutes  || hours) {
			startWatch();
		} else {
			return;
		}
	}
}

// Get the button to cancel reset and return to game
const resetModal = document.getElementById('myModal3');
const cancel = document.getElementById('cancel');
const reset = document.getElementById('hard-reset');

//Cancel button to close modal
cancel.onclick = function() {
	resetModal.style.display = 'none';
	if (seconds || minutes || hours) {
		startWatch();
	} else {
		return;
	}
};

//Reset board
reset.onclick  = function() {
	window.location.reload();
};

//Reset button clicked in congrats modal reloads window
const congratsReset = document.getElementById('congrats-reset');

congratsReset.onclick = function() {
	window.location.reload();
};

//hide the reset nav button by default
const resetButton = document.getElementById('reset');
resetButton.style.display = 'none';

//declare startButton to allow it to be hidden once game started
const startButton = document.getElementById('start');

//The deck
//array to hold all 32 cards for 64 card game
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
];

//the timer
//code from https://www.ostraining.com/blog/coding/stopwatch/

let clearTime; 
let seconds = 0, minutes = 0, hours = 0;
let secs, mins, gethours ; 

const startWatch = () => { 
	/* check if seconds is equal to 60 and add a +1 to minutes, and set seconds to 0 */ 
	if ( seconds === 60 ) { 
		seconds = 0; minutes = minutes + 1; 
	}
	/* you use the javascript tenary operator to format how the minutes should look and add 0 to minutes if less than 10 */ 
	mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' ); 
	/* check if minutes is equal to 60 and add a +1 to hours set minutes to 0 */ 
	if ( minutes === 60 ) { 
		minutes = 0; hours = hours + 1; 
	}
	/* you use the javascript tenary operator to format how the hours should look and add 0 to hours if less than 10 */ 
	gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); 
	secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds ); 
	// display the stopwatch 
	let x = document .getElementById('timer'); 
	x.innerHTML = 'Game Duration: ' + gethours + mins + secs; 
	/* call the seconds counter after displaying the stop watch and increment seconds by +1 to keep it counting */ 
	seconds++; 
	/* call the setTimeout( ) to keep the stop watch alive ! */ 
	clearTime = setTimeout(startWatch, 1000 ); 
}; 
 
const startTime = () => { 
	/* check if seconds, minutes, and hours are equal to zero and start the stop watch */ 
	if ( seconds === 0 && minutes === 0 && hours === 0 ) { 
		/* call the startWatch( ) function to execute the stop watch whenever the startTime( ) is triggered */ 
		startWatch( ); 
	}
};
//create a function to stop the time 
const stopTime = () => { 
	/* check if seconds, minutes and hours are not equal to 0 */ 
	if ( seconds || minutes || hours); { 
		/* display the full time before reseting the stop watch */ 
		const fulltime = document.getElementById( 'fulltime' ); 
		//display the full time 
		fulltime.style.display = 'block'; 
		let time = gethours + mins + secs; 
		fulltime.innerHTML = time; 
		/* display the stopwatch after it's been stopped */ 
		let x = document.getElementById ('timer'); 
		let stopTime = gethours + mins + secs; 
		x.innerHTML = 'GAME PAUSED ' + stopTime; 
		/* clear the stop watch using the setTimeout( ) return value 'clearTime' as ID */ 
		clearTimeout(clearTime); 
	} 
};


//load the deck and close start modal on hitting start button
const startGame = document.getElementById('start-button');
const start16 = document.getElementById('16-deck');
const start32 = document.getElementById('32-deck');
const start64 = document.getElementById('64-deck');
const hidePH = document.getElementById('placeholder');
const timer = document.getElementById('timer');
const startNewGame = document.getElementById('myModal2');

let cards;

//deck creation
//code for deck creation and card shuffle from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/
// Grab the game board div
const game = document.getElementById('game-board');
game.parentNode.style.display = ('none');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);

//game play
startGame.onclick = function () {
	//if statement to create 16 card game
	if (start16.checked) {
		cards = cardsArray.slice(0, 8).concat(cardsArray.slice(0, 8));
	}

	//if statement to create 32 card game
	else if (start32.checked) {
		cards = cardsArray.slice(0, 16).concat(cardsArray.slice(0, 16));
	}

	//if statement to create 64 card game
	else if (start64.checked) {
		cards = cardsArray.concat(cardsArray);
	}
	else {
		let makeSelection = document.getElementById('make-selection');
		makeSelection.innerHTML = 'Please select a deck size';
		return;
	}

	if (start16.checked || start32.checked || start64.checked) {
		timer.style.display = 'block';
		//call start stopwatch function
		startTime();
		pauseTime();
		pauseTimer();
		//hide the div holding the full height blank background
		hidePH.style.display = 'none';
		//show the game board
		game.parentNode.style.display = 'block';
		//hide start button
		startButton.style.display = 'none';
		//show reset button
		resetButton.style.display = 'block';

		// Randomize game grid on each load
		cards.sort(() => 0.5 - Math.random());
		// For each item in the cardsArray...
		cards.forEach(item => {
			// Create a parent div to hold front and back of cards
			const card = document.createElement('div');
			// Apply a card class to that div
			card.classList.add('card');
			// Set the data-name attribute of the div to the cardsArray name
			card.dataset.name = item.name;

			//front of the card
			const front = document.createElement('div');
			front.classList.add('front');

			//back of the card with the individual image
			const back = document.createElement('div');
			back.classList.add('back');
			// Apply the background image of the div to the cardsArray image
			back.style.backgroundImage = `url(${item.img})`;

			// Append the div to the grid section
			grid.appendChild(card);
			card.appendChild(front);
			card.appendChild(back);
		})
	} else {
		return;
	}
	startNewGame.style.display = 'none';
}

//animation, matches and gueses	
//
//Matches function
// Add match CSS
const match = () => {
	let selected = document.querySelectorAll('.selected');
	selected.forEach((card) => {
		card.classList.add('match');
	});
};

let count = 0;
let firstGuess = '';
let secondGuess = '';
let delay = 1200;

//add green border to matched pair
const matchCard = () => {
	let matchPair = document.querySelectorAll('.selected');
	matchPair.forEach((card) => {
		card.style.borderColor = '#30bb34';
	});
};

//add red border to unmatched pair
const noMatch = () => {
	let noMatchPair = document.querySelectorAll('.selected');
	noMatchPair.forEach((card) => {
		card.style.borderColor = 'red';
	});
};

//game play - assign guesses and check for matches, and hide matched cards
//add 'selected' class on click
grid.addEventListener('click', function (event) {
	let clicked = event.target;
	//do not allow the game board to be selected, do not allow the same card to be clicked twice in a row, do not allow a matched pair to be clicked again 
	if (clicked.nodeName === 'SECTION' ||
	clicked.classList.contains('grid') ||
	clicked.parentNode.classList.contains('match') ||
	clicked.parentNode.classList.contains('selected')) { 
		return; 
	} 
	//call match function
	if (count < 2) {
		count++;
		if (count === 1) {
			// Assign first guess
			firstGuess = clicked.parentNode.dataset.name;
			clicked.parentNode.classList.add('selected');
		} else {
			// Assign second guess
			secondGuess = clicked.parentNode.dataset.name;
			clicked.parentNode.classList.add('selected');
		}
		// If both guesses are not empty...
		if (firstGuess !== '' && secondGuess !== '') {
			// and the first guess matches the second match...
			if (firstGuess === secondGuess) {
				//add green border
				matchCard();
				// run the match function, with 1200ms delay
				setTimeout(match, delay);
				//run reset guesses with delay
				setTimeout(resetGuesses, delay);
			}
			else {
				//add red border
				noMatch();
				//run reset guesses with delay
				setTimeout(resetGuesses, delay);
			}
		}
	}
});

// reset guesses to allow continued matches and reset borders back to black
const resetGuesses = () => {
	firstGuess = '';
	secondGuess = '';
	count = 0;

	let selected = document.querySelectorAll('.selected');
	selected.forEach((card) => {
		card.classList.remove('selected');
		card.style.borderColor = 'black';
	})
};

//game completion
//check for game completion and open congrats modal
const congrats = document.getElementById('myModal4');
const cardCount = document.getElementsByClassName('card');
const matchCount = document.getElementsByClassName('match');

//check every second for completion of game
setInterval(winCheck, 1000);

//function checks that number of instances of match class matches number of instances of card class - after there is one instance of card, otherwise winCheck will runnimmediately as there will be an equal number of each - 0, and once found displays the congrats modal, and pauses and hides the timer.
function winCheck() {
	if (cardCount.length === matchCount.length && cardCount.length > 1) {
		congrats.style.display = 'block';
		stopTime();
		timer.style.display = 'none';
	} 
}


//function to pause the timer on opening modals during game play
function pauseTime() {
	let getModal = document.getElementById('reset');
	getModal.onclick = function() {
		stopTime();
	}
}

function pauseTimer() {
	let getModal = document.getElementById('htp');
	getModal.onclick = function() {
		stopTime();
	}
}
