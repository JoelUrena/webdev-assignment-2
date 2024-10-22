// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
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
        for (let i = 0; i < numRows; i++) {
            grid.rows[i].deleteCell(numCols - 1);  // Remove the last column from each row
        }
        numCols--;  // Update column count
        // Remove the entire row if it's empty (after all columns are removed)
        if (numCols === 0) {
            while (numRows > 0) {
                grid.deleteRow(0);  // Remove all rows
                numRows--;
            }
        }
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