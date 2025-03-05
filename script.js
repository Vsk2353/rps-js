//GAME VARIABLES AND FUNCTIONS

let humanScore = 0;
let computerScore = 0;

//DOM ELEMENTS

const finalResult = document.querySelector("#result");
const userS = document.querySelector("#humanScore");
const computerS = document.querySelector("#computerScore")

//FUNCTIONS

function getComputerChoice(){
    let a = Math.floor(Math.random()*3)
    
    if (a === 0) {return "rock";}
    else if (a === 1) {return "paper";}
    else {return ("scissors")};
}

function playRound(userChoice,computerChoice){
    let result = ''
    if (humanScore >= 5 || computerScore >= 5) return;

    if (userChoice === computerChoice){result = "It's a draw!";}
    
    else if((userChoice === "rock" && computerChoice === "scissors") || 
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice ==="paper"))
            {
            result = `You win! ${userChoice} beats ${computerChoice}`;
            humanScore++;
            }
    else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${userChoice}`;
    }
    
    finalResult.textContent = result;
    userS.textContent = humanScore;
    computerS.textContent = computerScore;

    if (humanScore === 5) {
        finalResult.textContent = "🎉 You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        finalResult.textContent = "💀 Computer wins! Better luck next time!";
        disableButtons();
    }

    function disableButtons() {
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
    }    

    }

//EVENTS

let b1 = document.querySelector("#one");
b1.addEventListener("click", function () {
    let userChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(userChoice,computerChoice);
});

let b2 = document.querySelector("#two");
b2.addEventListener("click", function () {
    let userChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(userChoice,computerChoice);
});

let b3 = document.querySelector("#three");
b3.addEventListener("click", function () {
    let userChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(userChoice,computerChoice);
});

let b4 = document.querySelector("#reset");
b4.addEventListener("click", function () {
    b1.disabled = false;
    b2.disabled = false;
    b3.disabled = false;
    humanScore=0;
    computerScore=0;
    userS.textContent = humanScore;
    computerS.textContent = computerScore;
    finalResult.textContent="Make your move!"
});