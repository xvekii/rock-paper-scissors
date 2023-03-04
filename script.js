
// "Computer": randomly returns Rock Paper Scissors
let arr = ["rock", "paper", "scissors"];

function getComputerChoice(max) {
  let temp = Math.floor(Math.random() * max);
  return arr[temp];
}

// console.log(getComputerChoice(3));

// Plays a round and announces the winner
function playRound(playerSelection, computerSelection) {
  
  playerSelection.toLowerCase();
  

  // Player winning conditions
  if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    return true;
  } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
    return true;
  } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    return true;
  
  // Computer winning conditions
  } else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
    return false;
  } else if ((computerSelection == "paper") && (playerSelection == "rock")) {
    return false;
  } else if ((computerSelection == "scissors") && (playerSelection == "paper")) {
    return false;
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

// console.log(playRound(playerSelection, computerSelection));


function game() {
  
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    let result = playRound(playerSelection, computerSelection);
    if (result == true) {
      console.log("You win, hoe!");
      playerScore++;
    } else if (result == false) {
      console.log("You lose, b33cH!");
      computerScore++;
    } else {
      console.log("Tie!");
    }
  }
}

game();
// function winner() {
//   console.log("The winner is ");
// }