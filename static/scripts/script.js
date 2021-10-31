// JavaScript Document

/*
//Modal writing code amended from https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var htpModal = document.getElementById("htp-modal");
var startModal = document.getElementById("start-modal");
var resetModal = document.getElementById("reset-modal");

// Get the button that opens the modal
var htpBtn = document.getElementById("htp-btn");
var startBtn = document.getElementById("start-btn");
var resetBtn = document.getElementById("reset-btn");

// Get the <span> element that closes the modal
var htpSpan = document.getElementById("htp-close");
var startSpan = document.getElementById("start-close");
var resetSpan = document.getElementById("reset-close");

// Get the button to cancel reset and return to game
var cancel = document.getElementById("cancel");

// When the user clicks on the button, open the modal
htpBtn.onclick = function() {
	htpModal.style.display = "block";
}

startBtn.onclick = function() {
	startModal.style.display = "block";
}

resetBtn.onclick = function (){
	resetModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
htpSpan.onclick = function() {
	htpModal.style.display = "none";
}

startSpan.onclick = function() {
	startModal.style.display = "none";
}

resetSpan.onclick = function () {
	resetModal.style.display = "none";
}

cancel.onclick = function() {
	resetModal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target != htpModal) {
		htpModal.style.display = "none";
  }
}

window.onclick = function(event) {
	if (event.target == startModal) {
		startModal.style.display = "none";
  }
}

window.onclick = function(event) {
	if (event.target == resetModal) {
		resetModal.style.display = "none";
  }
}
*/


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
      modal = document.querySelector(e.target.getAttribute("href"));
      modal.style.display = "block";
   }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 	spans[i].onclick = function() {
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

//Play again button clicked
let playAgain = document.getElementById("play-again");
let startNewGame = document.getElementById("myModal2");
let closeCongrats = document.getElementById("myModal4");

playAgain.onclick = function() {
	startNewGame.style.display = "block";
	closeCongrats.style.display = "none";
}


//show deck relevant to play mode selection
//document.getElementsByClassName("deck-1").style.display = "none";
//document.getElementsByClassName("deck-2").style.display = "none";
//document.getElementsByClassName("deck-3").style.display = "none";
//document.getElementsByClassName("deck-4").style.display = "none";
/*
document.getElementById("card-deck").style.display = "none";

let startGame = document.getElementById("start-button");
let deck16 = document.getElementById("16-deck");
let deck24 = document.getElementById("24-deck");
let deck32 = document.getElementById("32-deck");
let deck64 = document.getElementById("64-deck");

let deck1 = document.getElementsByClassName("deck-1");
let deck2 = document.getElementsByClassName("deck-2");
let deck3 = document.getElementsByClassName("deck-3");
let deck4 = document.getElementsByClassName("deck-4");

let closeStartMod = document.getElementById("myModal2");

startGame.onclick = function() {
	if (deck16.checked) {
		closeStartMod.style.display = "none";
		deck1.style.display = "block"
	}
	else if (deck24.checked) {
		closeStartMod.style.display = "none";
		deck2.style.display = "block"
	}
	else if (deck32.checked) {
		closeStartMod.style.display = "none";
		deck3.style.display = "block"
	}
	else if (deck64.checked) {
		closeStartMod.style.display = "none";
		deck4.style.display = "block"
	}
	else alert ('Please select how many cards to play');
}

*/

document.getElementById("card-deck-16").style.display = "none";
document.getElementById("card-deck-24").style.display = "none";
document.getElementById("card-deck-32").style.display = "none";
document.getElementById("card-deck-64").style.display = "none";


let startGame = document.getElementById("start-button");

let deck16 = document.getElementById("16-deck");
let deck24 = document.getElementById("24-deck");
let deck32 = document.getElementById("32-deck");
let deck64 = document.getElementById("64-deck");

let deck1 = document.getElementById("card-deck-16");
let deck2 = document.getElementById("card-deck-24");
let deck3 = document.getElementById("card-deck-32");
let deck4 = document.getElementById("card-deck-64");

let closeStartMod = document.getElementById("myModal2");

startGame.onclick = function() {
	if (deck16.checked) {
		closeStartMod.style.display = "none";
		deck1.style.display = "block"
		let gameBoardStyle = document.querySelector(".deck-16");
        gameBoardStyle.style.backgroundColor = "white";
        gameBoardStyle.style.display = "flex";
        gameBoardStyle.style.justifyContent = "center";
        gameBoardStyle.style.width = "50vw";
		let myElement = document.querySelector("#game-board-16");
        myElement.style.display = "flex";
        myElement.style.flexWrap = "wrap";
        myElement.style.justifyContent = "center";
        myElement.style.paddingInlineStart = "0px";
        myElement.style.padding = "10px";
	}
	else if (deck24.checked) {
		closeStartMod.style.display = "none";
		deck2.style.display = "block"
	}
	else if (deck32.checked) {
		closeStartMod.style.display = "none";
		deck3.style.display = "block"
	}
	else if (deck64.checked) {
		closeStartMod.style.display = "none";
		deck4.style.display = "block"
	}
	else alert ('Please select how many cards to play');
}



