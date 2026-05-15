const gridContainer = document.querySelector(".grid-container");
const buttonGridSize = document.querySelector("#btn-grid-size");
const buttonToggleBorder = document.querySelector("#btn-toggle-border");
const buttonReset = document.querySelector("#btn-reset");
const colorContainer = document.querySelector(".color-container");
const blackButton = document.querySelector("#btn-black");
const eraseButton = document.querySelector("#btn-erase");
const rainbowButton = document.querySelector("#btn-rainbow");
let selectedColor = "black";
let actualGridSize = 16;

buttonGridSize.addEventListener("click", () => {
    const input = prompt("Enter a number between 1 and 100 😉");
    if (input >= 1 && input <= 100){
        createGrid(input);
        actualGridSize = input;
    } else {
        alert("Sorry, your input is incorrect 😔");
    }
});

buttonToggleBorder.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.classList.toggle("border"))
});

buttonReset.addEventListener("click", () => createGrid(actualGridSize));

colorContainer.addEventListener("click", e => {
    switch(e.target.id){
        case "btn-black":
            selectedColor = "black";
            e.target.style.border = "5px solid rgb(26, 189, 26)";
            eraseButton.style.border = "none";
            rainbowButton.style.border = "none";
            break;
        case "btn-erase":
            selectedColor = "erase";
            e.target.style.border = "5px solid rgb(26, 189, 26)";
            blackButton.style.border = "none";
            rainbowButton.style.border = "none";
            break;
        case "btn-rainbow":
            selectedColor = "rainbow";
            e.target.style.border = "5px solid rgb(26, 189, 26)";
            eraseButton.style.border = "none";
            blackButton.style.border = "none";
            break;
    }
})

function createGrid(gridSize = 16) {
    gridSize = Math.round(gridSize);
    while(gridContainer.lastChild){
        gridContainer.removeChild(gridContainer.lastChild);
    } for (let i = 0; i < (gridSize * gridSize); i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add("border");
        square.style.flexBasis = `${800 / gridSize}px`;
        square.addEventListener("mouseover", () => {
            switch(selectedColor){
                case "black":
                    square.style.backgroundColor = "black";
                    break;
                case "erase":
                    square.style.backgroundColor = "white";
                    break;
                case "rainbow":
                    square.style.backgroundColor = generateRandomColor();
            }
        })
        gridContainer.appendChild(square);
    }
};

function generateRandomColor(){
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

createGrid();