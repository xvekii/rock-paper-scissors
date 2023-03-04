
// "Computer": randomly returns Rock Paper Scissors
let arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice(max) {
  let temp = Math.floor(Math.random() * max);
  return arr[temp];
}

console.log(getComputerChoice(3));

// Plays a round and announces the winner
function playRound(playerSelection, computerSelection) {
  
  // arrange the case insensitivenesss
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  // Player winning conditions
  if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    return "You Win! Rock beats Scissors!";
  }
  

  // return "You Lose! Paper beats Rock"
}