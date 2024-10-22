// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

function addR() 
{
    // Get the grid element
    let grid = document.getElementById("grid");
    // Create a new row element
    let newRow = grid.insertRow();
    // Determine how many columns the grid has
    /*
        If the first grid.rows[0] exists, 
        we try to get the length to the collection of cells in row [0]; 
        otherwise, numCols is asigned
    */
    let numCols = grid.rows[0] ? grid.rows[0].cells.length : numCols;
    // Loop through the columns and add a new cell to the new row
    for (let i = 0; i < numCols; i++) 
    {
        let newCell = newRow.insertCell(i);
        newCell.style.backgroundColor = "white";  // Set the default color of the cell
        newCell.onclick = function() 
        {newCell.style.backgroundColor = colorSelected;};
    }

    numRows++;

}

// Add a column
function addC() 
{
    // Get the grid element
    let grid = document.getElementById("grid");
    // Loop through all rows in the grid
    for (let i = 0; i < grid.rows.length; i++) 
        {
            let newCell = grid.rows[i].insertCell();
            newCell.style.backgroundColor = "white";
            newCell.onclick = function() 
            { newCell.style.backgroundColor = colorSelected;};
    }
    
    // Increment the column count
    numCols++;

}

// Remove a row
function removeR() {
    if (numRows > 0) {
        let grid = document.getElementById("grid");
        grid.deleteRow(numRows - 1);  // Remove the last row
        numRows--;  // Update row count
    } else {
        alert("No rows to remove!");
    }
}

// Remove a column
function removeC() {
    if (numCols > 0) {
        let grid = document.getElementById("grid");

        // Loop through the rows from bottom to top
        for (let i = 0; i < numRows; i++) {
            // Remove the last cell (column) from each row
            grid.rows[i].deleteCell(numCols - 1);
        }

        // Decrease the number of columns after removal
        numCols--;
    } else {
        alert("No columns to remove!");
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor === "" || cells[i].style.backgroundColor === "white") {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll() {
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll() {
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
}