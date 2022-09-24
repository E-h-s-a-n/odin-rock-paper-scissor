(function (logger) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }

            output += "</span>&nbsp;";
        }

        logger.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };
})(document.getElementById("logger"));


function getPlayerChoice() {
    const message = `${'Rock'.padEnd(8)} or  R ?\n${'Paper'.padEnd(8)} or  P ?\n${'Scissor'.padEnd(8)} or S ?`
    let selection = prompt(message, '').toLowerCase();
    
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
    const hand = ['rock', 'paper', 'scissor']
    const random = Math.floor(Math.random() * 3)

    return hand[random];
}   

function playRound(playerSelect, computerSelect) {
    const p = playerSelect;
    const c = computerSelect;
    let result = "";

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
            // false or empty '' or wrong word by player
            result = `You Lose this round! ${c} beats ${p}`;
        }
    }

    return result;
}

function playGame(event, maxRound=1) {
    let playerWins = 0;
    let computerWins = 0;
    let roundResult;
    let player = event.target.value;
    let computer;
    
    while (i=0; i<maxRound; i++){
        //player = getPlayerChoice();
        computer = getComputerChoice();
        roundResult = playRound(player, computer);

        if (roundResult.toLowerCase().search('win') > 0) {
            playerWins += 1;
        } else if (roundResult.toLowerCase().search('lose') > 0){
            computerWins += 1;
        }
        // console.log(`Round Number: ${i+1}/${maxRound}`);
        console.log('You: ' + player);
        console.log('Computer: ' + computer);
        console.log('Result: ' + roundResult);
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
    console.log('------------------')
    // alert('Finished\nReload for another round');
}

const play_btn = document.querySelectorAll('button');
const player_score = document.querySelector('.score-number .player');
const computer_score = document.querySelector('.score-number .enemy');

const player_text = document.querySelector('#player-text');
const computer_text = document.querySelector('#enemy-text');

const player_hand = document.querySelector('.player img');
const computer_hand = document.querySelector('.computer img');

const round_winner = document.querySelector('round-win');

play_btn.forEach(element => {
    element.addEventListener('click', playGame)
});