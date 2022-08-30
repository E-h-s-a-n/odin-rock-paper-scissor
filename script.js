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

    if (result.toLowerCase() === 'win'){
        result = `You Win this round! ${p} beats ${c}`;
    } else {
        result = `You Lose this round! ${c} beats ${p}`;
    }

    return result;
}

// play 5 round of the game
function game(maxRound) {
    let playerWins = 0;
    let computerWins = 0;
    let roundResult;
    let player;
    let computer;
    
    for (i=0; i<maxRound; i++){
        player = getPlayerChoice();
        computer = getComputerChoice();
        roundResult = playRound(player, computer);

        if (roundResult.toLowerCase().search('win') > 0) {
            playerWins += 1;
        } else if (roundResult.toLowerCase().search('lose') > 0){
            computerWins += 1;
        }

        console.log(`Round Number: ${i+1}/${maxRound}`);
        console.log('You:', player);
        console.log('Computer:', computer);
        console.log(roundResult);
        console.log(`Score: ${playerWins} - ${computerWins}`);
        console.log();
    }

    if (playerWins > computerWins) {
        console.log('You Win!')
    } else if (playerWins < computerWins) {
        console.log('Computer Win!')
    } else {
        console.log('Tie Match!')
    }

    alert('Finished\nReload for another round');

}

game(5);