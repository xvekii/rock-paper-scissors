
// "Computer": randomly returns "rock" "paper" "scissors"
const arr = ["rock", "paper", "scissors"];

function getComputerChoice(max) {
  let temp = Math.floor(Math.random() * max);
  return arr[temp];
}
// Plays a round and announces the winner
function playRound(playerSelection, computerSelection) {
  const rockBtn = document.querySelector(".rock-btn");
  rockBtn.addEventListener("click", event => {
    console.log(event.target);
  });
  
  // playerSelection = prompt("Enter Your Choice: ");
  computerSelection = getComputerChoice(3);
  console.log("Computer: " + (computerSelection));

  console.log("Player: " + (playerSelection));
  
  // Player winning conditions
  if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    return "playerWin";
  } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
    return "playerWin";
  } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    return "playerWin";
  
  // Computer winning conditions
  } else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
    return "computerWin";
  } else if ((computerSelection == "paper") && (playerSelection == "rock")) {
    return "computerWin";
  } else if ((computerSelection == "scissors") && (playerSelection == "paper")) {
    return "computerWin";
  } else if (computerSelection == playerSelection) {
    return "Tie";
  } else {
    return "Error";
  } 
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  // for (let i = 0; i < 5; i++) {
    
    let result = playRound();
    
    if (result == "playerWin") {
      console.log("You win!");
      playerScore++;
    } else if (result == "computerWin") {
      console.log("You lose!");
      computerScore++;
    } else {
      console.log("Tie!");
    }
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
  // }
  
  if (computerScore > playerScore) {
    console.log("Final Winner: Computer!");
  } else if (playerScore > computerScore){
    console.log("Final Winner: Player!");
  } else {
    console.log("No One Wins!");
  }
} 
game();