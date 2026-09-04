// FUNCTION getComputerChoice() to random return "rock", "paper", "scissors" for computer side.
// SET Math.random with min = 0 and max = 3.
// Generate a random interger from 0 to 2. 
// RETURN string according to the interger.
// IF interger = 0 THEN return string "rock".
// IF interger = 1 THEN return string "paper".
// IF interger = 2 THEN return string "scissors".

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    return randomInt;
   // Return interger from 0 to 2 randomly.
}

console.log(getComputerChoice());