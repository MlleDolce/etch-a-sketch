function makeGrid() {
  const gridContainer = document.querySelector(".grid-container");

  for (i = 0; i < 16; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.setAttribute("class", "row-container");
    rowContainer.style.display = "flex";
    gridContainer.append(rowContainer);

    for (j = 0; j < 16; j++) {
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

makeGrid();
highlightSquaresOnHover();
