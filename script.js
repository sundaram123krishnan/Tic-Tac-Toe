let val = document.getElementsByTagName("button")
val = Array.from(val)
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
val = listToMatrix(val, 3)
let num = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
let cnt = 0;
cnt = Number.parseInt(cnt)
let row = []
let col = []
let row1 = []
let col1 = []
for (let i = 0; i < val.length; i++) {
    for (let j = 0; j < val.length; j++) {
        val[i][j].onclick = () => {
            if (cnt % 2 == 0) {
                val[i][j].innerHTML = "x"
                cnt++;
                row.push(i)
                col.push(j)
            }
            else {
                val[i][j].innerHTML = 'o'
                cnt++;
                row1.push(i)
                col1.push(j)
            }
            for (let i = 0; i < row.length - 2; i++) {
                if (row[i] == row[i + 1] && row[i + 1] == row[i + 2] && row[i] == row[i + 2]) {
                    let won = document.getElementById("winner")
                    won.innerHTML = "X-won"
                    location.reload()
                }
            }
            for (let i = 0; i < row1.length - 2; i++) {
                if (row1[i] == row1[i + 1] && row1[i + 1] == row1[i + 2] && row1[i] == row1[i + 2]) {
                    let won = document.getElementsByTagName("h2")[0]
                    won.innerHTML = "o-won"
                }
            }
            for (let i = 0; i < col.length - 2; i++) {
                if (col[i] == col[i + 1] && col[i + 1] == col[i + 2] && col[i] == col[i + 2] && col[i] == col[i + 2]) {
                    let won = document.getElementsByTagName("h2")[0]
                    won.innerHTML = "X-won"
                }
            }
            for (let i = 0; i < col1.length - 2; i++) {
                if (col1[i] == col1[i + 1] && col1[i + 1] == col1[i + 2] && col1[i] == col1[i + 2]) {
                    let won = document.getElementsByTagName("h2")[0]
                    won.innerHTML = "o-won"
                }
            }
        }
    }
}
console.log(row, col, row1, col1)
