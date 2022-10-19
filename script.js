let Rock = "rock";
let Paper = "paper";
let Scissors = "scissors";
let computerScore = 0;
let playerScore = 0;

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


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) return 0
    const winningMoveMap = {
        "rock" : "scissors",
        "scissors" : "paper",
        "paper" : "rock"
    }
    
    return winningMoveMap[playerSelection] === computerSelection ? 1 : 2;
    
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose your fate. Please pick rock, paper, or scissors:");
        let result = playRound(playerSelection, computerSelection);


        if (result === 0) {
            i--;
            console.log("It's a tie! Please choose again.")
        } else if (result === 1) {
            playerScore++;
            console.log("You win! " + playerSelection +" beats " + computerSelection);
            console.log("Player Score: " + playerScore + "  Computer Score: " + computerScore);
        } else if (result === 2) {
            computerScore++;
            console.log("You lose! " + computerSelection + " beats " + playerSelection);
            console.log("Player Score: " + playerScore + "  Computer Score: " + computerScore);
        }


    }
}

game();