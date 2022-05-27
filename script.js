function updateTextInput(val) {
    let value = document.getElementById("range").value;
    document.getElementById('value').innerHTML =  `Grid: ${val}x${val}`;
    return value;
  }

function updateGrid(val) {

    for (let i=0; i<val; i++) {

        let newGrid = document.createElement("div");
        newGrid.className = "newGrid";
        let grid = document.getElementById("etch-a-sketch");
        grid.appendChild(newGrid);
        console.log(val);


    }
}


