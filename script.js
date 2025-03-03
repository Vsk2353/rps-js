let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let a = Math.floor(Math.random()*3)
    
    if (a === 0) {return "rock";}
    else if (a === 1) {return "paper";}
    else {return ("scissors")};
}

function getUserChoice(){
    let userChoice = prompt("Enter 'rock', 'paper' or 'scissors'","");
    return userChoice.toLowerCase();
}

function playRound(userChoice,computerChoice){
    if (userChoice === computerChoice){return ""}
}