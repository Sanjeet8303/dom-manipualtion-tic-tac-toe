const boxes = document.querySelectorAll(".box");
// ✅ FIXED: added dot before class name
const gameInfo = document.querySelector(".game-info");
// ✅ FIXED: missing dot earlier
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = [   // ✅ FIXED: spelling mistake
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function initGame() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  boxes.forEach((box, index) => {
    box.innerText = "";
    box.style.pointerEvents = "all";
    box.classList = `box box${index + 1}`;
  });
  newGameBtn.classList.remove("active");
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}
initGame();

function swapTurn() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver() {
  let winner = "";

  winningPositions.forEach((position) => {
    // ✅ FIXED: Corrected OR to AND logic
    if (
      gameGrid[position[0]] !== "" &&
      gameGrid[position[0]] === gameGrid[position[1]] &&
      gameGrid[position[1]] === gameGrid[position[2]]
    ) {
      winner = gameGrid[position[0]];

      // disable all boxes
      boxes.forEach((box) => (box.style.pointerEvents = "none"));

      // highlight winning boxes
      boxes[position[0]].classList.add("win");
      boxes[position[1]].classList.add("win");
      boxes[position[2]].classList.add("win");
    }
  });

  if (winner !== "") {
    gameInfo.innerText = `Winner Player - ${winner}`;
    newGameBtn.classList.add("active");
    return;
  }

  // check for draw
  let fillCount = 0;
  gameGrid.forEach((box) => {
    if (box !== "") fillCount++;
  });

  if (fillCount === 9) {
    gameInfo.innerText = "Game Tied!";
    newGameBtn.classList.add("active");
  }
}

// ✅ FIXED: added index parameter
function handleClick(index) {
  if (gameGrid[index] === "") {
    boxes[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;
    boxes[index].style.pointerEvents = "none";
    swapTurn();
    checkGameOver();
  }
}

// ✅ FIXED: pass index properly to handleClick
boxes.forEach((box, index) => {
  box.addEventListener("click", () => handleClick(index));
});

newGameBtn.addEventListener("click", initGame);
