var height = 6 //Global variable. 6 = the number of attempts/guesses available*/
var width = 5 //Lenght of a word*/

var row = 0 //current attempt number*/
var column = 0 //current letter in the row
 
var gameOver = false
var word = "SQUID"

window.onload = function(){
    initialize();
}

function initialize() {//will create tiles/game board and event listeners for game.

//THE ACTUAL BOARD:
//the following for loop should help us create 30 tile elements with  escalating ID numbers representing the current row (attempt) and column (current letter/position in the word).
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
    if (0 < column && column <= width) { //if the tile we're on is in the 1st column and not beyond the 5th column (can't backspace on columns 0 and 6).
        column -=1;
    }
    let currTile = document.getElementById(row.toString() + '-' +  column.toString());
    currTile.innerText = ""; 
}

else if  (e.code == "Enter") { //if user pushes enter key.
    update() //this method replaces the content of the element with the provided newContent argument and returns the element.
    row +=1 //move to the next row.
    column = 0 //start from the 1st tile on the new row.
}

if (!gameOver && row == height) { //user has used up all their attempts.
    gameOver = true;
    document.getElementById("answer").innerText=word //answer is revealed.
}

})

}


function update() {
    let correct = 0; //iterating through each tile one by one to look at each letter. 
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currTile.innerText;

        if (word[c] == letter) { //if word[c] is equal to the letter (the letter is not only present but is in the correct position)...
            currTile.classList.add("correct"); //...add "correct" to that tile's class list so that the styling can be applied.
            correct += 1;
        }

        else if (word.includes(letter)) {
           currTile.classList.add("present"); //if the letter is only present, then the "present" classlist is added so that the styling can be applied. 
        }

       else { 
           currTile.classList.add("absent"); //if the letter is not present in the word.
   } 
    if (correct == width) {
        gameOver = true; //if we have 5 correct tiles, then it's game over.
    }
    }
}


