
// FUNCTION playRound and play the games for 5 times.
// Put playGame() inside playRound()
function playGame() {

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
        console.log(`It's a tie! Both chose ${computerChoice}.`);
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
        }

        // Human wins
        // ELSE IF Human: rock AND Computer: scissors 
        // OR Human: paper AND Computer: rock 
        // OR Human: scissors AND Computer: paper
        // Message: You win! Paper beats Rock.
        // Show Human score and Computer score.
        else if (
            (cleanHumanChoice === "paper" && computerChoice === "rock") ||
            (cleanHumanChoice === "scissors" && computerChoice === "paper") ||
            (cleanHumanChoice === "rock" && computerChoice === "scissors")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            
            // Add score to human side and show the score.
            humanScore++;
            console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
        }

        // Computer wins
        // ELSE 
        // Message: You lose! Paper beats Rock.
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);

            //Add the score to computer side and show the score.
            computerScore++;
            console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
        }
    }

    // Round 1
    playRound(getHumanChoice(), getComputerChoice());

    // Round 2
    playRound(getHumanChoice(), getComputerChoice());

    // Round 3
    playRound(getHumanChoice(), getComputerChoice());

    // Round 4
    playRound(getHumanChoice(), getComputerChoice());

    // Round 5
    playRound(getHumanChoice(), getComputerChoice());

    // Final result
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: ${humanScore} : ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final score: ${humanScore} : ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final score: ${humanScore} : ${computerScore}`);
    }

}

playGame()