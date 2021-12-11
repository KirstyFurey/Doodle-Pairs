# Doodle Pairs
## _JavaScript Matching Pairs Game_

Welcome to Doodle Pairs, a matching pairs game.
</br>
The premise of the game is simple, turn over cards to match them and clear the board.
</br>
The site will utilise HTML and CSS for the content and appearance, while the logic of the game will be written with JavaScript. 
</br>
</br>

## UX ##
My aim is to keep this site clean looking. I created these wireframes as a guide to how the site will look.
</br>
The site will be built primarily for mobile devices. The look and functionality will be retained on desktop, with the tiles being slightly larger.
</br>
![MobileWireframe](/wireframes/Mobile-Wireframes.jpg)
</br>
![DesktopWireframe](/wireframes/Desktop-Wireframe.png)

## Features ##
#### Site layout and basic functionality. ####
- Page load with doodles image.
- Basic nav set to trigger modals on click, with hover colour set for distinction.
- How to Play uses JavaScript to open a modal with play instructions in an ordered list format, a close button, and to close the modal when the user clicks outside of the modal.
- Start uses JavaScript to open a modal with play modes, a start button which will start the game timer and simultaneously close the modal, and run the JavaScript to create the game of the chosen deck, a close button, and to close the modal when the user clicks outside of the modal. 
- Reset uses JavaScript to open a modal with reset warning, a close button, a reset button which will reload the page, a cancel button which will close the modal and return the player to the board and to close the modal when the user clicks outside of the modal.
- A congratulations modal is triggered when a game is completed which shows a congratulations message along with time taken to complete the game, a reset button which reloads the page, a close button, and to close the modal when the user clicks outside of the modal.
- The reset button will be hidden until game starts.
- The start button will be hidden once game starts.
- If the player clicks the How To Play or Reset button during a game the timer will be paused until the modal is closed again.

#### The game. ####
- Clicking or tapping a card will flip it face up. 
- Clicking or tapping a second card will trigger JavaScript to check if it is a match to the first. 
	- If it is, it will be highlighted green for 1 second, and both cards removed (hidden) on the board. 
	- If not it will be highlighted red for 1 second and both cards will be returned face down. 
- Once all cards are matched a congratulations modal is triggered and the time taken to complete is shown.

## Technologies ##

### Version Control ###

#### Git ####
Used as a local repository to regularly add and commit changes before pushing to GitHub.

#### GitHub ####
Used as a remote repository to store website commited changes, and deploy website for testing via GitHub Pages.

### Frameworks ###

### Icons ###
Doodle icons via Rawpixel.com *https://www.freepik.com/vectors/icons*

### Fonts ###
Amatic SC font from Google Fonts: *https://fonts.google.com/specimen/Amatic+SC?category=Handwriting*

### Programs ###

#### Adobe Dreamweaver ####
Used for writing HTML, CSS and JavaScript.

#### Adobe Photoshop ####
Used to create background and card deck.

#### Adobe Xd ####
Used to create the wireframes.

## Testing ##

### User Tests ###
- Friend and family user tests show no bugs or faults.
- iPhone SE user finds that the deck needs to be scrolled even on 16 deck so I changed the media query for this device size to make the 16 deck fit on one page.

### Bugs and Fixes ###
- The first test via GitHub Pages showed the font I initially linked to was not being displayed, so I found one very similar on Google Fonts to switch it out. 
- Initially had overly complicated instructions on game completion to load and hide elements and reload page when user clicks outside of modal. Simplified by chaning 'play again' button to a reset button that reloads the game page, removed the 'x' close button, and amended the Javascript so that clicking outside of the modal just makes it pop back up again, so the user must click 'reset'.
- I initially included a game option called 'ridiculous mode, which would shuffle all cards on any unmatched pair being selected. Realised this was unnecessarily complicated to play. So I removed it.
- The game was not working correctly in live environment on Safari or a mobile device running on iOS - but all works as expected on developer view for mobile on desktop. Discovered this is an issue of `backface-visibility: hidden` still needing the `-webkit-` prefix for Safari and iOS. 

### Repository Link ###
The site remote repository can be located here:
</br>
*https://github.com/KirstyFurey/Doodle-Pairs*

### Website Live View ###
The site can be accessed live via:
</br>
*https://kirstyfurey.github.io/Doodle-Pairs/*

### Deployment ###
To host the site on GitHub Pages, I followed the steps below:
1. Loaded Terminal
2. Created a local Git repository for the project using the command `git init` 
3. Added all files to the local repository using the command `git add .`
4. Commited files to the local repository using the command `git commit -m "commit comment"`
5. Create a remote repository on GitHub matching the name of my project
6. Copied the remote repository link and added to the command `git remote add origin (link)` in Terminal
7. Run command `git-remote -v` to ensure remote and local repositories are linked (returns push and fetch messages if they are)
8. Run command `git push origin master`
9. Repeat steps 3, 4, and 8 regularly throughout the project to keep repositories up to date and enable rollback, testing, and updates.
10. Navigated to my project repository on GitHub, then to 'Settings' and 'Pages'
11. Selected the master branch and saved to create the live link via GitHub pages.

### HTML Validation ###
I used *https://validator.w3.org/#validate_by_input* 
to validate the HTML code; results suggested adding `<h1>` or other heading tags to the `<section>` element, but as there is no readable text and this is the game board holder, I did not include any on purpose. It also suggested potential mis-use of the `aria-label` attribute on the `<span>` elements, but since this will be useful for the readers that do pick them up, I have left them in. 

### CSS Validation ###
I used *https://jigsaw.w3.org/css-validator/#validate_by_input* 
to validate my CSS; no issues found.

### JavaScript Validation ###
I used *https://beautifytools.com/javascript-validator.php* to validate my JavaScript; the validator pointed out that arrow functions are only available in ES6, which should not be an issue, and pointed out some missing semi-colons, which were fixed.

### Accessibility Validation ###
I used *https://webaim.org/resources/contrastchecker/* to check the contrast of text on my site.
</br>
To pass this test, colours need to have a contrast ratio of 4.5\:1 for normal text, and 3\:1 for large text.
</br>
The most common colour combinations on site are:
</br>
#000000 - black
</br>
and #ffffff - white 
</br>
Which gives a contrast of 21:1 so passes easily.

## Future Implementation ##
#### Ridiculous Mode ####
I intend to add a soundtrack to the game that once ridiculous mode is selected  plays random words that correspond the the cards every few seconds - the purpose of this to distract the player trying to remember the order of cards. Have not yet implemented as the brief for the project states any audio track must be pauseable / mutable, which defeats the point.

## Attribution ##

### Tutorials ###
I found this really useful site built by Sanda Israel-Ovirih, sharing a step-by-step on creating a matching pairs game, which helped me sort out my requirements and has great advice on code and implementation.
</br>
*https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript*
</br>
Her GitHub Repository can be found here:
</br>
*https://github.com/sandraisrael*
</br>
</br>
And this tutorial by Tania Rascia with step-by-step of plain JavaScript and really useful explanations.
</br>
*https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/*
</br>
The GitHub Repository is here:
</br>
*https://github.com/taniarascia/memory*

### Support ###

### Syntax ###
#### w3schools ####
Base code for Modals amended from 
</br>
*https://www.w3schools.com/howto/howto_css_modals.asp*

#### Stack Overflow ####
Code for making Javascript work on multiple modals from 
</br>
*https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page*
</br>
</br>
Code for styling the `<ol>` numbers 
</br>
*https://stackoverflow.com/questions/23610151/can-you-style-ordered-list-numbers*
</br>
</br>
Answer for why cards were not turning over on iOS and Safari  
*https://stackoverflow.com/questions/42744573/backface-visibility-not-working-in-safari*
</br>
</br>

