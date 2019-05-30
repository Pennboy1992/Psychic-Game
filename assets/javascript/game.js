var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
document.onkeyup = function (event) {

    var userGuess = event.key;

    
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
            document.querySelector("#winner").textContent = wins;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess);
        }

        if (userGuess != computerGuess) {
            numGuesses--;
            document.querySelector("#guest").textContent = numGuesses;
            document.querySelector("#cguesses").textContent = guessChoices;
            guessChoices.push(userGuess);
            
        }

        if (numGuesses === 0) {

            numGuesses = 9;
            losses++;
            guessChoices = [];
            //document.querySelector("#cguesses").textContent = guessChoices;
            document.querySelector("#loser").textContent = losses;

            
            
        
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess);
        }

  

    }
};
