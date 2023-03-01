
// "Computer": randomly returns Rock Paper Scissors
let arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice(max) {
  let temp = Math.floor(Math.random() * max);
  return arr[temp];
}

console.log(getComputerChoice(3));
