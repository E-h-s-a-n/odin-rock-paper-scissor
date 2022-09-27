/*
(function (logger) {
    console.old = console.log;
    
    console.log = function () {
        var output = "";
        var arg;
        var i;


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
*/

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
            result = `win`;
        } else {
            result = `lose`; // false or empty '' or wrong word by player
        }
    }
    return result;
}

let playerWins = 0;
let computerWins = 0;
function playGame() {

    const player = this.value;
    const computer = getComputerChoice();
    const roundResult = playRound(player, computer);

    player_text.textContent = `You Played ${player.replace(/\b(\w)/, m=>m.toUpperCase())}`;
    computer_text.textContent = `The Enemy Played ${computer.replace(/\b(\w)/, m=>m.toUpperCase())}`
    if (roundResult == 'win') {
        playerWins += 1;
        player_score.textContent = playerWins;
        player_score.classList.remove('animate');
        player_score.classList.add('animate');
        player_score.parentNode.classList.add('score-number-win')
        round_winner.textContent = 'You Won!'
    } else if (roundResult == 'lose'){
        computerWins += 1;
        computer_score.textContent = computerWins;
        computer_score.classList.remove('animate');
        computer_score.classList.add('animate');
        computer_score.parentNode.classList.add('score-number-win')
        round_winner.textContent = 'Lose against the Enemy'
    } else {
        round_winner.textContent = 'Tie, try again!'
    }

    if (playerWins>4 || computerWins>4){
        setTimeout(()=>{
            reset_page.style.visibility = 'visible';
        }, 0)
    }
}

function startOver() {
    playerWins = 0;
    computerWins = 0;
    player_score.textContent = playerWins;
    computer_score.textContent = computerWins;
    player_text.textContent = 'Your hand';
    computer_text.textContent = "The Enemy's hand";
    round_winner.textContent = 'Beat the Enemy!';
    
    reset_page.style.visibility = 'hidden';
}

function removeTransitionClass(t=TRANSITIONS){
    for (const c of TRANSITIONS) {
        if (this.classList.contains(c)) {
            this.classList.remove(c);
        }
    }
}

const play_btn = document.querySelectorAll('.play-btn');
const player_score = document.querySelector('.score-number.player div');
const computer_score = document.querySelector('.score-number.enemy div');

const player_text = document.querySelector('#player-text');
const computer_text = document.querySelector('#enemy-text');
const player_hand = document.querySelector('.player img');
const computer_hand = document.querySelector('.computer img');
const round_winner = document.querySelector('.round-win');

const main_page = document.querySelector('.main')
const reset_page = document.querySelector('.reset')
const reset_btn = document.querySelector('.reset-btn')

const TRANSITIONS = ['animate', 'score-number-win']

play_btn.forEach(element => {
    element.addEventListener('click', playGame);
});

player_score.addEventListener('transitionend' ,removeTransitionClass);
computer_score.addEventListener('transitionend' ,removeTransitionClass);
player_score.parentElement.addEventListener('transitionend', removeTransitionClass)
computer_score.parentElement.addEventListener('transitionend', removeTransitionClass)

reset_btn.addEventListener('click', startOver)

// console.clear()