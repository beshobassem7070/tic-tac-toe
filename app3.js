const statusDiv3 = document.querySelector('.status');
const resetDiv3 = document.querySelector('.reset');
const cellDivs3 = document.querySelectorAll('.game-cell3');

const xSymbol3 = '×';
const oSymbol3 = '○';

let gameIsLive3 = true;
let xIsNext3 = true;



const letterToSymbol3 = (letter) => letter === 'x' ? xSymbol3 : oSymbol3;

const handleWin3 = (letter) => {
  gameIsLive3 = false;
  if (letter === 'x') {
    statusDiv3.innerHTML = `${letterToSymbol3(letter)} has won!`;
    alert(`${letterToSymbol3(letter)} has won!`)
  } else {
    statusDiv3.innerHTML = `<span>${letterToSymbol3(letter)} has won!</span>`;
    alert(`${letterToSymbol3(letter)} has won!`)
  }
};

const checkGameStatus3 = () => {
  const box1 = cellDivs3[0].classList[1];
  const box2 = cellDivs3[1].classList[1];
  const box3 = cellDivs3[2].classList[1];
  const box4 = cellDivs3[3].classList[1];
  const box5 = cellDivs3[4].classList[1];
  const box6 = cellDivs3[5].classList[1];
  const box7 = cellDivs3[6].classList[1];
  const box8 = cellDivs3[7].classList[1];
  const box9 = cellDivs3[8].classList[1];
  const box10 = cellDivs3[9].classList[1];
  const box11= cellDivs3[10].classList[1];
  const box12 = cellDivs3[11].classList[1];
  const box13 = cellDivs3[12].classList[1];
  const box14= cellDivs3[13].classList[1];
  const box15 = cellDivs3[14].classList[1];
  const box16 = cellDivs3[15].classList[1];
  const box17 = cellDivs3[16].classList[1];
  const box18 = cellDivs3[17].classList[1];
  const box19 = cellDivs3[18].classList[1];
  const box20 = cellDivs3[19].classList[1];
  const box21 = cellDivs3[20].classList[1];
  const box22 = cellDivs3[21].classList[1];
  const box23 = cellDivs3[22].classList[1];
  const box24 = cellDivs3[23].classList[1];
  const box25 = cellDivs3[24].classList[1];

  if (box1 && box1 === box2 && box1 === box3 && box1 === box4 && box1 === box5) {
    handleWin3(box1);
    cellDivs3[0].classList.add('won');
    cellDivs3[1].classList.add('won');
    cellDivs3[2].classList.add('won');
    cellDivs3[3].classList.add('won');
    cellDivs3[4].classList.add('won');
  } else if (box6 && box6 === box7 && box6 === box8 && box6 === box9 && box6 === box10) {
    handleWin3(box6);
    cellDivs3[5].classList.add('won');
    cellDivs3[6].classList.add('won');
    cellDivs3[7].classList.add('won');
    cellDivs3[8].classList.add('won');
    cellDivs3[9].classList.add('won');
  } else if (box11 && box11 === box12 && box11 === box13 && box11 === box14 && box11 === box15) {
    handleWin3(box11);
    cellDivs3[10].classList.add('won');
    cellDivs3[11].classList.add('won');
    cellDivs3[12].classList.add('won');
    cellDivs3[13].classList.add('won');
    cellDivs3[14].classList.add('won');
  } else if (box16 && box16 === box17 && box16 === box18 && box16 === box19  && box16 === box20) {
    handleWin3(box16);
    cellDivs3[15].classList.add('won');
    cellDivs3[16].classList.add('won');
    cellDivs3[17].classList.add('won');
    cellDivs3[18].classList.add('won');
    cellDivs3[19].classList.add('won');
  } else if (box21 && box21 === box22 && box21 === box23 && box21 === box24 && box21 === box25) {
    handleWin3(box21);
    cellDivs3[20].classList.add('won');
    cellDivs3[21].classList.add('won');
    cellDivs3[22].classList.add('won');
    cellDivs3[23].classList.add('won');
    cellDivs3[24].classList.add('won');
  } else if (box1 && box1 === box6 && box1 === box11 && box1 === box16 && box1 === box21) {
    handleWin3(box1);
    cellDivs3[0].classList.add('won');
    cellDivs3[5].classList.add('won');
    cellDivs3[10].classList.add('won');
    cellDivs3[15].classList.add('won');
    cellDivs3[20].classList.add('won');
  } else if (box2 && box2 === box7 && box2 === box12 && box2 === box17 && box2 === box22) {
    handleWin3(box2);
    cellDivs3[1].classList.add('won');
    cellDivs3[6].classList.add('won');
    cellDivs3[11].classList.add('won');
    cellDivs3[16].classList.add('won');
    cellDivs3[21].classList.add('won');
  } else if (box3 && box3 === box8 && box3 === box13 && box3 === box18 && box3 === box23 ) {
    handleWin3(box3);
    cellDivs3[2].classList.add('won');
    cellDivs3[7].classList.add('won');
    cellDivs3[12].classList.add('won');
    cellDivs3[17].classList.add('won');
    cellDivs3[22].classList.add('won');
  } else if (box4 && box4 === box9 && box4 === box14 && box4 === box19 &&  box4 === box24) {
    handleWin3(box4);
    cellDivs3[3].classList.add('won');
    cellDivs3[8].classList.add('won');
    cellDivs3[13].classList.add('won');
    cellDivs3[18].classList.add('won');
    cellDivs3[23].classList.add('won');
  } else if (box5 && box5 === box10 && box5 === box15 && box5 === box20 && box5 === box25) {
    handleWin3(box5);
    cellDivs3[4].classList.add('won');
    cellDivs3[9].classList.add('won');
    cellDivs3[14].classList.add('won');
    cellDivs3[19].classList.add('won');
    cellDivs3[24].classList.add('won');
  } else if (box1 && box1 === box7 && box1 === box13 && box1 === box19 &&  box1 === box25) {
    handleWin3(box1);
    cellDivs3[0].classList.add('won');
    cellDivs3[6].classList.add('won');
    cellDivs3[12].classList.add('won');
    cellDivs3[18].classList.add('won');
    cellDivs3[24].classList.add('won');
  } else if (box5 && box5 === box9 && box5 === box13 && box5 === box17 &&  box5 === box21) {
    handleWin3(box5);
    cellDivs3[4].classList.add('won');
    cellDivs3[8].classList.add('won');
    cellDivs3[12].classList.add('won');
    cellDivs3[16].classList.add('won');
    cellDivs3[20].classList.add('won');
  } else if (box1 && box2 && box2 && box4 && box5 && box6 && box7 && box8 && box7 && box9 && box10 && box11 && box12 && box13 && box14 && box15 && box16 && box17 && box18 && box19 && box20 && box21 && box22 && box23 && box24 && box25) {
    gameIsLive3 = false;
    statusDiv3.innerHTML = 'Game is tied!';
    alert('Game is tied!')

  } else {
    xIsNext3 = !xIsNext3;
    if (xIsNext3) {
      statusDiv3.innerHTML = `${xSymbol3} is next`;
    } else {
      statusDiv3.innerHTML = `<span>${oSymbol3} is next</span>`;
    }
  }
};
//////********************************************************************************* */

//////**************************************************** */


const handleReset3 = () => {
  xIsNext3 = true;
  statusDiv3.innerHTML = `${xSymbol3} is next`;
  for (const cellDiv of cellDivs3) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
  gameIsLive3 = true;
};

const handleCellClick3 = (e) => {
  const classList = e.target.classList;

  if (!gameIsLive3 || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xIsNext3) {
    classList.add('x');
    checkGameStatus3();
  } else {
    classList.add('o');
    checkGameStatus3();
  }
};


resetDiv3.addEventListener('click', handleReset3);

for (const cellDiv of cellDivs3) {
  cellDiv.addEventListener('click', handleCellClick3)
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





