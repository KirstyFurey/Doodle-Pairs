// JavaScript Document


//Modal writing code amended from https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var htpModal = document.getElementById("htp-modal");
var pmModal = document.getElementById("pm-modal");
var resetModal = document.getElementById("reset-modal");

// Get the button that opens the modal
var htpBtn = document.getElementById("htp-btn");
var pmBtn = document.getElementById("pm-btn");
var resetBtn = document.getElementById("reset-btn");

// Get the <span> element that closes the modal
var htpSpan = document.getElementById("htp-close");
var pmSpan = document.getElementById("pm-close");
var resetSpan = document.getElementById("reset-close");

// When the user clicks on the button, open the modal
htpBtn.onclick = function() {
	htpModal.style.display = "block";
}

pmBtn.onclick = function() {
	pmModal.style.display = "block";
}

resetBtn.onclick = function (){
	resetModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
htpSpan.onclick = function() {
	htpModal.style.display = "none";
}

pmSpan.onclick = function() {
	pmModal.style.display = "none";
}

resetSpan.onclick = function () {
	resetModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target != htpModal) {
		htpModal.style.display = "none";
  }
}

window.onclick = function(event) {
	if (event.target == pmModal) {
		pmModal.style.display = "none";
  }
}

window.onclick = function(event) {
	if (event.target == resetModal) {
		resetModal.style.display = "none";
  }
}
