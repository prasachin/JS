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
    formula:"",
    parents:[],
    children:[]
}
*/

let rows = 1000;
let cols = 26;
let sheetDB = [];
function createSheetDB() {
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        value: "",
        formula: "",
        parents: [],
        children: [],
      });
    }
    sheetDB.push(row);
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
let selectedCell = null;
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
      cell.setAttribute("rid", i);
      cell.setAttribute("cid", j);
      cell.addEventListener("click", function () {
        selectedCell = cell;
        let address = String.fromCharCode(j + 65) + (i + 1);
        let addressBar = document.querySelector("#address");
        addressBar.value = address;
      });
    }
    cellsContainer.appendChild(rowDiv);
  }
}

generateCells();

let boldBtn = document.querySelector("#bold");
boldBtn.addEventListener("click", function () {
  if (selectedCell) {
    selectedCell.style.fontWeight =
      selectedCell.style.fontWeight === "bold" ? "normal" : "bold";
  }
});

let itallicBtn = document.querySelector("#italic");
itallicBtn.addEventListener("click", function () {
  if (selectedCell) {
    selectedCell.style.fontStyle =
      selectedCell.style.fontStyle === "italic" ? "normal" : "italic";
  }
});

let underLine = document.querySelector("#underline");
underLine.addEventListener("click", function () {
  if (selectedCell) {
    selectedCell.style.textDecoration =
      selectedCell.style.textDecoration === "underline" ? "none" : "underline";
  }
});

let formulaInput = document.querySelector("#formula");

function getRIDCID(address) {
  let rid = Number(address.slice(1)) - 1;
  let cid = address.charCodeAt(0) - 65;
  return { rid, cid };
}
// A1 + B1
// [A1, +, B1]
// [5, +, 5]
// 5 + 5
function evaluateFormula(formula) {
  if (!formula) return;
  let tokens = formula.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    if (/^[A-Z][0-9]+$/.test(tokens[i])) {
      let { rid, cid } = getRIDCID(tokens[i]);
      let value = sheetDB[rid][cid].value;
      tokens[i] = value;
    }
  }
  let expression = tokens.join(" ");
  try {
    let result = eval(expression);
    return result;
  } catch (error) {
    return "Error";
  }
}

function removeDependencies(rid, cid) {
  let parents = sheetDB[rid][cid].parents;
  parents.forEach(({ rid: pr, cid: pc }) => {
    sheetDB[pr][pc].children = sheetDB[pr][pc].children.filter(
      (child) => !(child.childRID === rid && child.childCID === cid),
    );
  });
  sheetDB[rid][cid].parents = [];
}

function updateChildren(rid, cid) {
  let children = sheetDB[rid][cid].children;
  children.forEach((child) => {
    let cellObj = sheetDB[child.childRID][child.childCID];
    let formula = cellObj.formula;
    let newValue = evaluateFormula(formula);
    cellObj.value = newValue;
    updateCellUI(child.childRID, child.childCID, newValue);
    updateChildren(child.childRID, child.childCID);
  });
}

cellsContainer.addEventListener(
  "blur",
  function (e) {
    let cell = e.target;
    let rid = Number(cell.getAttribute("rid"));
    let cid = Number(cell.getAttribute("cid"));
    let value = cell.textContent;
    if (sheetDB[rid][cid].formula) {
      removeDependencies(rid, cid);
    }
    sheetDB[rid][cid].value = value;
    sheetDB[rid][cid].formula = "";
    updateChildren(rid, cid);
  },
  true,
);

function updateCellUI(rid, cid, value) {
  let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
  cell.textContent = value;
}
// A1 + B1
// target: C1
function addDependencies(formula, childRID, childCID) {
  let tokens = formula.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    if (/^[A-Z][0-9]+$/.test(tokens[i])) {
      let { rid, cid } = getRIDCID(tokens[i]);
      sheetDB[rid][cid].children.push({
        childRID: childRID,
        childCID: childCID,
      });
      sheetDB[childRID][childCID].parents.push({
        rid: rid,
        cid: cid,
      });
    }
  }
}

formulaInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let formula = formulaInput.value;
    let address = document.querySelector("#address").value;
    if (!address) return;
    let value = evaluateFormula(formula);
    // console.log(value);
    let { rid, cid } = getRIDCID(address);
    sheetDB[rid][cid].value = value;
    sheetDB[rid][cid].formula = formula;
    addDependencies(formula, rid, cid);
    updateCellUI(rid, cid, value);
  }
});
