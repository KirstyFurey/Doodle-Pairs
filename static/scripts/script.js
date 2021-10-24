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

//Cancel button to close modal
cancel.onclick = function() {
	resetModal.style.display = "none"
}
