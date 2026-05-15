const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < (16*16); i++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.flexBasis = `${800 / 16}px`;
    square.addEventListener("mouseover", () => square.classList.add("black"))
    gridContainer.appendChild(square);
}