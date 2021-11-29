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

//Reset button clicked in congrats modal reloads window
let congratsReset = document.getElementById("congrats-reset");

congratsReset.onclick = function() {
	window.location.reload();
}

//The decks
//array to hold 8 cards for 16 card game
/*const cardsArray16 = [
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
]*/
//array to hold 16 cards for 32 card game
/*const cardsArray32 = [
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
]*/
//array to hold all 32 cards for 64 card game
/*const cardsArray64 = [
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
]*/
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
// Duplicate each array to create a match for each card
const gameGrid = cardsArray.concat(cardsArray);

//the timer
//code from https://www.ostraining.com/blog/coding/stopwatch/

var clearTime; 
var seconds = 0, minutes = 0, hours = 0;
var secs, mins, gethours ; 

function startWatch( ) { 
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
	var x = document .getElementById("timer"); 
	x.innerHTML = 'Game Duration: ' + gethours + mins + secs; 
	/* call the seconds counter after displaying the stop watch and increment seconds by +1 to keep it counting */ 
	seconds++; 
	/* call the setTimeout( ) to keep the stop watch alive ! */ 
	clearTime = setTimeout( "startWatch( )", 1000 ); } 
    // startWatch( ) //create a function to start the stop watch 
 
function startTime() { 
/* check if seconds, minutes, and hours are equal to zero and start the stop watch */ 
    if ( seconds === 0 && minutes === 0 && hours === 0 ) { 
		/* call the startWatch( ) function to execute the stop watch whenever the startTime( ) is triggered */ 
		startWatch( ); 
	} 
}

//create a function to stop the time 
function stopTime( ) { 
	/* check if seconds, minutes and hours are not equal to 0 */ 
	if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { 
		/* display the full time before reseting the stop watch */ 
		var fulltime = document.getElementById( "fulltime" ); 
		//display the full time 
		fulltime.style.display = "block"; 
		var time = gethours + mins + secs; 
		fulltime.innerHTML = time; 
		// reset the stop watch 
		seconds = 0; minutes = 0; hours = 0; 
		secs = '0' + seconds; 
		mins = '0' + minutes + ': '; 
		gethours = '0' + hours + ': '; 
		/* display the stopwatch after it's been stopped */ 
		var x = document.getElementById ("timer"); 
		var stopTime = gethours + mins + secs; 
		x.innerHTML = stopTime; 
		///* display all stop watch control buttons */ 
		//var showStart = document.getElementById ('start'); 
		//showStart.style.display = "inline-block"; 
		//var showStop = document.getElementById ("stop"); 
		//showStop.style.display = "inline-block"; 
		/* clear the stop watch using the setTimeout( ) return value 'clearTime' as ID */ 
		clearTimeout( clearTime ); 
	} 
} 


//load the deck and close start modal on hitting start button
const startGame = document.getElementById('start-button');
let start16 = document.getElementById('16-deck');
//let start32 = document.getElementById('32-deck');
//let start64 = document.getElementById('64-deck');
let hidePH = document.getElementById('placeholder');
let timer = document.getElementById('timer');
let startNewGame = document.getElementById("myModal2");


//check for game completion and open congrats modal
let win16 = document.getElementsByClassName('match');
let win32 = document.getElementsByClassName('match');
let win64 = document.getElementsByClassName('match');
let congrats = document.getElementById('myModal4');

function game() {

 // Grab the game board div
    const game = document.getElementById('game-board');

    // Create a section with a class of grid
    const grid = document.createElement('section');
    grid.setAttribute('class', 'grid');

    // Append the grid section to the game div
    game.appendChild(grid);
	
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
    //
	//16 deck animation, matches and gueses	

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
    let delay = 1200

    //add 'selected' class on click & toggle
    grid.addEventListener('click', function (event) {
        let clicked = event.target;
        //do not allow the game board to be selected, do not allow the same card to be clicked twice in a row, do not allow a matched pair to be clicked again 
        if (clicked.nodeName === 'SECTION' || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')) { 
          return; 
        } 
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
}

//game play
startGame.onclick = function () {
	timer.style.display = "block";
	//call start stopwatch function
	startTime();
	//hide the div holding the full height blank background
    hidePH.style.display = "none";
	//
	//
	//if statement to create 16 card game
	if (start16.checked === true) {
		game();
    //code for deck creation and card shuffle from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/
	//
	} else {
		return;
	}
	startNewGame.style.display = "none";
}

//make the start button open the reset modal instead of the start modal once a game has started
let gameOngoing = document.getElementById("start");
let gameWarning = document.getElementsByClassName("grid");
//syntax for the if statement from: https://stackoverflow.com/questions/26254957/if-class-exists-do-something-with-javascript
gameOngoing.onclick = function () {
	if (gameWarning.length > 0) {
		startNewGame.style.display = "none";
		resetModal.style.display = "block";
	}
}

//game completion
let cardCount16 = document.getElementsByClassName('card');
let cardCount32 = document.getElementsByClassName('card');
let cardCount64 = document.getElementsByClassName('card');

//check every second for completion of game
setInterval(timer16, 1000);
setInterval(timer32, 1000);
setInterval(timer64, 1000);

//function checks for 16 match classes and once found displays the congrats modal, removes the match class from all cards, hides the gameboard, hides the timer and displays the doodle placeholder image.
function timer16() {
	if (cardCount16.length === 16) {
      if (win16.length === 16) {
        congrats.style.display = "block";
        stopTime();
        timer.style.display = "none";
      } 
	}
}

//function checks for 32 match classes and once found displays the congrats modal, removes the match class from all cards, hides the gameboard, hides the timer and displays the doodle placeholder image.
function timer32() {
	if (cardCount32.length === 32) {
      if (win32.length === 32) {
        congrats.style.display = "block";
        stopTime();
        timer.style.display = "none";
      }
	}
}

//function checks for 64 match classes and once found displays the congrats modal, removes the match class from all cards, hides the gameboard, hides the timer and displays the doodle placeholder image.
function timer64() {
	if (cardCount64.length === 64) {
      if (win64.length === 64) {
        congrats.style.display = "block";
        stopTime();
        timer.style.display = "none";
      }
	}
}