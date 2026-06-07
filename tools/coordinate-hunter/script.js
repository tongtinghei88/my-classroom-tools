const board = document.getElementById("board");
const targetEl = document.getElementById("target");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const messageEl = document.getElementById("message");
const startButton = document.getElementById("start");

let target = { x: 0, y: 0 };
let score = 0;
let time = 60;
let timer = null;
let active = false;

function randomCoord() {
  return Math.floor(Math.random() * 11) - 5;
}

function setTarget() {
  target = { x: randomCoord(), y: randomCoord() };
  targetEl.textContent = `(${target.x}, ${target.y})`;
}

function renderBoard() {
  board.innerHTML = "";
  for (let y = 5; y >= -5; y -= 1) {
    for (let x = -5; x <= 5; x += 1) {
      const cell = document.createElement("button");
      cell.className = "cell";
      if (x === 0 || y === 0) cell.classList.add("axis");
      cell.type = "button";
      cell.textContent = `${x},${y}`;
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.addEventListener("click", onCellClick);
      board.appendChild(cell);
    }
  }
}

function onCellClick(event) {
  if (!active) return;
  const cell = event.currentTarget;
  const x = Number(cell.dataset.x);
  const y = Number(cell.dataset.y);

  if (x === target.x && y === target.y) {
    score += 1;
    scoreEl.textContent = score;
    messageEl.textContent = "Correct. New target!";
    cell.classList.add("hit");
    setTarget();
    return;
  }

  messageEl.textContent = `Try again. You clicked (${x}, ${y}).`;
  cell.classList.add("miss");
  window.setTimeout(() => cell.classList.remove("miss"), 350);
}

function startGame() {
  score = 0;
  time = 60;
  active = true;
  scoreEl.textContent = score;
  timeEl.textContent = time;
  messageEl.textContent = "Go!";
  setTarget();
  clearInterval(timer);
  timer = setInterval(() => {
    time -= 1;
    timeEl.textContent = time;
    if (time <= 0) {
      active = false;
      clearInterval(timer);
      messageEl.textContent = `Time is up. Final score: ${score}`;
    }
  }, 1000);
}

renderBoard();
setTarget();
startButton.addEventListener("click", startGame);

