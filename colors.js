var numOfSquares = 6; 
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll('.mode');

for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
        reset();
    });
}

function reset(){
    // generate all new colors
    colors = generateRandomColors(numOfSquares); 
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }        
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

// selected button for easy and hard
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numOfSquares = 3;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;    
//     // get only ththe top three squares for eay mode
//     for(var i = 0; i <squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }        
//     }
// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numOfSquares = 6;
//     colors = generateRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;    
//     // get only ththe top three squares for eay mode
//     for(var i = 0; i <squares.length; i++){
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";      
//     }
// });

resetButton.addEventListener('click', function(){
    reset();
});

//Display the RGB color code to the html page
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // sdd colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add an eventListener to the aquares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            messageDisplay.textContent = "Try Again!";
            this.style.backgroundColor = "#232323";           
        }
    });
}

function changeColors(color){
    //loop through all  squares
    for(var i =0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random =  Math.floor(Math.random() * colors.length);
   return colors[random];
}

// Generating the random coolors to be user for color picking
function generateRandomColors(num){
    //make an array 
    var arr = [];
    //add num random colors to array
     for(var i = 0; i < num; i++){
         // get random color and push to array
         arr.push(randomColor());
     }
    // return the array
    return arr;
}

// Random number generator
function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256)
    //creating rgb code by merging
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;
}