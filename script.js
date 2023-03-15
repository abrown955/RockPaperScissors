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

buttons = document.querySelectorAll("button")
console.log(buttons)
buttons.forEach((btn) => {
    let choice = btn.getAttribute('data-choice')
    // btn.addEventListener("onClick",console.log("yes"))    
    btn.addEventListener("click",e => {
        res = playRound(choice,getComputerChoice())
        console.log(res[1])
    })
});
// function game() {

//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let user = prompt("Rock paper or scissors?")
//         let computer = getComputerChoice()
//         let res = playRound(user, computer)

//         let change = res[0]
//         if (change===1){
//             playerScore++
//         } else if (change ===-1){
//             computerScore++
//         }

//         console.log(res[1])
//         console.log(`Player:${playerScore} \nComputer:${computerScore}`)

//     }
//     if (playerScore>computerScore){
//         console.log('player won')
//     } else{
//         console.log('you did not win')
//     }


// }
// game()