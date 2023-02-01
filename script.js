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
        boardButtons[i][j].innerHTML = "x";
        turn++;
        xPerRow.push(i);
        xPerCol.push(j);
      } else {
        boardButtons[i][j].innerHTML = "o";
        turn++;
        oPerRow.push(i);
        oPerCol.push(j);
      }
      for (let i = 0; i < xPerRow.length - 2; i++) {
        if (
          xPerRow[i] == xPerRow[i + 1] &&
          xPerRow[i + 1] == xPerRow[i + 2] &&
          xPerRow[i] == xPerRow[i + 2]
        ) {
          let won = document.getElementById("winner");
          won.innerHTML = "X-won";
          location.reload();
        }
      }
      for (let i = 0; i < oPerRow.length - 2; i++) {
        if (
          oPerRow[i] == oPerRow[i + 1] &&
          oPerRow[i + 1] == oPerRow[i + 2] &&
          oPerRow[i] == oPerRow[i + 2]
        ) {
          let won = document.getElementsByTagName("h2")[0];
          won.innerHTML = "o-won";
        }
      }
      for (let i = 0; i < xPerCol.length - 2; i++) {
        if (
          xPerCol[i] == xPerCol[i + 1] &&
          xPerCol[i + 1] == xPerCol[i + 2] &&
          xPerCol[i] == xPerCol[i + 2] &&
          xPerCol[i] == xPerCol[i + 2]
        ) {
          let won = document.getElementsByTagName("h2")[0];
          won.innerHTML = "X-won";
        }
      }
      for (let i = 0; i < oPerCol.length - 2; i++) {
        if (
          oPerCol[i] == oPerCol[i + 1] &&
          oPerCol[i + 1] == oPerCol[i + 2] &&
          oPerCol[i] == oPerCol[i + 2]
        ) {
          let won = document.getElementsByTagName("h2")[0];
          won.innerHTML = "o-won";
        }
      }
      const equalsCheck = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
      };
      let fwdDiagonalRow = [0, 1, 2];
      let fwdDiagonalCol = [0, 1, 2];
      // for (let i = 0; i < oPerRow.length - 2; i++) {
      //   if (oPerRow[i] == oPerCol[i]) {
      //     let won = document.getElementsByTagName("h2")[0];
      //     won.innerHTML = "o-won";
      //   }
      // }
      console.log(xPerCol, xPerRow);
      if (
        xPerRow[0] == 0 &&
        xPerRow[1] == 1 &&
        xPerRow[2] == 2 &&
        xPerCol[0] == 0 &&
        xPerCol[1] == 1 &&
        xPerCol[2] == 2
      ) {
        let won = document.getElementsByTagName("h2")[0];
        won.innerHTML = "x-won";
      }
      if (
        oPerRow[0] == 0 &&
        oPerRow[1] == 1 &&
        oPerRow[2] == 2 &&
        oPerCol[0] == 0 &&
        oPerCol[1] == 1 &&
        oPerCol[2] == 2
      ) {
        let won = document.getElementsByTagName("h2")[0];
        won.innerHTML = "o-won";
      }
      // for (let i = 0; i < xPerRow.length - 2; i++) {
      //   if (xPerRow[i] == xPerCol[i]) {
      //     let won = document.getElementsByTagName("h2")[0];
      //     won.innerHTML = "x-won";
      //   }
      // }

      let reverseDiagonalRow = [0, 1, 2];
      let reverseDiagonalCol = [2, 1, 0];
      let num = 0;
      if (
        equalsCheck(xPerRow, reverseDiagonalRow) &&
        equalsCheck(xPerCol, reverseDiagonalCol)
      ) {
        let won = document.getElementsByTagName("h2")[0];
        won.innerHTML = "x-won";
      }
      if (
        equalsCheck(oPerRow, reverseDiagonalRow) &&
        equalsCheck(oPerCol, reverseDiagonalCol)
      ) {
        let won = document.getElementsByTagName("h2")[0];
        won.innerHTML = "o-won";
      }
    };
  }
}
console.log(xPerRow, xPerCol, oPerRow, oPerCol);
