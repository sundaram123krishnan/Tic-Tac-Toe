let boardButtons = document.getElementsByTagName("button");
boardButtons = Array.from(boardButtons);
function listToMatrix(list, elementsPerSubArray) {
  var matrix = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }
  return matrix;
}
boardButtons = listToMatrix(boardButtons, 3);
let turn = 0;
turn = Number.parseInt(turn);
let xPerRow = [];
let xPerCol = [];
let oPerRow = [];
let oPerCol = [];
for (let i = 0; i < boardButtons.length; i++) {
  for (let j = 0; j < boardButtons.length; j++) {
    boardButtons[i][j].onclick = () => {
      if (turn % 2 == 0) {
        let img = document.createElement("img");
        img.src = "./x-removebg-preview.png";
        let src = boardButtons[i][j];
        src.appendChild(img);
        turn++;
        xPerRow.push(i);
        xPerCol.push(j);
      } else {
        let img = document.createElement("img");
        img.src = "./o-removebg-preview.png";
        let src = boardButtons[i][j];
        src.appendChild(img);
        turn++;
        oPerRow.push(i);
        oPerCol.push(j);
      }
      let rowCntX0 = 0;
      let rowCntX1 = 0;
      let rowCntX2 = 0;
      let colCntX0 = 0;
      let colCntX1 = 0;
      let colCntX2 = 0;
      for (let i = 0; i < xPerRow.length; i++) {
        if (xPerRow[i] == 0) {
          rowCntX0++;
        } else if (xPerRow[i] == 1) {
          rowCntX1++;
        } else if (xPerRow[i] == 2) {
          rowCntX2++;
        }
      }
      for (let i = 0; i < xPerCol.length; i++) {
        if (xPerCol[i] == 0) {
          colCntX0++;
        } else if (xPerCol[i] == 1) {
          colCntX1++;
        } else if (xPerCol[i] == 2) {
          colCntX2++;
        }
      }
      if (rowCntX0 == 3 || colCntX0 == 3) {
        let won = document.getElementsByTagName("h2")[0];
        won.innerHTML = "x-won";
        console.log(rowCntX0, colCntX0);
        // location.reload();
      }
      if (rowCntX1 == 3 || colCntX1 == 3) {
        let won = document.getElementsByTagName("h2")[0];
        won.innerHTML = "x-won";
        console.log(rowCntX0, colCntX0);
        // location.reload();
      }
      if (rowCntX2 == 3 || colCntX2 == 3) {
        let won = document.getElementsByTagName("h2")[0];
        won.innerHTML = "x-won";
        console.log(rowCntX0, colCntX0);
        // location.reload();
      }
      // if (colCntX0 == 3 || colCntX1 == 3 || colCntX2 == 3) {
      //   let won = document.getElementsByTagName("h2")[0];
      //   won.innerHTML = "x-won";
      //   // location.reload();
      // }
      let rowCntO0 = 0;
      let rowCntO1 = 0;
      let rowCntO2 = 0;
      let colCntO0 = 0;
      let colCntO1 = 0;
      let colCntO2 = 0;
      for (let i = 0; i < oPerRow.length; i++) {
        if (oPerRow[i] == 0) {
          rowCntO0++;
        } else if (oPerRow[i] == 1) {
          rowCntO1++;
        } else if (oPerRow[i] == 2) {
          rowCntO2++;
        }
      }
      if (rowCntO0 == 3 || rowCntO1 == 3 || rowCntO2 == 3) {
        let won = document.getElementsByTagName("h2")[0];
        won.innerHTML = "o-won";
        // location.reload();
      }
      for (let i = 0; i < oPerCol.length; i++) {
        if (oPerCol[i] == 0) {
          colCntO0++;
        } else if (oPerCol[i] == 1) {
          colCntO1++;
        } else if (oPerCol[i] == 2) {
          colCntO2++;
        }
      }
      if (colCntO0 == 3 || colCntO1 == 3 || colCntO2 == 3) {
        let won = document.getElementsByTagName("h2")[0];
        won.innerHTML = "o-won";
        // location.reload();
      }
      let count_Diagonal_x = 0;
      for (let i = 0; i < xPerCol.length; i++) {
        if (xPerCol[i] == xPerRow[i]) {
          count_Diagonal_x++;
        }
      }
      if(count_Diagonal_x==3){
        let won = document.getElementsByTagName("h2")[0];
        won.innerHTML = "x-won";
      }
      let count_Diagonal_o = 0;
      for (let i = 0; i < oPerCol.length; i++) {
        if (xPerCol[i] == xPerRow[i]) {
          count_Diagonal_o++;
        }
      }
      if(count_Diagonal_o==3){
        let won = document.getElementsByTagName("h2")[0];
        won.innerHTML = "o-won";
      }
    };
  }
}

