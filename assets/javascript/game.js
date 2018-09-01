

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

var startGame = function () {
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

var addValues = function(crystals) {
    userScore = userScore + crystals.value;
    $("#userScore").html(userScore);
    userWin();
    // console.log("Your Score: " + userScore);
}

var userWin = function() {

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

// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//    * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.