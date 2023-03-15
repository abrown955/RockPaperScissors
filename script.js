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
    //player wins
    else if (computerSelection === "ROCK" && player === "PAPER"
        || computerSelection === "SCISSORS" && player === "ROCK"
        || computerSelection === "PAPER" && player === "SCISSORS") {
        return [1, `You win! ${player} beats ${computerSelection}!`]
    }


}

function renderScore(playerScore,computerScore){
    let player = document.querySelector("body > div.scores > div:nth-child(1) > div")
    let computer = document.querySelector("body > div.scores > div:nth-child(2) > div")

    player.innerText = playerScore
    computer.innerText = computerScore

}

function checkWin(playerScore,computerScore){
    if (playerScore >= 5 || computerScore >= 5){
        let text = document.querySelector("body > div.winnerText")
        let winner = ""
        if (playerScore>=5){
            winner = "player wins"
        }
        else if (computerScore >=5){
            winner = "computer wins"
        }

        text.innerText = winner
    }
}

function updateHistory(e){
    let content = document.querySelector("body > div:nth-child(4) > div")
    let text = document.createElement('div')
    text.innerHTML = e 
    content.appendChild(text)
}

buttons = document.querySelectorAll("button")
console.log(buttons)
buttons.forEach((btn) => {
    let choice = btn.getAttribute('data-choice')
    btn.addEventListener("click", e => {
        
        res = playRound(choice,getComputerChoice())
        let outcome = res[0]
        let log = res[1]

        gameHistory.push(log)

        if (outcome===1){
            playerScore++;
    
        } 
        else if (outcome===-1){
            computerScore++;
        }
        
        renderScore(playerScore,computerScore)
        updateHistory(log)
        checkWin(playerScore,computerScore)
    })
});






