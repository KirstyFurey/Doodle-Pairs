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

//Play again button clicked in congrats modal
let playAgain = document.getElementById("play-again");
let startNewGame = document.getElementById("myModal2");
let closeCongrats = document.getElementById("myModal4");

playAgain.onclick = function() {
	startNewGame.style.display = "block";
	closeCongrats.style.display = "none";
}

//The deck
//array to hold all 32 cards
const cardsArray = [
	{
		name: 'alien',
		img: 'images/alien.jpg',
	},
	{
		name: 'antlers',
		img: 'images/antlers.jpg',
	},
	{
		name: 'apple',
		img: 'images/apple.jpg',
	},
	{
		name: 'avocado',
		img: 'images/avocado.jpg',
	},
	{
		name: 'broken-heart',
		img: 'images/broken-heart.jpg',
	},
	{
		name: 'cactus',
		img: 'images/cactus.jpg',
	},
	{
		name: 'cat',
		img: 'images/cat.jpg',
	},
	{
		name: 'cloud',
		img: 'images/cloud.jpg',
	},
	{
		name: 'diamond',
		img: 'images/diamond.jpg',
	},
	{
		name: 'donut',
		img: 'images/donut.jpg',
	},
	{
		name: 'drink',
		img: 'images/drink.jpg',
	},
	{
		name: 'egg',
		img: 'images/egg.jpg',
	},
	{
		name: 'eye',
		img: 'images/eye.jpg',
	},
	{
		name: 'glasses',
		img: 'images/glasses.jpg',
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.jpg',
	},
	{
		name: 'ice-lolly',
		img: 'images/ice-lolly.jpg',
	},
	{
		name: 'lightning',
		img: 'images/lightning.jpg',
	},
	{
		name: 'lollypop',
		img: 'images/lollypop.jpg',
	},
	{
		name: 'milk-carton',
		img: 'images/milk-carton.jpg',
	},
	{
		name: 'mountains',
		img: 'images/mountains.jpg',
	},
	{
		name: 'moustache',
		img: 'images/moustache.jpg',
	},
	{
		name: 'music',
		img: 'images/music.jpg',
	},
	{
		name: 'nope',
		img: 'images/nope.jpg',
	},
	{
		name: 'paper-plane',
		img: 'images/paper-plane.jpg',
	},
	{
		name: 'pizza',
		img: 'images/pizza.jpg',
	},
	{
		name: 'sunrise',
		img: 'images/sunrise.jpg',
	},
	{
		name: 'tea',
		img: 'images/tea.jpg',
	},
	{
		name: 'umbrella',
		img: 'images/umbrella.jpg',
	},
	{
		name: 'unicorn',
		img: 'images/unicorn.jpg',
	},
	{
		name: 'whale',
		img: 'images/whale.jpg',
	},
	{
		name: 'yes',
		img: 'images/yes.jpg',
	},
	{
		name: 'yin-yang',
		img: 'images/antlers.jpg',
	},
]
console.log(cardsArray);

