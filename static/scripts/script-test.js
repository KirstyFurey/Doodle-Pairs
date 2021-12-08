'use strict';

//Modal writing code amended from https://www.w3schools.com/howto/howto_css_modals.asp
// Making Javascript work on multiple modals - code amended from : https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page 
// Get the button that opens the modal
let btn = document.querySelectorAll('a.modal-button');

// All page modals
let modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
let spans = document.getElementsByClassName('close');

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
      e.preventDefault();
      let modal = document.querySelector(e.target.getAttribute('href'));
      modal.style.display = 'block';
    }
}

// When the user clicks on <span> (x), close the modal
for (let j = 0; j < spans.length; j++) {
    spans[j].onclick = function() {
      for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = 'none';    
    }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = 'none';    
     }
    }
}

// Get the button to cancel reset and return to game
let resetModal = document.getElementById('myModal3');
let cancel = document.getElementById('cancel');
let reset = document.getElementById('hard-reset');

//Cancel button to close modal
cancel.onclick = function() {
	resetModal.style.display = 'none';
};

//Reset board
reset.onclick  = function() {
	window.location.reload();
};

//Reset button clicked in congrats modal reloads window
let congratsReset = document.getElementById('congrats-reset');

congratsReset.onclick = function() {
	window.location.reload();
};

//hide the reset nav button by default
let resetButton = document.getElementById('reset');
resetButton.style.display = 'none';

//declare startButton to allow it to be hidden once game started
let startButton = document.getElementById('start');

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
	clearTime = setTimeout('startWatch()', 1000 ); 
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
	if ( seconds !== 0 || minutes !== 0 || hours !== 0 ); { 
		/* display the full time before reseting the stop watch */ 
		let fulltime = document.getElementById( 'fulltime' ); 
		//display the full time 
		fulltime.style.display = 'block'; 
		let time = gethours + mins + secs; 
		fulltime.innerHTML = time; 
		//let pauseTime = document.getElementById('timer');
		//pauseTime.style.display = 'block';
		//pauseTime.innerHTML = 'GAME PAUSED ' + time;
		// reset the stop watch 
		//seconds = 0; minutes = 0; hours = 0; 
		//secs = '0' + seconds; 
		//mins = '0' + minutes + ': '; 
		//gethours = '0' + hours + ': '; 
		/* display the stopwatch after it's been stopped */ 
		let x = document.getElementById ("timer"); 
		let stopTime = gethours + mins + secs; 
		x.innerHTML = 'GAME PAUSED ' + stopTime; 
		///* display all stop watch control buttons */ 
		//let showStart = document.getElementById ('start'); 
		//showStart.style.display = 'inline-block'; 
		//let showStop = document.getElementById ('stop'); 
		//showStop.style.display = 'inline-block'; 
		/* clear the stop watch using the setTimeout( ) return value 'clearTime' as ID */ 
		clearTimeout(clearTime); 
	} 
};


//load the deck and close start modal on hitting start button
const startGame = document.getElementById('start-button');
let start16 = document.getElementById('16-deck');
let start32 = document.getElementById('32-deck');
let start64 = document.getElementById('64-deck');
let hidePH = document.getElementById('placeholder');
let timer = document.getElementById('timer');
let startNewGame = document.getElementById('myModal2');

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

//game play - assign guesses and check for matches, and hide matched cards
//add 'selected' class on click
grid.addEventListener('click', function (event) {
    let clicked = event.target;
    //do not allow the game board to be selected, do not allow the same card to be clicked twice in a row, do not allow a matched pair to be clicked again 
    if (clicked.nodeName === 'SECTION' || clicked.classList.contains('grid') || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')) { 
      return; 
    } 
    //call match function
    if (count < 2) {
      count++;
      if (count === 1) {
        // Assign first guess
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
      } else {
        // Assign second guess
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }
      // If both guesses are not empty...
      if (firstGuess !== '' && secondGuess !== '') {
        // and the first guess matches the second match...
        if (firstGuess === secondGuess) {
          // run the match function, with 1200ms delay
          setTimeout(match, delay);
          setTimeout(resetGuesses, delay);
        }
        else {
          setTimeout(resetGuesses, delay);
        }
      }
    }
});

// reset guesses to allow continued matches
const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;

    let selected = document.querySelectorAll('.selected');
    selected.forEach((card) => {
      card.classList.remove('selected');
    })
};

//game completion
//check for game completion and open congrats modal
let congrats = document.getElementById('myModal4');
let cardCount = document.getElementsByClassName('card');
let matchCount = document.getElementsByClassName('match');

//check every second for completion of game
setInterval(winCheck, 1000);

//function checks that number of instances of match class matches number of instances of card class and once found displays the congrats modal, removes the match class from all cards, hides the gameboard, hides the timer and displays the doodle placeholder image.
function winCheck() {
    if (cardCount.length === matchCount.length && cardCount.length > 1) {
      congrats.style.display = 'block';
      stopTime();
      timer.style.display = 'none';
    } 
}

//let pause;

function pauseTime() {
	let getModal = document.getElementById('reset');
	getModal.onclick = function() {
      stopTime();
      //clearTimeout()
	}
}

function pauseTimer() {
	let getModal = document.getElementById('htp');
	getModal.onclick = function() {
      stopTime();
      //clearTimeout()
	}
}

//let timerRestart;
/*
function pauseTime() {
  // Collect all .image into a NodeList
  let getModal = document.querySelectorAll('.modal');
  // Declare i and qty for "for" loop
  let i, qty = getModal.length;
  // Use "for" loop to iterate through NodeList
  for (i = 0; i < qty; i++) {
    // If this div.image at index [i] is "none"...
    if (grid.length > 0 && getModal[i].style.display === 'block') {
      // then make it "block"... 
      stopTime();
    } else {
      // otherwise set display to "none"
      startTime();
    }
  }
}
*/

