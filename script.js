// FUNCTION getComputerChoice() to random return "rock", "paper", "scissors" for computer side.
// SET Math.random with min = 0 and max = 3.
// Generate a random interger from 0 to 2. 
// RETURN string according to the interger.
// IF interger = 0 THEN return string "rock".
// IF interger = 1 THEN return string "paper".
// IF interger = 2 THEN return string "scissors".

function getComputerChoice() {
    // Return interger from 0 to 2 randomly.
    const randomInt = Math.floor(Math.random() * 3);

    // Use condition logic to return matching string.
    if (randomInt === 0){
        return "rock";
    } else if (randomInt === 1){
        return "paper";
    } else {
        return "scissors";
    }
   
}

// FUNCTION getHumanChoice() to return one of the valid choice depending on the input.
// PROMPT to get the user's input.
// Create a message "Please enter your choice: "

function getHumanChoice() {
    const input = prompt("Please enter rock, paper, or scissors: ");
    return input;
}

// Create two varibales humanScore and computerScore to keep track the scores.
let humanScore = 0;
let computerScore = 0;

// FUNCTION playRound() to play one round.
// Use two variables humanChoice() and computerChoice() as arguments.
// Make humanChoice() case insenitive.
// RETURN message according to the result. "You lose! Paper beats Rock."
// Increase the scores based on the round winner.

function playRound(humanChoice, computerChoice) {
    // Make human choice to lowercase
    const cleanHumanChoice = humanChoice.toLowerCase();

    console.log("Human: ", cleanHumanChoice);
    console.log("Computer: ", computerChoice);

    // Tie condition
    if (cleanHumanChoice === computerChoice) {
       console.log(`It's a tie! Both chose ${humanChoice}.`);
       console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);