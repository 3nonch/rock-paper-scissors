const pScoreBox = document.querySelector(".pScore");
const cScoreBox = document.querySelector(".cScore");

const winnerBox = document.querySelector(".winner");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.querySelector(".reset");

const playerImg = document.querySelector(".playerOneImg");
const compImg = document.querySelector(".playerTwoImg");

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const compChoiceArr = ["rock", "paper", "scissors"];
  const getRandomChoice =
    compChoiceArr[Math.floor(Math.random() * compChoiceArr.length)];
  return getRandomChoice;
};

const determineWinner = function (player, computer) {
  if (player === computer) {
    return (winnerBox.textContent = `tie 🤝`);
  }
  if (player === "rock") {
    if (computer === "paper") {
      computerScore++;
      return (winnerBox.textContent = `computer 💻`);
    } else if (computer === "scissors") {
      playerScore++;
      return (winnerBox.textContent = `player 🥳`);
    }
  }
  if (player === "paper") {
    if (computer === "rock") {
      playerScore++;
      return (winnerBox.textContent = `player 🥳`);
    } else if (computer === "scissors") {
      computerScore++;
      return (winnerBox.textContent = `computer 💻`);
    }
  }
  if (player === "scissors") {
    if (computer === "rock") {
      computerScore++;
      return (winnerBox.textContent = `computer 💻`);
    } else if (computer === "paper") {
      playerScore++;
      return (winnerBox.textContent = `player 🥳`);
    }
  }
};

const playRound = function (player, computer) {
  determineWinner(player, computer);
  pScoreBox.textContent = playerScore;
  cScoreBox.textContent = computerScore;
};

rockBtn.addEventListener("click", function () {
  player = "rock";
  computer = getComputerChoice();
  playerImg.src = "./rock.png";
  compImg.src = `./${computer}.png`;
  if (playerScore < 3 && computerScore < 3) {
    playRound(player, computer);
  } else {
    document.body.style.background = "red";
    resetBtn.style.background = "#feea00";
  }
});

paperBtn.addEventListener("click", function () {
  player = "paper";
  computer = getComputerChoice();
  playerImg.src = "./paper.png";
  compImg.src = `./${computer}.png`;
  if (playerScore < 3 && computerScore < 3) {
    playRound(player, computer);
  } else {
    document.body.style.background = "red";
    resetBtn.style.background = "#feea00";
    document.querySelector(".resetGame").textContent =
      "Game is over! Please reset the game.";
    document.querySelector(".resetGame").style.color = "white";
  }
});

scissorsBtn.addEventListener("click", function () {
  player = "scissors";
  computer = getComputerChoice();
  playerImg.src = "./scissors.png";
  compImg.src = `./${computer}.png`;
  if (playerScore < 3 && computerScore < 3) {
    playRound(player, computer);
  } else {
    document.body.style.background = "red";
    resetBtn.style.background = "#feea00";
  }
});

resetBtn.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  pScoreBox.textContent = "0";
  cScoreBox.textContent = "0";
});
