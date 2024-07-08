
// "Computer": randomly returns "rock" "paper" "scissors"
const arr = ["rock", "paper", "scissors"];
const NORMAL_BTN_BOX_SHADOW = "5px 4px 1px 1px rgba(0, 0, 0, 0.38)";
const PRESSED_BTN_BOX_SHADOW = "5px 4px 1px 1px rgba(239, 71, 111, 0.9)";

const MONITOR_WIN_COLOR = "rgba(6, 214, 160, 0.3)";
const MONITOR_LOSS_COLOR = "rgba(239, 71, 111, 0.3)";
const MONITOR_TIE_COLOR = "rgba(103, 58, 183, 0.3)";

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const monitorLeft = document.querySelector(".monitor.left");
const monitorRight = document.querySelector(".monitor.right");
const monitorLeftSpan = document.querySelector(".monitor-left-span");
const monitorRightSpan = document.querySelector(".monitor-right-span");

const monitorLeftPara = document.querySelector(".monitor-left-para");
const monitorRightPara = document.querySelector(".monitor-right-para");
const monitorLeftPointsSpan = document.querySelector(".monitor-left-points-span");
const monitorRightPointsSpan = document.querySelector(".monitor-right-points-span");
const controlsContainer = document.querySelector(".controls-container");
const startNewGameBtn = document.querySelector(".start-new-game-btn");

const RPSBtns = document.querySelectorAll(".rock-btn, .paper-btn, .scissors-btn");
const SVGs = document.querySelectorAll(".rock-SVG, .paper-SVG, .scissors-SVG");
const announcementsDiv = document.querySelector(".announcements");

let playerScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", () => {
  startNewGameBtn.addEventListener("click", () => {
    resetScore();
    removePoints();
    turnOnMonitors();
    showChooseWeapon();
    startNewGameBtn.style.visibility = "hidden";
    setTimeout(() => {
      controlsContainer.style.display = "flex";
    }, 500);
  });
});

function removeMonitorContentImmediately() {
  monitorLeftSpan.textContent = "";
  monitorRightSpan.textContent = "";
}

function hideControls() {
  controlsContainer.style.display = "none";
}

function turnOnMonitors() {
  monitorLeft.style.backgroundColor = "#000000ad";
  monitorRight.style.backgroundColor = "#000000ad";
}

rockBtn.addEventListener("click", () => {
  timeBlockControls();
  announcementsDiv.textContent = "";  
  let playerSelection = "rock";
  let computerSelection = getComputerChoice(3);
  showComputerChoiceInMonitor(computerSelection);

  const roundResult = playRound(playerSelection, computerSelection);
  let clickedSvgClone = SVGs[0].cloneNode(true);
  monitorLeftSpan.appendChild(clickedSvgClone);
  
  game(roundResult);
  removeMonitorContentTimeout();
});

paperBtn.addEventListener("click", () => {
  timeBlockControls();
  announcementsDiv.textContent = ""; 
  let playerSelection = "paper"; 
  let computerSelection = getComputerChoice(3);
  showComputerChoiceInMonitor(computerSelection);
  
  const roundResult = playRound(playerSelection, computerSelection);
  let clickedSvgClone = SVGs[1].cloneNode(true);
  monitorLeftSpan.appendChild(clickedSvgClone);
  
  game(roundResult);
  removeMonitorContentTimeout();
});

scissorsBtn.addEventListener("click", () => {
  timeBlockControls();
  announcementsDiv.textContent = ""; 
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice(3);
  showComputerChoiceInMonitor(computerSelection);
  
  const roundResult = playRound(playerSelection, computerSelection);

  let clickedSvgClone = SVGs[2].cloneNode(true);
  monitorLeftSpan.appendChild(clickedSvgClone);
  
  game(roundResult);
  removeMonitorContentTimeout();
});


function showComputerChoiceInMonitor(selected) {
  monitorRightSpan.textContent = "";
  if (selected == "rock") {
    let svgsSelection = SVGs[0];
    let computerSelectedSVGClone = svgsSelection.cloneNode(true);
    monitorRightSpan.appendChild(computerSelectedSVGClone);
  } else if (selected == "paper") {
    let svgsSelection = SVGs[1];
    let computerSelectedSVGClone = svgsSelection.cloneNode(true);
    monitorRightSpan.appendChild(computerSelectedSVGClone);
  } else if (selected == "scissors") {
    let svgsSelection = SVGs[2];
    let computerSelectedSVGClone = svgsSelection.cloneNode(true);
    monitorRightSpan.appendChild(computerSelectedSVGClone);
  }
}

function getComputerChoice(max) {
  let temp = Math.floor(Math.random() * max);
  return arr[temp];
}

function showStartGame() {
  startNewGameBtn.style.visibility = "visible";
}


// Plays a round and announces the winner
function playRound(playerSelection, computerSelection) {
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

function changeMonitorColorPlayerWin() {
  monitorLeft.style.backgroundColor = MONITOR_WIN_COLOR;
  monitorRight.style.backgroundColor = MONITOR_LOSS_COLOR;
}

function changeMonitorColorComputerWin() {
  monitorLeft.style.backgroundColor = MONITOR_LOSS_COLOR;
  monitorRight.style.backgroundColor = MONITOR_WIN_COLOR;
}

function changeMonitorTie() {
  monitorLeft.style.backgroundColor = MONITOR_TIE_COLOR;
  monitorRight.style.backgroundColor = MONITOR_TIE_COLOR;
}

function resetMonitorColor() {
  monitorLeft.style.backgroundColor = "rgba(0, 0, 0, 0.68)";
  monitorRight.style.backgroundColor = "rgba(0, 0, 0, 0.68)";
}


function game(result) {  
  if (result == "playerWin") {
    announcementsDiv.textContent = "Player Wins!";
    changeMonitorColorPlayerWin();
    playerScore++;
    updatePoints(playerScore, computerScore);
    removeAnnouncement();
    console.log(playerScore);
  } else if (result == "computerWin") {
    announcementsDiv.textContent = "Computer Wins!";
    changeMonitorColorComputerWin();
    computerScore++;
    updatePoints(playerScore, computerScore);
    removeAnnouncement();
  } else {
    announcementsDiv.textContent = "It's a Tie!";
    changeMonitorTie();
    removeAnnouncement();
  }
  
  if (computerScore > playerScore && computerScore === 5) {
    hideControls();
    announcementsDiv.textContent = "Computer Wins The Game!";
    showStartGame();
  
  } else if (playerScore > computerScore && playerScore === 5){
    hideControls();
    announcementsDiv.textContent = "Player Wins The Game!";
    showStartGame();
  
  } else if (playerScore === 5 && computerScore === 5) {
    hideControls();
    announcementsDiv.textContent = "The Game Is Tied!";
    showStartGame();
  }
} 

function updatePoints(playerScore, computerScore) {
  const userPoint = "🍉 ";
  const computerPoint = "👾";
  monitorLeftPointsSpan.textContent = `${userPoint.repeat(playerScore)}`;
  monitorRightPointsSpan.textContent = `${computerPoint.repeat(computerScore)}`;
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

function showChooseWeapon() {
  setTimeout(() => {
    announcementsDiv.textContent = "Choose Your Weapon!";
  }, 1000);  
}

function removeMonitorContentTimeout() {
  setTimeout(() => {
    monitorLeftSpan.textContent = "";
    monitorRightSpan.textContent = "";
  }, 2000);
}

function removePoints() {
  monitorLeftPointsSpan.textContent = "";
  monitorRightPointsSpan.textContent = "";
}

function removeAnnouncement() {
  setTimeout(() => {
    resetMonitorColor();
    announcementsDiv.textContent = "";
  }, 2000);
}

function timeBlockControls() {
  rockBtn.disabled = true;
  paperBtn.disabled = true; 
  scissorsBtn.disabled = true;
  
  // RPSBtns.forEach(btn => {
  //   btn.style.backgroundColor = PRESSED_BTN_BOX_SHADOW;
  // });
  // rockBtn.style["boxShadow"] = PRESSED_BTN_BOX_SHADOW;
  // paperBtn.style["boxShadow"] = PRESSED_BTN_BOX_SHADOW; 
  // scissorsBtn.style["boxShadow"] = PRESSED_BTN_BOX_SHADOW;

  setTimeout(() => {
    rockBtn.disabled = false;
    paperBtn.disabled = false; 
    scissorsBtn.disabled = false;

    // RPSBtns.forEach(btn => {
    //   btn.style["boxShadow"] = NORMAL_BTN_BOX_SHADOW;
    // });
    // rockBtn.style["boxShadow"] = NORMAL_BTN_BOX_SHADOW;
    // paperBtn.style["boxShadow"] = NORMAL_BTN_BOX_SHADOW; 
    // scissorsBtn.style["boxShadow"] = NORMAL_BTN_BOX_SHADOW;
  }, 2000);
}