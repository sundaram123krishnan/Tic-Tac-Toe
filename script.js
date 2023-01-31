let boardButtons = document.getElementsByTagName("button")
boardButtons = Array.from(boardButtons)
function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}
boardButtons = listToMatrix(boardButtons, 3)
let turn = 0;
turn = Number.parseInt(turn)
let xPerRow = []  
let xPerCol = []
let oPerRow = []
let oPerCol = []
for (let i = 0; i < boardButtons.length; i++) {
    for (let j = 0; j < boardButtons.length; j++) {
        boardButtons[i][j].onclick = () => {
            if (turn % 2 == 0) {
                boardButtons[i][j].innerHTML = "x"
                turn++;
                xPerRow.push(i)
                xPerCol.push(j)
            }
            else {
                boardButtons[i][j].innerHTML = 'o'
                turn++;
                oPerRow.push(i)
                oPerCol.push(j)
            }
            for (let i = 0; i < xPerRow.length - 2; i++) {
                if (xPerRow[i] == xPerRow[i + 1] && xPerRow[i + 1] == xPerRow[i + 2] && xPerRow[i] == xPerRow[i + 2]) {
                    let won = document.getElementById("winner")
                    won.innerHTML = "X-won"
                    location.reload()
                }
            }
            for (let i = 0; i < oPerRow.length - 2; i++) {
                if (oPerRow[i] == oPerRow[i + 1] && oPerRow[i + 1] == oPerRow[i + 2] && oPerRow[i] == oPerRow[i + 2]) {
                    let won = document.getElementsByTagName("h2")[0]
                    won.innerHTML = "o-won"
                }
            }
            for (let i = 0; i < xPerCol.length - 2; i++) {
                if (xPerCol[i] == xPerCol[i + 1] && xPerCol[i + 1] == xPerCol[i + 2] && xPerCol[i] == xPerCol[i + 2] && xPerCol[i] == xPerCol[i + 2]) {
                    let won = document.getElementsByTagName("h2")[0]
                    won.innerHTML = "X-won"
                }
            }
            for (let i = 0; i < oPerCol.length - 2; i++) {
                if (oPerCol[i] == oPerCol[i + 1] && oPerCol[i + 1] == oPerCol[i + 2] && oPerCol[i] == oPerCol[i + 2]) {
                    let won = document.getElementsByTagName("h2")[0]
                    won.innerHTML = "o-won"
                }
            }
        }
    }
}
console.log(xPerRow, xPerCol, oPerRow, oPerCol)
