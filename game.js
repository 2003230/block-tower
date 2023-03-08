const boardWidth = 300;
const boardHeight = 500;
const blockSize = 50;

let gameBoard;
let blocks = [];

function init() {
  gameBoard = document.getElementById("game-board");

  document.getElementById("new-game").addEventListener("click", startNewGame);
}

function startNewGame() {
  // clear the board
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }

  // create the blocks
  blocks = [
    { width: 2, height: 2 },
    { width: 1, height: 3 },
    { width: 1, height: 1 },
    { width: 3, height: 1 },
    { width: 2, height: 1 },
  ];

  // shuffle the blocks
  shuffle(blocks);

  // place the blocks on the board
  let x = 0;
  let y = 0;
  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];
    let blockDiv = document.createElement("div");
    blockDiv.className = "block";
    blockDiv.style.width = block.width * blockSize + "px";
    blockDiv.style.height = block.height * blockSize + "px";
    blockDiv.style.left = x + "px";
    blockDiv.style.top = y + "px";
    gameBoard.appendChild(blockDiv);
    x += block.width * blockSize;
    if (x >= boardWidth) {
      x = 0;
      y += blockSize;
    }
  }
}

function shuffle(array) {
  for (let i = array.length - 1;
