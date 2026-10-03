const button = document.querySelectorAll("button");
const roundOutcome = document.querySelector("#round-outcome");
const scoreBoard = document.querySelector("#score-board");
const finalWinner = document.querySelector("#final-winner");

let humanScore = 0;
let computerScore = 0;
let isGamerOver = false;

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

function playRound(humanChoice, computerChoice) {
    // Make human choice to lowercase
    if (isGamerOver) return;

    const cleanHumanChoice = humanChoice.toLowerCase();

    // Tie condition
    if (cleanHumanChoice === computerChoice) {
       roundOutcome.textContent = `It's a tie! Both choose ${computerChoice}.`;
    }

    // Human wins
    else if (
        (cleanHumanChoice === "paper" && computerChoice === "rock") ||
        (cleanHumanChoice === "scissors" && computerChoice === "paper") ||
        (cleanHumanChoice === "rock" && computerChoice === "scissors")
    ) {
       roundOutcome.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        
        // Add score to human side and show the score.
        humanScore++;
    }

    // Computer wins
    else {
       roundOutcome.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;

        //Add the score to computer side and show the score.
        computerScore++;
    }

    scoreBoard.textContent = `Human score: ${humanScore} vs Computer score: ${computerScore}`;

    checkGameWinner();
}

function checkGameWinner(){
    if (humanScore === 5) {
        finalWinner.textContent = `You win the game! Final score: ${humanScore} : ${computerScore}`;
    } else if (computerScore === 5) {
        finalWinner.textContent = `You lose the game! Final score: ${humanScore} : ${computerScore}`;
    }
}

function endGame(){
    isGamerOver = true;
    button.forEach(btn => btn.disabled = true);
}

// event listener
button.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    });
});