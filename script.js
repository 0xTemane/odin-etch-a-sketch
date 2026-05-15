const gridContainer = document.querySelector(".grid-container");
const buttonGridSize = document.querySelector("#btn-grid-size");
const buttonToggleBorder = document.querySelector("#btn-toggle-border");
const buttonReset = document.querySelector("#btn-reset");
const actualGridSize = 16;

buttonGridSize.addEventListener("click", () => {
    const input = prompt("Enter a number between 1 and 100 😉");
    gridSize = input;
    if (input >= 1 && input <= 100){
        createGrid(input);
    } else {
        alert("Sorry, your input is incorrect 😔");
    }
});

buttonToggleBorder.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.classList.toggle("border"))
});

buttonReset.addEventListener("click", () => createGrid(actualGridSize));

function createGrid(gridSize = 16) {
    gridSize = Math.round(gridSize);
    while(gridContainer.lastChild){
        gridContainer.removeChild(gridContainer.lastChild);
    } for (let i = 0; i < (gridSize * gridSize); i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add("border");
        square.style.flexBasis = `${800 / gridSize}px`;
        square.addEventListener("mouseover", () => square.classList.add("black"))
        gridContainer.appendChild(square);
    }
};

createGrid();