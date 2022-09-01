function getPlayerChoice() {
    message = `${'Rock'.padEnd(8)} or  R ?\n${'Paper'.padEnd(8)} or  P ?\n${'Scissor'.padEnd(8)} or git S ?`
    selection = prompt(message, '').toLowerCase();
    
    if (selection == 'r') {
        selection = 'rock';
    } else if (selection == 'p') {
        selection = 'paper';
    } else if (selection == 's') {
        selection = 'scissor';
    }
    
    return selection;
}

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


function playRound(playerSelect, computerSelect) {
    let p = playerSelect;
    let c = computerSelect;
    let result = false;

    if (c == p) {
        result = "That's a Tie"
    } else {
        if (p == 'rock' && c == 'scissor') {
            result = true
        } else if (p == 'paper' && c == 'rock') {
            result = true;
        } else if (p == 'scissor' && c == 'paper') {
            result = true;
        }
        
        if (result === true){
            result = `You Win this round! ${p} beats ${c}`;
        } else {
            // false or empty '' or wrong word 
            result = `You Lose this round! ${c} beats ${p}`;
        }
    }

    return result;
}

function playGame(maxRound) {
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
        console.log('Result:', roundResult);
        console.log(`Score: ${playerWins} - ${computerWins} (You vs Browser)`);
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

playGame(5);