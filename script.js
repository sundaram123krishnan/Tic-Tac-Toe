let grid = document.getElementsByTagName("button");
grid = Array.from(grid);
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
grid = listToMatrix(grid, 3);
let turn = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    grid[i][j].onclick = () => {
      if (turn % 2 == 0) {
        grid[i][j].innerHTML = "x";
      } else {
        grid[i][j].innerHTML = "o";
      }
      turn++;
      if (
        grid[i][0].innerHTML == "x" &&
        grid[i][1].innerHTML == "x" &&
        grid[i][2].innerHTML == "x"
      ) {
        console.log("xwon");
        document.getElementsByTagName("h1")[0].innerHTML = "X Won";
      }
      if (
        grid[0][j].innerHTML == "x" &&
        grid[1][j].innerHTML == "x" &&
        grid[2][j].innerHTML == "x"
      ) {
        console.log("xwon");
        document.getElementsByTagName("h1")[0].innerHTML = "X Won";
      }
      if (
        grid[i][0].innerHTML == "o" &&
        grid[i][1].innerHTML == "o" &&
        grid[i][2].innerHTML == "o"
      ) {
        console.log("owon");
        document.getElementsByTagName("h1")[0].innerHTML = "O Won";
      }
      if (
        grid[0][j].innerHTML == "o" &&
        grid[1][j].innerHTML == "o" &&
        grid[2][j].innerHTML == "o"
      ) {
        console.log("owon");
        document.getElementsByTagName("h1")[0].innerHTML = "O Won";
      }
      if (
        grid[0][0].innerHTML == "x" &&
        grid[1][1].innerHTML == "x" &&
        grid[2][2].innerHTML == "x"
      ) {
        console.log("xwon");
        document.getElementsByTagName("h1")[0].innerHTML = "X Won";
      }
      if (
        grid[0][0].innerHTML == "o" &&
        grid[1][1].innerHTML == "o" &&
        grid[2][2].innerHTML == "o"
      ) {
        console.log("owon");
        document.getElementsByTagName("h1")[0].innerHTML = "O Won";
      }
      if (
        grid[0][2].innerHTML == "x" &&
        grid[1][1].innerHTML == "x" &&
        grid[2][0].innerHTML == "x"
      ) {
        console.log("xwon");
        document.getElementsByTagName("h1")[0].innerHTML = "X Won";
      }
      if (
        grid[2][0].innerHTML == "o" &&
        grid[1][1].innerHTML == "o" &&
        grid[0][2].innerHTML == "o"
      ) {
        console.log("owon");
        document.getElementsByTagName("h1")[0].innerHTML = "O Won";
      }
    };
  }
}
