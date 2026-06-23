/*
Google sheet Clone:
-UI:
section 1.
    toolbar sectoin
section 2.
    Adress bar and formula bar.
section 3.
    spreadsheet container.

-This mini project will suppport the following features:

1. user can edit the cell's value by entering in it.
2. user can select tools from the tool bar section and they can apply the styles on the selected cell's value.
3. User can enter a valid formula in the formula bar and if they hit enter the result should be automatically calculated and can be seen in the desired cell.
4. Dependency tracking: if the parents value is updated the children values should be recalculated.

Data Model:
2-D array
Data Structure:
 value, parents, children, formula
{
    value:"",
    formuls:"",
    parents:[],
    children:[]
}
*/

let rows = 1000;
let cols = 26;

function createSheetDB() {
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        value: "",
        formuls: "",
        parents: [],
        children: [],
      });
    }
  }
}

createSheetDB();

let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");

function generateHeaders() {
  for (let i = 0; i < cols; i++) {
    let cell = document.createElement("div");
    cell.textContent = String.fromCharCode(i + 65);
    cell.classList.add("cell");
    topRow.appendChild(cell);
  }

  for (let i = 0; i < rows; i++) {
    let cell = document.createElement("div");
    cell.textContent = i + 1;
    cell.classList.add("cell");
    leftCol.appendChild(cell);
  }
}

generateHeaders();

let cellsContainer = document.querySelector(".cells");
function generateCells() {
  for (let i = 0; i < rows; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.contentEditable = true;
      rowDiv.appendChild(cell);
    }
    cellsContainer.appendChild(rowDiv);
  }
}

generateCells();
