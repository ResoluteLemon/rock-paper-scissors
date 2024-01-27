const choices = ['rock', 'paper', 'scissors'];

const outcomes = ['tie', 'lose', 'win'];

function getComputerChoice() {
    return Math.floor(Math.random()*3);    
} 

function getPlayerChoice() {
    const input = prompt('Choose rock, paper, or scissors.').toLowerCase();
    const index = choices.findIndex(choice => choice === input);
    return index === -1 ? 
        (alert('Invalid Choice. Please re-enter'), getPlayerChoice()) 
        : index;
}

function playRound(getPlayerChoice, getComputerChoice) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const outcome = calculateOutcome(playerSelection, computerSelection);
    logRoundStats(playerSelection, computerSelection, outcome);
}

function calculateOutcome(playerSelection, computerSelection) {
    const selectionDifference = computerSelection - playerSelection;
    const outcomesValue = selectionDifference > 0 ? 
        selectionDifference % 3 : 
        (selectionDifference+3) % 3;
    return outcomes[outcomesValue];
}

//to remove
function logRoundStats(playerSelection, computerSelection, outcome) {
    console.log(`player chose ${playerSelection}`);
    console.log(`computer chose ${computerSelection}`);
    console.log(outcome);
}

// playRound(getPlayerChoice, getComputerChoice);

