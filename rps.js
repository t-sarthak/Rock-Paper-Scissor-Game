const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const playAndReset = document.querySelector(".btn");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const playerPointText = document.querySelector(".points-player");
const computerPointText = document.querySelector(".points-computer");
const computerChoiceImg = document.querySelector(".comp-img");
const round = document.querySelector(".round-number");
const winner = document.querySelector(".winner");

let user = "";
let computer = "";
let playerPoints = 0;
let computerPoints = 0;

let isplaying = false;
let count = 0;

const play = () => {
  playAndReset.addEventListener("click", () => {
    if (isplaying) {
      isplaying = false;
      round.textContent = "";
      playAndReset.textContent = "Play";
      playerPointText.textContent = "";
      computerPointText.textContent = "";
      playerChoice.textContent = "";
      computerChoice.textContent = "";
      computerChoiceImg.src = " ";
      winner.textContent = "";
    } else {
      isplaying = true;
      count = 0;
      round.textContent = "Round: 0";
      playAndReset.textContent = "Reset";
      playerPointText.textContent = "Points: 0";
      computerPointText.textContent = "Points: 0";
      playerPoints = 0;
      computerPoints = 0;
    }
  });
};
play();

const generateRandom = () => {
  let random = Math.floor(Math.random() * 3) + 1;
  round.textContent = `Round: ${++count}`;
  if (random === 1) {
    computer = "rock";
    computerChoiceImg.src = "img/rock.png";
    computerChoice.textContent = "Computer selected: Rock";
  } else if (random === 2) {
    computer = "paper";
    computerChoiceImg.src = "img/paper.png";
    computerChoice.textContent = "Computer selected: Paper";
  } else if (random === 3) {
    computer = "scissor";
    computerChoiceImg.src = "img/scissors.png";
    computerChoice.textContent = "Computer selected: Scissor";
  }
};

rock.addEventListener("click", () => {
  if (isplaying) {
    user = "rock";
    generateRandom();
    playerChoice.textContent = "Player choice: Rock";
    win();
  }
});

paper.addEventListener("click", () => {
  if (isplaying) {
    generateRandom();
    user = "paper";
    playerChoice.textContent = "Player choice: Paper";
    win();
  }
});

scissor.addEventListener("click", () => {
  if (isplaying) {
    generateRandom();
    user = "scissor";
    playerChoice.textContent = "Player choice: Scissor";
    win();
  }
});

const win = () => {
  if (user === computer) {
    winner.textContent = "Draw";
  } else if (user === "rock" && computer === "paper") {
    computerPointText.textContent = `Points: ${++computerPoints}`;
    winner.textContent = "Computer won";
  } else if (user === "rock" && computer === "scissor") {
    playerPointText.textContent = `Points: ${++playerPoints}`;
    winner.textContent = "Player won";
  } else if (user === "paper" && computer === "rock") {
    playerPointText.textContent = `Points: ${++playerPoints}`;
    winner.textContent = "Player won";
  } else if (user === "paper" && computer === "scissor") {
    computerPointText.textContent = `Points: ${++computerPoints}`;
    winner.textContent = "Computer won";
  } else if (user === "scissor" && computer === "rock") {
    computerPointText.textContent = `Points: ${++computerPoints}`;
    winner.textContent = "Computer won";
  } else if (user === "scissor" && computer === "paper") {
    playerPointText.textContent = `Points: ${++playerPoints}`;
    winner.textContent = "Player won";
  }
};
