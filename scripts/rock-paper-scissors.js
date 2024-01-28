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

function playerFeedback(outcomeText, playerSelection, computerSelection, state) {
    //this function could handle DOM manipulation, alerts, or console logs, whichever is needed
    //might take the state as an argument if needed in the future
    switch (outcomeText) {
        case 'win':
            alert(`You win the round! ${choices[playerSelection]} beats ${choices[computerSelection]} ${renderGameStats(state)}`);
            break;
        case 'lose':
            alert(`You lose the round! ${choices[computerSelection]} beats ${choices[playerSelection]} ${renderGameStats(state)}`);
            break;
        case 'tie':
            alert(`It is a tie. We'll go again. ${renderGameStats(state)}`);
            break;
        case 'victory':
            alert(`You win the game! ${renderGameStats(state)}`);
            break;
        case 'defeat':
            alert(`You lose the game! ${renderGameStats(state)}`);
            break;
    }
}

function renderGameStats (state) {
    return `
    Round: ${state.currentRound} of ${state.maxRounds}
    Player Score: ${state.playerScore}
    Computer Score: ${state.computerScore}`;
}

function resolveGameWinner(state, playerSelection, computerSelection) {
    return state.playerScore > state.computerScore ? 
    playerFeedback('victory', playerSelection, computerSelection, state) : playerFeedback('defeat', playerSelection, computerSelection, state);
}


function playRound(state) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const outcomeText = calculateOutcome(playerSelection, computerSelection);
    if (outcomeText === 'win') {
        state.playerScore++;
        playerFeedback(outcomeText,playerSelection,computerSelection,state);
        return state.currentRound < state.maxRounds ? 
            (state.currentRound++, playRound(state)) : 
            resolveGameWinner(state, playerSelection, computerSelection);
    } else if (outcomeText === 'tie') {
        playerFeedback(outcomeText,playerSelection,computerSelection,state);
        return playRound(state);
    } else {
        state.computerScore++;
        playerFeedback(outcomeText,playerSelection,computerSelection,state);
        return state.currentRound < state.maxRounds ? 
            (state.currentRound++, playRound(state)) : 
            resolveGameWinner(state, playerSelection, computerSelection);
    }
}



function game(maxRounds) {
    //initiate state
    const state = {
        playerScore: 0,
        computerScore: 0,
        currentRound: 1,
        maxRounds: maxRounds
    }
    playRound(state);
}

game(5);

