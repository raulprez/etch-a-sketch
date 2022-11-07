// Allows for the grids to be initialized from the moment DOM content is loaded

document.addEventListener('DOMContentLoaded', (event) => {
    updateGrid(16);
});

// Updates the grid amounts displayed in numbers in HTML

function updateTextInput(val) {
    document.getElementById('value').innerHTML =  `Grid: ${val}x${val}`;
  };

// Empty array initialized to store current color toggled

  currentColor = ['black'];  

// Event listeners for buttons

const button = document.getElementsByClassName("btn");

// Study and understand why this works

Array.prototype.map.call(button, (b) => {
    b.addEventListener("click", function(b) {
        
        // Uses the value from the targeted button and displays the current color in HTML
        let newColor = b.target.value;
        document.getElementById("currentColor").innerHTML = newColor;
        
        // Pushes new color in empty array containing current color
        currentColor.pop();
        currentColor.push(newColor); 
    })
  })

function updateGrid(val) {

    resetGrid();

    // Defines important parts of the grid wrapper and sets row and column size so it fits in a grid properly
    let grid = document.getElementById("etch-a-sketch");
    grid.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${val}, 1fr)`;
    

    // For loop that creates the proper amount of grid squares
    for (let i=0; i<val ** 2; i++) {

        // Grid is the grid wrapper, new grid are the ones generated dynamically into the DOM
        let newGrid = document.createElement("div");
        newGrid.className = "newGrid";
        newGrid.setAttribute("id", "newGrid");
        let grid = document.getElementById("etch-a-sketch");
        grid.appendChild(newGrid);

        // Mouseover event listener that creates the etch a sketch functionality, using the color stored in the array
        newGrid.addEventListener("mouseover", function (event) {
        newGrid.style.backgroundColor = currentColor;
        });
    }
}

function resetGrid() {
    grid = document.getElementById("etch-a-sketch");
    grid.innerHTML = '';
}

