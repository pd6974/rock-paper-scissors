//Shorthand variables for reference
let Rock = "rock";
let Paper = "paper";
let Scissors = "scissors";
let playerSelection;

//Variables to track scores and round counts
let computerScore = 0;
let playerScore = 0;
let roundCount = 0;

//Variables to post the prompt and results from each round
const div = document.querySelector('.results');
const prompt = document.querySelector('.prompt');


const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const sciBtn = document.querySelector('.scissors');

//chose to make different event listeners because I couldn't figure out how to loop through all
rockBtn.addEventListener('click', () => {
        playerSelection = Rock;
        winner(playRound(playerSelection));
    });

paperBtn.addEventListener('click', () => {
        playerSelection = Paper;
        winner(playRound(playerSelection));
    });

sciBtn.addEventListener('click', () => {
        playerSelection = Scissors;
        winner(playRound(playerSelection));
    });



function getComputerChoice() {
    let x = Math.floor(Math.random() * 100) + 1;

    if (x <= 33) {
        return Rock;
    } else if (x > 33 && x <= 66) {
        return Paper;
    } else {
        return Scissors;
    }
}


function playRound(playerSelection) {
    
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) return 0
    const winningMoveMap = {
        "rock" : "scissors",
        "scissors" : "paper",
        "paper" : "rock"
    }
    
    return winningMoveMap[playerSelection] === computerSelection ? 1 : 2;
    
}


function winner(result) {
    if(roundCount < 5) {
        if (result === 0) {
            div.textContent += "\nIt's a tie! Please choose again.\n";
        } else if (result === 1) {
            playerScore++;
            div.textContent += "\nYou win! " + playerSelection +" beats " + computerSelection + "\n";
            div.textContent += "\nPlayer Score: " + playerScore + "  Computer Score: " + computerScore + "\n";
            roundCount++;
        } else if (result === 2) {
            computerScore++;
            div.textContent += "\nYou lose! " + computerSelection + " beats " + playerSelection + "\n";
            div.textContent += "\nPlayer Score: " + playerScore + "  Computer Score: " + computerScore + "\n";
            roundCount++;
        }
    } else {

    }
}
