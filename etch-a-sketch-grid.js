function makeGrid(gridSize = 16) {

  removeGridIfGridAlreadyExists();

  const gridContainer = document.createElement("div");
  gridContainer.setAttribute("class", "grid-container");
  gridContainer.style.width = `${gridSize * 10}px`;

  const body = document.querySelector("body");
  body.appendChild(gridContainer);

  for (i = 0; i < gridSize; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.setAttribute("class", "row-container");
    rowContainer.style.display = "flex";
    rowContainer.style.alignContent = "stretch";
    gridContainer.append(rowContainer);

    for (j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.setAttribute("class", "square");
      square.setAttribute("id", `${(i + 1) * j}`);

      console.log("square class:", square.getAttribute("class"));

      square.style.width = "10px";
      square.style.height = "10px";
      square.style.flex = "1";

      rowContainer.append(square);
    }
  }
  draw();
}

function removeGridIfGridAlreadyExists() {
  if (document.querySelector(".grid-container")) {
    const gridContainer = document.querySelector(".grid-container");
    document.querySelector("body").removeChild(gridContainer);
  }
}

function promptUserAndBuildGrid() {
  let userInput = prompt(
    "Let's build a grid. How many squares per side would you like? (max: 100)"
  );
  let userNumber = parseInt(userInput);

  if (!isNaN(userNumber) && userNumber <= 100 && userNumber > 0) {
    console.log("user entered a number");
    makeGrid(userNumber);
  } else {
    promptUserAndBuildGrid();
  }
}

function highlightSquaresOnHover(currentColor = chroma("#eeeeee")) {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let timesHovered = 0;

    square.addEventListener("mouseover", (event) => {
      timesHovered++;
      console.log("times hovered:", timesHovered);

      const square = event.target;
      const increasedSaturation = currentColor.saturate(2 * timesHovered);
      const increasedSaturationString = increasedSaturation.css();

      square.style.backgroundColor = increasedSaturationString;
    });
  });
}

function draw() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      const square = event.target;
      square.style.backgroundColor = "black";
    });
  });
}

function createRandomColor() {
  let color = "#";
  const hexLetters = "0123456789ABCDEF";

  for (i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawRainbow() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      const square = event.target;
      square.style.backgroundColor = createRandomColor();
    });
  });
}

function erase() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      const square = event.target;
      square.style.backgroundColor = "white";
    });
  });
}

let currentColor;
const defaultValue = 0;

makeGrid();

// const btnCreateGrid = document.getElementById("create-grid");
const slider = document.getElementById("valueSlider");
const btnDraw = document.getElementById("draw");
const btnRainbow = document.getElementById("rainbow");
const btnErase = document.getElementById("erase");
const btnClear = document.getElementById("clear");

// btnCreateGrid.addEventListener("click", () => {
//   promptUserAndBuildGrid();
// });


slider.addEventListener("input", () => {
  let selectedValue = slider.value;
  const para = document.getElementById("selectedGridValue");
  para.textContent = `${selectedValue} x ${selectedValue}`;
});
btnDraw.addEventListener("click", () => {
  draw();
});
btnRainbow.addEventListener("click", () => {
  drawRainbow();
});
btnErase.addEventListener("click", () => {
  erase();
});
btnClear.addEventListener("click", () => {
  const rows = document.querySelectorAll(".row-container");
  const gridSize = rows.length; 
  console.log("gridSize:", gridSize);
  makeGrid(gridSize);
});
