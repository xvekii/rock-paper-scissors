
// "Computer": randomly returns Rock Paper Scissors
let arr = ["rock", "paper", "scissors"];

function getComputerChoice(max) {
  let temp = Math.floor(Math.random() * max);
  return arr[temp];
}

// console.log(getComputerChoice(3));

// Plays a round and announces the winner
function playRound(playerSelection, computerSelection) {
  
  // arrange the case insensitivenesss
  playerSelection.toLowerCase();
  
  // Player winning conditions
  if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    return "You Win! Rock beats Scissors!";
  } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
    return "You Win! Paper beats Rock!";
  } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    return "You Win! Scissors beat Paper!";
  
    // Computer winning conditions
  } else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
    return "You Lose! Rock beats Scissors!";
  } else if ((computerSelection == "paper") && (playerSelection == "rock")) {
    return "You Lose! Paper beats Rock!";
  } else if ((computerSelection == "scissors") && (playerSelection == "paper")) {
    return "You Lose! Scissors beat Paper!";
  } else if (computerSelection == playerSelection){
    return "It's a Tie!";
  } else {
    return "Game over";
  }
  
}
const playerSelection = "rock";
console.log("Player: " + (playerSelection));

const computerSelection = getComputerChoice(3);
console.log("Computer: " + (computerSelection));

console.log(playRound(playerSelection, computerSelection));
