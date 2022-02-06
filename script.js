var height = 6 //Global variable. 6 = the number of attempts/guesses available*/
var width = 5 //Lenght of a word*/

var row = 0 //current attempt number*/
var column = 0 //current letter in the row
 
var gameOver = false
var word = "SQUID"

window.onload = function(){
    initialize();
}

function initialize() {//will create tiles/game board and event listeners for game

//THE ACTUAL BOARD:
//the following for loop should help us create 30 tile elements with  escalating ID numbers representing the current row (attempt) and column (current letter/position in the word)
//the for loop creates the equivalent of: <span id="0-0" class="tile">P</span> using JS means we don't have to write this out 30x. Also, if we decide to have a larger or smaller board, we just change the value of the "row" and "column" variables.
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            //the below code is creating the tile elements: we start by creating a span, adding an id to the tile (like in excalidraw sketch), and then add the 'tile' id to that element which already has its styling specified. 
            let tile = document.createElement("span"); //span = like a new element but doesn't create new line so tiles can be placed next to each other. 
            tile.id = r.toString() + "-" + c.toString(); //toStringwill turn the id number into a string and they'll be joined with a dash. 
            tile.classList.add("tile"); //assigns the tile class (which is already in the css) to this element. classlist allows you to add a class name.
            tile.innerText = "";
            document.getElementById("board").appendChild(tile); //appends the tile to the "board" element created in our HTML. 
        }
    }

//waiting for the letter to be entered:
document.addEventListener("keyup", (e) => {
    if (gameOver) return;

    if ("KeyA" <= e.code && e.code <= "KeyZ") { //(if keyup isn't equal to any key that isn't A-Z...). e.code is the popup that shares what key was pressed.
    if (column < width) {
        let currTile = document.getElementById(row.toString() + '-' +  column.toString());
        if (currTile.innerText == "") {
            currTile.innerText = e.code[3]; //index 3 of e.code returns the letter and not the word 'key' (e.g. index 3 of "KeyA").
            column += 1; //increment column by 1.
        }
    }
}
else if (e.code == "Backspace") {
    if (0 < column && column <= width) {
        column -=1;
    }
    let currTile = document.getElementById(row.toString() + '-' +  column.toString());
    currTile.innerText = ""; 
}
})

}


