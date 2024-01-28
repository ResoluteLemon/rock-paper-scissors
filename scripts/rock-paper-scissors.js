const choices = ['rock', 'paper', 'scissors'];
const outcomes = ['tie', 'lose', 'win'];

function getComputerChoice() {
    return Math.floor(Math.random()*3);    
} 

function getPlayerChoice() {
    const input = prompt('Choose rock, paper, or scissors.').toLowerCase();
    const choicesIndex = choices.findIndex(choice => choice === input);
    return choicesIndex === -1 ? 
        (alert('Invalid Choice. Please re-enter'), getPlayerChoice()) 
        : choicesIndex;
}

function calculateOutcome(playerSelection, computerSelection) {
    const selectionDifference = computerSelection - playerSelection;
    const outcomesIndex = selectionDifference > 0 ? 
        selectionDifference % 3 : 
        (selectionDifference+3) % 3;
    const outcomeText = outcomes[outcomesIndex];
    return outcomeText;
}

function playerFeedback() {
    
}

function playRound(state) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const outcomeText = calculateOutcome(playerSelection, computerSelection);
    //to remove
    logRoundStats(playerSelection, computerSelection, outcomeText);
}

function game(maxRounds) {
    //initiate state
    const state = {
        playerScore: 0,
        computerScore: 0,
        currentRound: 1,
        maxRounds: 0
    }
    //play round
    //if tie, play around again
    //if !tie, update score and increment round
    //if currentRound >= rounds, end game
    //return game win/lose outcome
}

//to remove
function logRoundStats(playerSelection, computerSelection, outcomeText) {
    console.log(`player chose ${choices[playerSelection]}`);
    console.log(`computer chose ${choices[computerSelection]}`);
    console.log(`You ${outcomeText}`);
}

// playRound(getPlayerChoice, getComputerChoice);

