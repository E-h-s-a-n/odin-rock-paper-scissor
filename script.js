// read user selection
function getPlayerChoice() {
    selection =
    prompt("Rock or (R) \nPaper or (P) \nScissor or (S)?").toLowerCase();
    
    if (selection == 'r') {
        selection = 'rock';
    } else if (selection == 'p') {
        selection = 'paper';
    } else if (selection == 's') {
        selection = 'scissor';
    }
    return selection;
}

// determine computer selection
function getComputerChoice() {
    random = Math.floor(Math.random() * 3)
    if (random===0){
        random = 'rock';
    } else if (random===1){
        random = 'paper';
    } else {
        random = 'scissor';
    }
    return random;
}   


// play a single round (player selection, computer selection)
// return the winner (result)
function playRound(playerSelect, computerSelect) {
    let p = playerSelect;
    let c = computerSelect;
    let result = '';
    if (c == p) {
        result = "That's a Tie"
    } else {
        if (p == 'rock') {
            if (c == 'paper') {
                result = 'Lose';
            } else {
                result = 'Win';
            }
        } else if (p == 'paper') {
            if (c == 'scissor') {
                result = 'Lose';
            } else {
                result = 'Win';
            }
        } else if (p == 'scissor') {
            if (c == 'rock') {
                result = 'Lose';
            } else {
                result = 'Win';
            }
        }
    }
    return result
}


// play 5 round of the game


let player = getPlayerChoice();
let computer = getComputerChoice();
console.log('You:', player);
console.log('Computer:', computer);
console.log(playRound(player, computer))
