const gridContainer = document.querySelector(".grid-container");
const ButtonGridSize = document.querySelector("#btn-grid-size");

function createGrid(gridSize = 16) {
    gridSize = Math.round(gridSize);
    for (let i = 0; i < (gridSize * gridSize); i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${800 / gridSize}px`;
        square.addEventListener("mouseover", () => square.classList.add("black"))
        gridContainer.appendChild(square);
    }
};

createGrid();