const choices = ["ROCK", "PAPER", "SCISSORS"]
let gameHistory=[]
let playerScore=0
let computerScore=0

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

function handleGame (game){
    gameHistory.push(game[1])
    let outcome = game[0]
    if (outcome===1){
        playerScore++;

    } 
    else if (outcome===-1){
        computerScore++;
    }
}

function renderScore(playerScore,computerScore){
    let player = document.querySelector("body > div.scores > div:nth-child(1) > div")
    let computer = document.querySelector("body > div.scores > div:nth-child(2) > div")

    player.innerText = playerScore
    computer.innerText = computerScore

}

buttons = document.querySelectorAll("button")
console.log(buttons)
buttons.forEach((btn) => {
    let choice = btn.getAttribute('data-choice')
    btn.addEventListener("click", e => {
        res = playRound(choice,getComputerChoice())
        
        let outcome = res[0]
        if (outcome===1){
            playerScore++;
    
        } 
        else if (outcome===-1){
            computerScore++;
        }
        renderScore(playerScore,computerScore)
    })
});






