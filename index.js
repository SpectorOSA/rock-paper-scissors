
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

// global scope
let humanScore = 0;
let computerScore = 0;

// the logic to get the computer choice
function getComputerChoice() {
    const choice0 = 'Rocks';
    const choice1 = 'Paper';
    const choice2 = 'Scissors';

    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0) {
        return choice0;
    } else if (randomNum == 1) {
        return choice1;
    } else {
        return choice2;
    }

}

// the logic to get the human choice
function getHumanChoice() {
    const userChoice = prompt("Enter Rocks, Paper or Scissors:");

    return userChoice
}

function playRound(humanChoice, computerChoice) {
    
}

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;


console.log(getComputerChoice());
console.log(getHumanChoice());

// ^^^ PSEUDOCODE (the way I understand it):
//      create a function that get the computer choice.
//      inside the function assign a value to 'Rocks', 'Paper', 'Scissors'.
//      create a procedure where a random number between 0 to 3 is selected.
//      if random number is equal to 0, return the value 'Rocks'.
//      else if the random number is equal to 1, return the value 'Paper'.
//      else just return the value 'Scissors' if the random number is neither. 
//      output function to the console.