

// Random Dice Image Generator

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //creates random number from 1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //creates string from images/dice1.png to images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage); //selects 1st img tag and gives it random dice image

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //creates another random number from 1-6

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //creates string from images/dice1.png to images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2); //selects 2nd img tag and gives it random dice image



// Message Generator

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🎊Player 1 won!🎈";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "🎈Player 2 won!🎉";
}
else {
  document.querySelector("h1").innerHTML = "Tie!";
}
