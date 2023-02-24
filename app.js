const game = document.querySelector('.game');
const grid = document.querySelector('.grid');
const message = document.querySelector('.message');
const reset = document.querySelector('.reset');

let currentPlayer = 'X';
let gameEnd = false;
let gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
];

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const showWinner = () => {
  message.textContent = `${currentPlayer} wins!`;
  gameEnd = true;
};

const checkWin = () => {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      showWinner();
      break;
    }
  }
};

const checkDraw = () => {
  if (gameBoard.every(cell => cell)) {
    message.textContent = "It's a draw!";
    gameEnd = true;
  }
};

const handleClick = (e) => {
  const cell = e.target;
  const index = cell.getAttribute('id');

  if (gameBoard[index] || gameEnd) {
