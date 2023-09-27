function getComputerChoice() {
    let computerArray = ["rock", "paper", "scissors"];
    return computerArray[Math.floor(Math.random() * 3)];
  }

  function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "player won";
    } else if (playerSelection === computerSelection) {
      return "tie";
    } else {
      return "computer won";
    }
  }

  function game() {
    for (let i = 1; i < 6; i++) {
      let userAnswer = prompt("Rock, paper or scissors?").toLowerCase();
      console.log(playRound(userAnswer, getComputerChoice()));
    }
  }