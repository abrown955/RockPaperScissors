const choices = ["ROCK", "PAPER", "SCISSORS"]
function getComputerChoice() {
    let num = Math.floor(Math.random() * (3))
    return choices[num]
}


function playRound(playerSelection, computerSelection) {
    //player loses
    let player = playerSelection.toUpperCase()
    if (player === "ROCK" && computerSelection === "PAPER"
        || player === "SCISSORS" && computerSelection === "ROCK"
        || player === "PAPER" && computerSelection === "SCISSORS") {
        return [-1, `You lose, ${computerSelection} beats ${player}!`]
    }
    //Tie
    else if (player === computerSelection) {
        return [0, `Tie! Both players chose ${computerSelection}`]
    }

    else if (computerSelection === "ROCK" && player === "PAPER"
        || computerSelection === "SCISSORS" && player === "ROCK"
        || computerSelection === "PAPER" && player === "SCISSORS") {
        return [1, `You win! ${player} beats ${computerSelection}!`]
    }


}


function game() {

    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let user = prompt("Rock paper or scissors?")
        let computer = getComputerChoice()
        let res = playRound(user, computer)
        switch (res[0]) {
            case 1:
                ++playerScore
            case 0:
                
            case -1:
                ++computerScore

        }
        console.log(res[1])
        console.log(`Player:${playerScore} \nComputer:${computerScore}`)

    }



}
game()