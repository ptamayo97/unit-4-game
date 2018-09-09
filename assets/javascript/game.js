
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

    winAudio.load();
    loseAudio.load();  
}

function addValues(crystals) {
    userScore = userScore + crystals.value;
    $("#userScore").html(userScore);
    userWin();
}

var winAudio = new Audio("assets/audio/rep_fairy.mp3");
var loseAudio = new Audio("assets/audio/for-the-damaged-loop.mp3");

function userWin() {
    
    if (userScore === targetScore) {
        wins++
        $("#wins").html("Wins: " + wins);
        winAudio.play();
        setTimeout(function () {
            alert("You Win!");
            startGame();
        } ,10)
           
    } else if (userScore > targetScore) {
        losses++
        $("#losses").html("Losses: " + losses);
        loseAudio.play();
        setTimeout(function () {
            alert("You Lose!");
            startGame();
        } ,10)   
    } 

}

startGame();


//click handlers

var btnAudio = [new Audio("assets/audio/adriantnt_glass.mp3"), new Audio("assets/audio/adriantnt_glass.mp3"), new Audio("assets/audio/adriantnt_glass.mp3"), new Audio("assets/audio/adriantnt_glass.mp3"), new Audio("assets/audio/adriantnt_glass.mp3"), new Audio("assets/audio/adriantnt_glass.mp3")];
var soundNb = 0;

$("#ruby").on("click", function() {
    btnAudio[ soundNb % btnAudio.length ].play(); 
    soundNb++; 
    addValues(crystals.ruby);
});

$("#diamond").on("click", function() {
    btnAudio[ soundNb % btnAudio.length ].play(); 
    soundNb++; 
    addValues(crystals.diamond);
});

$("#apatite").on("click", function() {
    btnAudio[ soundNb % btnAudio.length ].play(); 
    soundNb++; 
    addValues(crystals.apatite);    
});

$("#emerald").on("click", function() {
    btnAudio[ soundNb % btnAudio.length ].play(); 
    soundNb++; 
    addValues(crystals.emerald); 
});

var resetAudio = [new Audio("assets/audio/slam.mp3"), new Audio("assets/audio/slam.mp3")];
var resetNb = 0;

$("#reset").on("click", function() {
    wins = 0;
    losses = 0;
    resetAudio[ resetNb % resetAudio.length ].play(); 
    resetNb++;     
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);

    startGame();
});