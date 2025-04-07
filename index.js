// Global variable

// global scope
let humanScore = 0;
let computerScore = 0;

// This is a shorthand version of the active code below //
// function getComputerChoice() {
//             const choices = {
//                 0: 'rocks',
//                 1: 'paper',
//                 2: 'scissors'
//             }

//             const randomNum = Math.floor(Math.random() * 3);
//             return choices[randomNum];
        
//         }



// the logic to get the computer choice
function getComputerChoice() {
    const choice0 = 'rock';
    const choice1 = 'paper';
    const choice2 = 'scissors';

    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0) {
        return choice0;
    } else if (randomNum == 1) {
        return choice1;
    } else {
        return choice2;
    }

}

// ^^^ PSEUDOCODE (the way I understand it):
//      create a function that get the computer choice.
//      inside the function assign a value to 'Rocks', 'Paper', 'Scissors'.
//      create a procedure where a random number between 0 to 3 is selected.
//      if random number is equal to 0, return the value 'Rocks'.
//      else if the random number is equal to 1, return the value 'Paper'.
//      else just return the value 'Scissors' if the random number is neither. 
//      output function to the console.

// the logic to get the human choice
function getHumanChoice() {
    let choice = prompt('Enter Rock, Paper, or Scissors').toLowerCase();

    while (choice !== 'rock' && choice !=='paper' && choice !=='scissors'){
        choice = prompt('Invalid! you MUST enter Rock, Paper, or  Scissors');
    } 
    return choice;
}



function playRound(humanSelection, computerSelection){

    if (humanSelection === computerSelection){
        return 'It a tie!';
    }else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') || 
        (humanSelection === 'paper' && computerSelection === 'rock') || 
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ){
        humanScore++;
        return 'You Win!';
    } else {
        computerScore++;
        return 'You Lose!';
    }
    
}


function playGame(){
    for (let round = 1; round <= 5; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${round}`);

        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);

        const result = playRound(humanSelection, computerSelection);
        console.log(result);
        console.log(`Score => ${humanScore} | ${computerScore}`) 
        console.log('-----------------------------------------')

        
    }
}



// console.log(getComputerChoice());
// console.log(getHumanChoice());

console.log(playGame());

//Final Result
console.log('Game Over!');
console.log('FINAL SCORE');
console.log(`Human score: ${humanScore}    |    Computer Score: ${computerScore}`);

if (humanScore > computerScore){
    console.log('You won best out of 5!')
}else if (computerScore > humanScore){
    console.log('The computer won best out of 5!')
}else {
    console.log('It was an overall tie!')
}



// The order of execution (< IMPORTANT) matters in JavaScript.
// The console prints exactly what the values are at the moment you call console.log().
// It's totally fine to have the score print in the middle, top, or bottom of your code — as long as it comes after the function that updates the score.


