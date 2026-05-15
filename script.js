const gridContainer = document.querySelector(".grid-container");
const buttonGridSize = document.querySelector("#btn-grid-size");
buttonGridSize.addEventListener("click", () => {
    const input = prompt("Enter a number between 1 and 100 😉");
    if (input >= 1 && input <= 100){
        createGrid(input);
    } else {
        alert("Sorry, your input is incorrect 😔");
    }
})


function createGrid(gridSize = 16) {
    gridSize = Math.round(gridSize);
    while(gridContainer.lastChild){
        gridContainer.removeChild(gridContainer.lastChild);
    } for (let i = 0; i < (gridSize * gridSize); i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${800 / gridSize}px`;
        square.addEventListener("mouseover", () => square.classList.add("black"))
        gridContainer.appendChild(square);
    }
};

createGrid();