//Shorthand variables for reference
let Rock = "rock";
let Paper = "paper";
let Scissors = "scissors";
let playerSelection;

//Variables to track scores and round counts
let computerScore = 0;
let playerScore = 0;

//Variables to post the prompt and results from each round
const div = document.querySelector('.results');
const prompt = document.querySelector('.prompt');


const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const sciBtn = document.querySelector('.scissors');
const restart = document.querySelector('.restart');

//Variables to show computer choice
const rockDiv = document.querySelector('rodckdiv');
const paperDiv = document.querySelector('paperdiv');
const scissorsDiv = document.querySelector('scissorsdiv');



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

restart.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    winner(playRound(playerSelection));
    div.textContent = " ";
    document.getElementById("restart").style.visibility = "hidden";
})



//For some reason the changes I've made to the css for paper div and button removes the button from the page when the computer selects it
//Change this functtion so it toggles a hidden property in css to visible to show the computer choice

function getComputerChoice() {
    document.getElementById('rockdiv').style.fontSize = "0px";
    document.getElementById('paperdiv').style.fontSize = "0px";
    document.getElementById('scissorsdiv').style.fontSize = "0px";


    let x = Math.floor(Math.random() * 100) + 1;

    if (x <= 33) {
        document.getElementById('rockdiv').style.fontSize = "24px";
        return Rock;
    } else if (x > 33 && x <= 66) {
        document.getElementById('paperdiv').style.fontSize = "24px";
        return Paper;
    } else {
        document.getElementById('scissorsdiv').style.fontSize = "24px";
        return Scissors;
    }
}


function playRound(playerSelection) {


    if (playerScore >= 5 || computerScore >= 5) {
        div.textContent = "Please press the restart button to play again."

} else {
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) return 0
    const winningMoveMap = {
        "rock" : "scissors",
        "scissors" : "paper",
        "paper" : "rock"
    }
    
    return winningMoveMap[playerSelection] === computerSelection ? 1 : 2;
}
    
}


function winner(result) {
    if (result === 0) {
            div.textContent = "It's a tie! Please choose again.\nPlayer Score: " + playerScore + " Computer Score: " + computerScore;
    } else if (result === 1) {
        playerScore++;
            if (playerScore <= 4) {
                div.textContent = "You win! " + playerSelection +" beats " + computerSelection + "\nPlayer Score: "
                 + playerScore + "  Computer Score: " + computerScore + "\n"; 
            }
            else {
                div.textContent = "Congratulations! You beat the computer!  You shall reign as ruler of the office!";
                document.getElementById("restart").style.visibility = "visible";
            }           
    } else if (result === 2) {
        computerScore++;
            if (computerScore <= 4) {
                div.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "\nPlayer Score: "
             + playerScore + "  Computer Score: " + computerScore + "\n";            
        }   else {
            div.textContent = "Oh no!  You lost to the computer.  You must now submit to machines and stationary.";
            document.getElementById("restart").style.visibility = "visible";
    }
}
}

