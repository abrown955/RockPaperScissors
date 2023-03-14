function getComputerChoice(){
    let choice = Math.floor(Math.random()*(3))
    switch(choice){
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
        default:
            return "error"
    }
}

function playRound(playerSelection,computerSelection){
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "PAPER"){
        return "You lose, paper beats rock!"
    }
    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS"){
        return "You win! Rock beats scissors!"
    }
    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "ROCK"){
        return "Tie! Both players chose rock!"
    }

    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "PAPER"){
        return "Tie! Both players chose paper!"
    }

    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "SCISSORS"){
        return "You lose, scissors beats paper!"
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK"){
        return "You win! Paper beats rock!"
    }

    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER"){
        return "You win! Scissors beats paper"
    }

    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "SCISSORS"){
        return "Tie! Both players chose scissors"
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "ROCK"){
        return "You lose, rock beats scissors"
    }
    else{
        return "bad choice"
    }

}

function game(){
    for (let i; i<5;i++){
        let user = prompt("Rock paper or scissors?")
        let computer = getComputerChoice()
        console.log(playRound(user,computer))
    }

}


game()