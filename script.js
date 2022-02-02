var height = 6 //Global variable. 6 = the number of attempts/guesses available*/
var width = 5 //Lenght of a word*/

var row = 0 //current attempt number*/
var column = 0 //current letter in the row
 
var gameOver = false
var word = "SQUID"

window.onload = function() {
    initialize();
}

function initialize() {//will create tiles and event listeners for game

//THE ACTUAL BOARD:

    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            //the below code is creating the tile elements: we start by creating a span, adding an id to the tile (like in excalidraw sketch), and then add the 'tile' id to that element which already has its styling specified. 
            let tile = document.createElement("span"); //span = like a new element but doesn't create new line so tiles can be placed next to each other. 
            tile.id = r.toString() + "-" + c.toString();
            tile.classList("tile"); //adds the tile class with all its styling. 
        }
    }
}