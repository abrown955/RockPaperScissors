function getComputerChoice(){
    let choice = Math.floor(Math.random()*(2))
    switch(choice){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            return "error"
    }
}

console.log(choice)