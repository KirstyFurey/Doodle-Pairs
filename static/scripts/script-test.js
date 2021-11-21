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

//the timer
//timer code from: https://yogeshchauhan.com/how-to-calculate-elapsed-time-in-javascript/
let sec = 0,
min = 1,
hour = 1;
var secVar, minVar, hourVar;

function setSec() {
    if (sec >= 60) {
    setMin();
    sec = 0;
    }
    if (sec < 10) {
    document.getElementById("seconds").innerHTML = "0" + sec;
    } else {
    document.getElementById("seconds").innerHTML = sec;
    }
    sec = sec + 1;
    secVar = setTimeout(setSec, 1000);
}

function setMin() {
    if (min >= 60) {
    setHour();
    min = 0;
    }
    if (min < 10) {
    document.getElementById("minutes").innerHTML = "0" + min;
    } else {
    document.getElementById("minutes").innerHTML = min;
    }
    min = min + 1;
}

function setHour() {
    if (hour < 10) {
    document.getElementById("hour").innerHTML = "0" + hour;
    } else {
    document.getElementById("hour").innerHTML = hour;
    }
    hour = hour + 1;
}
//load the deck and close start modal on hitting start button
const startGame = document.getElementById('start-button');
let start16 = document.getElementById('16-deck');
let start32 = document.getElementById('32-deck');
let start64 = document.getElementById('64-deck');
let hidePH = document.getElementById('placeholder');
let timer = document.getElementById('timer');
let startNewGame = document.getElementById("myModal2");

startGame.onclick = function () {
	timer.style.display = "block";
	//call start stopwatch function
    setSec();
	//hide the div holding the full height blank background
    hidePH.style.display = "none";
	//
	//
	//if statement to create 16 card game
	if (start16.checked === true) {
    
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
	
	}
	//
	//
	//if statement to create 32 card game
	else if (start32.checked === true) {
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
        card.appendChild(front);
        card.appendChild(back);
	})
	
	//32 deck animation, matches and guess

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
	}
	//
	//
	//if statement to create 64 card game
	else if (start64.checked === true) {

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
        card.appendChild(front);
        card.appendChild(back);
	})	
    
    //64 deck animation matches and guess
		
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
		
    //else statement to ensure start button cannot be clicked without making a selection
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

//check for game completion and open congrats modal
let win16 = document.getElementsByClassName('match');
let congrats = document.getElementById('myModal4');

//check every second for completion of 16 card game
setInterval(timer16, 1000);

//function checks for 16 match classes and once found displays the congrats modal, removes the match class from all cards, hides the gameboard, hides the timer and displays the doodle placeholder image.
function timer16() {
    if (win16.length === 16) {
      congrats.style.display = "block";
      timer.style.display = "none";
	}
}