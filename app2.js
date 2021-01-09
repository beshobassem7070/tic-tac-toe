const statusDiv2 = document.querySelector('.status');
const resetDiv2 = document.querySelector('.reset');
const cellDivs2 = document.querySelectorAll('.game-cell2');

const xSymbol2 = '×';
const oSymbol2 = '○';

let gameIsLive2 = true;
let xIsNext2 = true;



const letterToSymbol2 = (letter) => letter === 'x' ? xSymbol2 : oSymbol2;

const handleWin2 = (letter) => {
  gameIsLive2 = false;
  if (letter === 'x') {
    statusDiv2.innerHTML = `${letterToSymbol2(letter)} has won!`;
    alert(`${letterToSymbol2(letter)} has won!`)
  } else {
    statusDiv2.innerHTML = `<span>${letterToSymbol2(letter)} has won!</span>`;
    alert(`${letterToSymbol2(letter)} has won!`)
  }
};

const checkGameStatus2 = () => {
  const box1 = cellDivs2[0].classList[1];
  const box2 = cellDivs2[1].classList[1];
  const box3 = cellDivs2[2].classList[1];
  const box4 = cellDivs2[3].classList[1];
  const box5 = cellDivs2[4].classList[1];
  const box6 = cellDivs2[5].classList[1];
  const box7 = cellDivs2[6].classList[1];
  const box8 = cellDivs2[7].classList[1];
  const box9 = cellDivs2[8].classList[1];
  const box10 = cellDivs2[9].classList[1];
  const box11= cellDivs2[10].classList[1];
  const box12 = cellDivs2[11].classList[1];
  const box13 = cellDivs2[12].classList[1];
  const box14= cellDivs2[13].classList[1];
  const box15 = cellDivs2[14].classList[1];
  const box16 = cellDivs2[15].classList[1];

  if (box1 && box1 === box2 && box1 === box3 && box1 === box4) {
    handleWin2(box1);
    cellDivs2[0].classList.add('won');
    cellDivs2[1].classList.add('won');
    cellDivs2[2].classList.add('won');
    cellDivs2[3].classList.add('won');
  } else if (box5 && box5 === box6 && box5 === box7 && box5 === box8) {
    handleWin2(box5);
    cellDivs2[4].classList.add('won');
    cellDivs2[5].classList.add('won');
    cellDivs2[6].classList.add('won');
    cellDivs2[7].classList.add('won');
  } else if (box9 && box9 === box10 && box9 === box11 && box9 === box12) {
    handleWin2(box9);
    cellDivs2[8].classList.add('won');
    cellDivs2[9].classList.add('won');
    cellDivs2[10].classList.add('won');
    cellDivs2[11].classList.add('won');
  } else if (box13 && box13 === box14 && box13 === box15 && box13 === box16) {
    handleWin2(box9);
    cellDivs2[12].classList.add('won');
    cellDivs2[13].classList.add('won');
    cellDivs2[14].classList.add('won');
    cellDivs2[15].classList.add('won');
  } else if (box1 && box1 === box5 && box1 === box9 && box1 === box13) {
    handleWin2(box1);
    cellDivs2[0].classList.add('won');
    cellDivs2[4].classList.add('won');
    cellDivs2[8].classList.add('won');
    cellDivs2[12].classList.add('won');
  } else if (box2 && box2 === box6 && box2 === box10 && box2 === box14) {
    handleWin2(box2);
    cellDivs2[1].classList.add('won');
    cellDivs2[5].classList.add('won');
    cellDivs2[9].classList.add('won');
    cellDivs2[13].classList.add('won');
  } else if (box3 && box3 === box7 && box3 === box11 && box3 === box15 ) {
    handleWin2(box3);
    cellDivs2[2].classList.add('won');
    cellDivs2[6].classList.add('won');
    cellDivs2[10].classList.add('won');
    cellDivs2[14].classList.add('won');
  } else if (box4 && box4 === box8 && box4 === box12 && box4 === box16) {
    handleWin2(box4);
    cellDivs2[3].classList.add('won');
    cellDivs2[7].classList.add('won');
    cellDivs2[11].classList.add('won');
    cellDivs2[15].classList.add('won');
  } else if (box1 && box1 === box6 && box1 === box11 && box1 === box16) {
    handleWin2(box1);
    cellDivs2[0].classList.add('won');
    cellDivs2[5].classList.add('won');
    cellDivs2[10].classList.add('won');
    cellDivs2[15].classList.add('won');
  } else if (box4 && box4 === box7 && box4 === box10 && box4 === box13) {
    handleWin2(box4);
    cellDivs2[3].classList.add('won');
    cellDivs2[6].classList.add('won');
    cellDivs2[9].classList.add('won');
    cellDivs2[12].classList.add('won');
  } else if (box1 && box2 && box2 && box4 && box5 && box6 && box7 && box8 && box7 && box9 && box10 && box11 && box12 && box13 && box14 && box15 && box16) {
    gameIsLive2 = false;
    statusDiv2.innerHTML = 'Game is tied!';
    alert('Game is tied!')

  } else {
    xIsNext2 = !xIsNext2;
    if (xIsNext2) {
      statusDiv2.innerHTML = `${xSymbol2} is next`;
    } else {
      statusDiv2.innerHTML = `<span>${oSymbol2} is next</span>`;
    }
  }
};
//////********************************************************************************* */

//////**************************************************** */


const handleReset2 = () => {
  xIsNext2 = true;
  statusDiv2.innerHTML = `${xSymbol2} is next`;
  for (const cellDiv of cellDivs2) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
  gameIsLive2 = true;
};

const handleCellClick2 = (e) => {
  const classList = e.target.classList;

  if (!gameIsLive2 || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xIsNext2) {
    classList.add('x');
    checkGameStatus2();
  } else {
    classList.add('o');
    checkGameStatus2();
  }
};


resetDiv2.addEventListener('click', handleReset2);

for (const cellDiv of cellDivs2) {
  cellDiv.addEventListener('click', handleCellClick2)
}



function sizeFour(){
  document.getElementById('game-grid-two').style.display = 'grid'
  document.getElementById('game-grid').style.display = 'none'
  document.getElementById('game-grid-three').style.display = 'none'
}

function sizeThree(){
  document.getElementById('game-grid-two').style.display = 'none'
  document.getElementById('game-grid-three').style.display = 'none'
  document.getElementById('game-grid').style.display = 'grid'
}

function sizeFive(){
  document.getElementById('game-grid-two').style.display = 'none'
  document.getElementById('game-grid').style.display = 'none'
  document.getElementById('game-grid-three').style.display = 'grid'
}





