let playerScore = 0,
  computerScore = 0;

const $playerCurrentScore = document.querySelector("#player-score"),
  $computerCurrentScore = document.querySelector("#computer-score"),
  $whoWon = document.getElementById("who-won"),
  $finalResult = document.querySelector("#final-result");

const $rock = document.getElementById("rock"),
  $paper = document.getElementById("paper"),
  $scissors = document.getElementById("scissors"),
  $restart = document.getElementById("restart");

function getComputerChoice() {
  const choices = ["paper", "rock", "scissors"];
  let finalComputerChoice = choices[Math.floor(Math.random() * choices.length)];
  return finalComputerChoice;
}

function playRound(playerSelection, computerSelection) {
  console.log(typeof playerSelection);
  console.log(typeof computerSelection);
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" &&
      computerSelection === "paper" &&
      (playerScore <= 5 || computerScore <= 5))
  ) {
    playerScore++;
    $playerCurrentScore.textContent = `${playerScore}`;
    $whoWon.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" &&
      computerSelection === "rock" &&
      (playerScore <= 5 || computerScore <= 5))
  ) {
    computerScore++;
    $computerCurrentScore.textContent = `${computerScore}`;
    $whoWon.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    $whoWon.textContent = `Draw!`;
  }
  if (playerScore >= 5) {
    $finalResult.textContent = `Player wins. ${playerScore} to ${computerScore}`;
    disableButtons();
  } else if (computerScore >= 5) {
    $finalResult.textContent = `Computer wins. ${computerScore} to ${playerScore}`;
    disableButtons();
  }
}

document.addEventListener("click", (e) => {
  console.log("Click en", e.target);
  if (e.target.matches("#rock")) {
    playRound("rock", getComputerChoice());
  }
  if (e.target.matches("#paper")) {
    playRound("paper", getComputerChoice());
  }
  if (e.target.matches("#scissors")) {
    playRound("scissors", getComputerChoice());
  }
});

function disableButtons() {
  $rock.disabled = true;
  $paper.disabled = true;
  $scissors.disabled = true;
  if (($rock.disabled = true)) {
    $rock.classList.toggle("button-disabled");
    $paper.classList.toggle("button-disabled");
    $scissors.classList.toggle("button-disabled");
    $restart.classList.toggle("button-restart-glow");
  }
}

function refreshPage() {
  window.location.reload(true);
}

$restart.addEventListener("click", refreshPage);
