document.addEventListener('DOMContentLoaded', (event) => {
    updateGrid(16);
});

function updateTextInput(val) {
    let value = document.getElementById("range").value;
    document.getElementById('value').innerHTML =  `Grid: ${val}x${val}`;
    return value;
  }

function updateGrid(val) {

    resetGrid();

    let grid = document.getElementById("etch-a-sketch");
    grid.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${val}, 1fr)`;
    

    for (let i=0; i<val ** 2; i++) {

        let newGrid = document.createElement("div");
        newGrid.className = "newGrid";
        newGrid.setAttribute("id", "newGrid");
        let grid = document.getElementById("etch-a-sketch");
        grid.appendChild(newGrid);

        newGrid.addEventListener("mouseover", function (event) {
        newGrid.style.backgroundColor = "red";
        });

        console.log(val);

    }
}

function resetGrid() {
    grid = document.getElementById("etch-a-sketch");
    grid.innerHTML = '';
}

