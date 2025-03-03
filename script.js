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



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(userChoice,computerChoice){
        if (userChoice === computerChoice){return "It's a draw!";}
    
        else if((userChoice === "rock" && computerChoice === "scissors") || 
                 (userChoice === "paper" && computerChoice === "rock") ||
                 (userChoice === "scissors" && computerChoice ==="paper"))
                 {
                    console.log(`You win! ${userChoice} beats ${computerChoice}`);
                    humanScore++;
                 }
        else{
            console.log(`You lose! ${computerChoice} beats ${userChoice}`);
            computerScore++;
        }

        console.log(`Your score : ${humanScore} | Computer score : ${computerScore}`);
    }

    for(let i=0;i<5;i++){
        playRound(getUserChoice(),getComputerChoice());
    }

    if (humanScore === computerScore) {console.log("Draw match!!");}
    else if(humanScore > computerScore) {console.log("Congrats! You win!");}
    else {console.log("You lose! Better luck next time!!"); }
}

playGame();