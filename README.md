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
- Game board with 16 face down cards on page load.
- Basic nav set to trigger modals on click, with hover colour set for distinction.
- How to Play uses JavaScript to open a modal with play instructions in an ordered list format, a close button, and to close the modal when the user clicks outside of the modal.
- Start uses JavaScript to open a modal with play modes, a start button which will start the game timer and simultaneously close the modal, a close button, and to close the modal when the user clicks outside of the modal. 
- Reset uses JavaScript to open a modal with reset warning, a close button, a reset button which will reset the board and simultaneously close the modal, a cancel button which will close the modal and return the player tothe board and to close the modal when the user clicks outside of the modal.
- A congratulations modal is triggered when a game is completed which shows a congratulations message, a play again button which opens the start modal, a close button, and to close the modal when the user clicks outside of the modal.

#### The game. ####
- Clicking or tapping a card will flip it face up. The player will also have the opportunity to flip the card face down again if it is the only card face up.
- Clicking or tapping a second card will trigger JavaScript to check if it is a match to the first. 
	- If it is, it will be highlighted green for 1 second, and both cards removed (hidden) on the board. 
	- If not it will be highlighted red for 2 seconds and both cards will be returned face down.
	- If the player has chosen to play in ridiculous mode  and they select a pair that does not match, any remaining cards on the board will be shuffled. Hidden (matched) cards will remain locked. 
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
Used to create background and card deck

## Testing ##

### User Tests ###

### Bugs and Fixes ###
- The first test via GitHub Pages showed the font I initially linked to was not being displayed, so I found one very similar on Google Fonts to switch it out. 
- Initially had overly complicated instructions on game completion to load and hide elements and reload page when user clicks outside of modal. Simplified by chaning 'play again' button to a reset button that reloads the game page.

### Repository Link ###
The site remote repository can be located here:

### Website Live View ###
The site can be accessed live via:

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
I used *https://validator.w3.org/#validate_by_input* to validate the HTML code

### CSS Validation ###
I used *https://jigsaw.w3.org/css-validator/#validate_by_input* to validate my CSS.

### JavaScript Validation ###

### Accessibility Validation ###
I used *https://webaim.org/resources/contrastchecker/* to check the contrast of text on my site.
</br>
To pass this test, colours need to have a contrast ratio of 4.5\:1 for normal text, and 3\:1 for large text.
</br>
The most common colour combinations on site are: 
</br>

## Future Implementation ##
#### Accessibility ####

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
Base code for Modals amended from *https://www.w3schools.com/howto/howto_css_modals.asp*

#### Stack Overflow ####
Code for making Javascript work on multiple modals from *https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page*
</br>
Code for styling the `<ol>` numbers 
</br>
*https://stackoverflow.com/questions/23610151/can-you-style-ordered-list-numbers*
</br>
</br>
Code for disabling start button once a game has started 
</br>
*https://stackoverflow.com/questions/26254957/if-class-exists-do-something-with-javascript*
</br>
</br>
Code for stopwatch 
</br>
*https://yogeshchauhan.com/how-to-calculate-elapsed-time-in-javascript*
</br>
</br>

