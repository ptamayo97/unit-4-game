

//*********************************************************************** 
// 
// TO DO!!!!!!!!!
// 
// 1. winsLosses blink blue if user wins and blink red when user losses
// 
// 2. give buttons a click animation and sound
// 
// 3. change layout of game
//      a. have instructions and game appear seperatly
//          i. instructions first. when user enter switch to game
//      b. make responsive?
// 
// 
//*********************************************************************** 


// Global Variables

var crystals = {
    ruby: {
        value: 0
    },
    diamond: {
        value: 0
    },
    apatite: {
        value: 0
    },
    emerald: {
        value: 0
    },
};
var userScore = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;

//functions

var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame () {
    userScore = 0;
    targetScore = randomNumber(19, 120);

    crystals.ruby.value = randomNumber(1, 12);
    crystals.diamond.value = randomNumber(1, 12);
    crystals.apatite.value = randomNumber(1, 12);
    crystals.emerald.value = randomNumber(1, 12);

    $("#userScore").html(userScore);
    $("#targetScore").html(targetScore);

    // console.log("target score: " + targetScore);
    // console.log("Ruby: " + crystals.ruby.value + " | Diamond: " + crystals.diamond.value + " | Apatite: " + crystals.apatite.value + " | Emerald: " + crystals.emerald.value);
    
}

function addValues(crystals) {
    userScore = userScore + crystals.value;
    $("#userScore").html(userScore);
    userWin();
    // console.log("Your Score: " + userScore);
}

function userWin() {

    if (userScore === targetScore) {
        wins++
        $("#wins").html("Wins: " + wins);
        alert("You Win!")
        startGame();
    } else if (userScore > targetScore) {
        losses++
        $("#losses").html("Losses: " + losses);
        alert("You lose!")
        startGame();
    } 

}

startGame();

//click handlers

$("#ruby").on("click", function() {
    addValues(crystals.ruby);
});

$("#diamond").on("click", function() {
    addValues(crystals.diamond);
});

$("#apatite").on("click", function() {
    addValues(crystals.apatite);
});

$("#emerald").on("click", function() {
    addValues(crystals.emerald);
});

$("#reset").on("click", function() {

    $("#wins").html("Wins: " + 0);
    $("#losses").html("Losses: " + 0);

    startGame();
});