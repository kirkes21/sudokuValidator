let tkSudoku =    [[ 8,9,5,   7,4,2,   1,3,6 ],
                   [ 2,7,1,   9,6,3,   4,8,5 ],
                   [ 4,6,3,   5,8,1,   7,9,2 ],

                   [ 9,3,4,   6,1,7,   2,5,8 ],
                   [ 5,1,7,   2,3,8,   9,6,4 ],
                   [ 6,8,2,   4,5,9,   3,7,1 ],

                   [ 1,5,9,   8,7,4,   6,2,3 ],
                   [ 7,4,6,   3,2,5,   8,1,9 ],
                   [ 3,2,8,   1,9,6,   5,4,7 ]];

let grossSudoku = [[ 8,8,4,   7,5,2,   1,3,6 ],
                   [ 2,7,1,   9,6,3,   5,8,4 ],
                   [ 5,6,3,   4,8,1,   7,9,2 ],

                   [ 9,3,5,   6,1,7,   2,4,8 ],
                   [ 4,1,7,   2,3,8,   9,6,5 ],
                   [ 6,8,2,   5,4,9,   3,7,1 ],

                   [ 1,4,9,   8,7,5,   6,2,3 ],
                   [ 7,5,6,   3,2,4,   8,1,9 ],
                   [ 3,2,8,   1,9,6,   4,5,7 ]];

function getRow(sudoku, row) {
  return sudoku[row];
}

function getColumn(sudoku, col) {
  let colArray = [];

  for (let i = 0; i < sudoku.length; i++) {
    let row = sudoku[i];

    colArray.push(row[col]);
  }
  return colArray;
}

function getSection(sudoku, x, y) {
  x *= 3;
  y *= 3;

  let secArray = [];

  for (let i = x; i < x + 3; i++) {
    for (let k = y; k < y + 3; k++) {
      let section = sudoku[i][k];
      secArray.push(section);
    }
  }
  return secArray;
}

function includes1to9(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (arr.indexOf(i) === -1) {
      return false;
    }
  }
  return true;
}

// is valid puzzle?
function sudokuIsValid(sudoku) {
  let validate = [];

  for (let i = 0; i < 9; i++) {
    validate.push(getRow(sudoku, i));
    validate.push(getColumn(sudoku, i));
  }

  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      validate.push(getSection(sudoku, i, k));
    }
  }

  for (let i = 0; i < validate.length; i++) {
    if (!includes1to9(validate[i])) {
      return false;
    }
  }

  return true;
}

console.log(sudokuIsValid(tkSudoku), "--valid?");
console.log(sudokuIsValid(grossSudoku), "--valid?");

// compare two puzzles
function isSame(sudoku1, sudoku2) {
  const sudFlat1 = sudoku1.flat();
  const sudFlat2 = sudoku2.flat();

  for (let i = 0; i < sudFlat1.length; i++) {
    if (sudFlat1[i] !== sudFlat2[i]) return false;
  }
  return true;
}

console.log(isSame(tkSudoku, grossSudoku), "--same?");
