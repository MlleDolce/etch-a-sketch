function makeGrid(gridSize = 16) {
    const body = document.querySelector('body');

    if (document.querySelector('.grid-container')) {
        const gridContainer = document.querySelector('.grid-container');
        body.removeChild(gridContainer);
    }
 const gridContainer = document.createElement("div");
 gridContainer.setAttribute("class", "grid-container");
 body.appendChild(gridContainer);

  for (i = 0; i < gridSize; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.setAttribute("class", "row-container");
    rowContainer.style.display = "flex";
    gridContainer.append(rowContainer);

    for (j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.setAttribute("class", "square");
      console.log("square class:", square.getAttribute("class"));
      square.style.border = "1px blue solid";
      square.style.width = "60px";
      square.style.height = "60px";
      square.style.flex = "1";
      rowContainer.append(square);
    }
  }
  highlightSquaresOnHover();
}

function highlightSquaresOnHover() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      const square = event.target;
      square.style.backgroundColor = "yellow";
    });
  });
}

function promptUserAndBuildGrid() {
    btnCreateGrid.addEventListener("click", (event) => {
        let userInput = prompt("Let's build a grid. How many squares per side would you like? (max: 100)");
        let userNumber = parseInt(userInput);

        if (!isNaN(userNumber) && (userNumber <= 100) && userNumber > 0) {
            console.log("user entered a number");
            makeGrid(userNumber);
        } else {
            promptUserAndBuildGrid();
        }
    });
}

makeGrid();

const btnCreateGrid = document.querySelector('button');
// btnCreateGrid.addEventListener("click", (event) => {
//     let gridSize = prompt("Let's build a grid. How many squares per side would you like? (max: 100)");
//     if (typeof gridSize === "number") {
//         makeGrid(gridSize);
//     } else {
//         promptUserAndBuildGrid();
//     }
// });
promptUserAndBuildGrid();