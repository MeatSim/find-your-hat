# Find Your Hat interactive terminal game
Coded in JavaScript for Codecademy Challenge Project: Find Your Hat.
## Object of the game
"The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field."
## How to play
The player starts in the upper left corner and navigates left, right, up, or down with the l, r, u, and d keys. The player's path is marked by *. The hat is marked by ^. Holes are marked by O.
The game will end when the player finds the hat, falls in a hole, or falls off the field. You can also quit with CTRL+C.
## Setup
1. Clone the repository to your computer.
2. Make sure you have [node.js](https://nodejs.org/en/) and NPM installed.
3. To install the prompt-sync Node module, run `npm install prompt-sync`.
4. Use your terminal to navigate to the repository folder.
5. Run `node main.js`
## Randomized field
The field is randomized each time `main.js` is run, so it's possible that there is no way to find your hat.
You can change the height, width, and percentage of holes of the field by changing the numbers in `randomField = Field.generateField(10, 10, 25);` on line 97.
The first number is the height, the second number is the width, and the last number is the percentage of holes.
