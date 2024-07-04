
// "Computer": randomly returns "rock" "paper" "scissors"
const arr = ["rock", "paper", "scissors"];

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const monitorLeft = document.querySelector(".monitor.left");
const monitorRight = document.querySelector(".monitor.right");
const monitorLeftSpan = document.querySelector(".monitor-left-span");
const monitorRightSpan = document.querySelector(".monitor-right-span");
const SVGs = document.querySelectorAll("svg");

const announcementsDiv = document.querySelector(".announcements");

turnOnMonitors();
getUserInput();
showChoiceInMonitors();

function showChoiceInMonitors() {
  SVGs.forEach(item => {
    item.addEventListener("click", () => {
      monitorLeftSpan.textContent = "";
      monitorRightSpan.textContent = "";
      let clickedSvgClone = item.cloneNode(true);

      monitorLeftSpan.appendChild(clickedSvgClone);
      removeMonitorContent();
    });
  });
}

function turnOnMonitors() {
  setTimeout(() => {
    monitorLeft.style.backgroundColor = "#000000ad";
    monitorRight.style.backgroundColor = "#000000ad";
    showChooseWeapon();
  }, 2000);
}

function getUserInput() {
  rockBtn.addEventListener("click", () => {
    announcementsDiv.textContent = "";  
    let playerSelection = "rock";
    let computerSelection = getComputerChoice(3);
    
    const roundResult = playRound(playerSelection, computerSelection);
    game(roundResult);
  });

  paperBtn.addEventListener("click", () => {
    announcementsDiv.textContent = ""; 
    let playerSelection = "paper"; 
    let computerSelection = getComputerChoice(3);
    
    const roundResult = playRound(playerSelection, computerSelection);
    game(roundResult);
  });

  scissorsBtn.addEventListener("click", () => {
    announcementsDiv.textContent = ""; 
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice(3);
    
    const roundResult = playRound(playerSelection, computerSelection);
    game(roundResult);
  });
}

function getComputerChoice(max) {
  let temp = Math.floor(Math.random() * max);
  return arr[temp];
}


function showChooseWeapon() {
  announcementsDiv.textContent = "Choose Your Weapon!"  
}


// Plays a round and announces the winner
function playRound(playerSelection, computerSelection) {
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

let playerScore = 0;
let computerScore = 0;

function game(result) {  
  if (result == "playerWin") {
    console.log("You win!");
    announcementsDiv.textContent = "Player Wins!";
    playerScore++;
    removeAnnouncement();
    console.log(playerScore);
  } else if (result == "computerWin") {
    console.log("You lose!");
    announcementsDiv.textContent = "Computer Wins!";
    computerScore++;
    removeAnnouncement();
  } else {
    console.log("It's a Tie!");
    announcementsDiv.textContent = "It's a Tie!";
    removeAnnouncement();
  }
  console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
  
  if (computerScore > playerScore && computerScore === 5) {
    console.log("Final Winner: Computer!");
    announcementsDiv.textContent = "Computer Wins The Game!";
  
  } else if (playerScore > computerScore && playerScore === 5){
    console.log("Final Winner: Player!");
    announcementsDiv.textContent = "Player Wins The Game!";
  
  } else if (playerScore === 5 && computerScore === 5) {
    console.log("No One Wins!");
    announcementsDiv.textContent = "The Game Is Tied!";
  }
} 

function removeMonitorContent() {
  setTimeout(() => {
    monitorLeftSpan.textContent = "";
  }, 1000);
}

function removeAnnouncement() {
  setTimeout(() => {
    announcementsDiv.textContent = "";
  }, 1000);
}



// function removeEventListeners() {

// }
