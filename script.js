
// "Computer": randomly returns Rock Paper Scissors
let arr = ["rock", "paper", "scissors"];

function getComputerChoice(max) {
  let temp = Math.floor(Math.random() * max);
  return arr[temp];
}

console.log(getComputerChoice(3));

// Plays a round and announces the winner
function playRound(playerSelection, computerSelection) {
  
  // arrange the case insensitivenesss
  playerSelection.toLowerCase();
  // console.log(playerSelection);
  
  
  // Player winning conditions
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors!";
  }
}
playerSelection = "rock";
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
  // return "You Lose! Paper beats Rock"
