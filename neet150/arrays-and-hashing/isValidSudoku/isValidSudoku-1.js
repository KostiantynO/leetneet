/**
 * Determine if a 9 x 9 Sudoku board is valid.
 * Only the filled cells need to be validated according to the following rules:
 * • Each row must contain the digits 1-9 without repetition.
 * • Each column must contain the digits 1-9 without repetition.
 * • Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * Note:
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 *
 * Constraints:
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit 1-9 or '.'
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
  const boardLength = board.length;
  // constraint: board.length == 9
  if (boardLength !== 9) return false;

  const chars = {
    0: '.',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  };

  const count = {
    '.': 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  // columns[j = column][board[i = row][j = column]]
  const columns = new Array(9).fill({}).map(() => ({ ...count }));

  // grids[j = column][board[i = row][j = column]]
  const grids = new Array(9).fill({}).map(() => ({ ...count }));

  // grids[j][board[i][j]] += 1;
  // grids[0][board[0][0]] += 1; // 1st box
  // grids[1][board[0][1]] += 1; // 1st box
  // grids[2][board[0][2]] += 1; // 1st box
  // grids[0][board[1][0]] += 1; // 1st box
  // grids[1][board[1][1]] += 1; // 1st box
  // grids[2][board[1][2]] += 1; // 1st box
  // grids[0][board[2][0]] += 1; // 1st box
  // grids[1][board[2][1]] += 1; // 1st box
  // grids[2][board[2][2]] += 1; // 1st box

  // grids[3][board[0][3]] += 1; // 2nd box
  // grids[4][board[0][4]] += 1; // 2nd box
  // grids[5][board[0][5]] += 1; // 2nd box
  // grids[3][board[1][3]] += 1; // 2nd box
  // grids[4][board[1][4]] += 1; // 2nd box
  // grids[5][board[1][5]] += 1; // 2nd box
  // grids[3][board[2][3]] += 1; // 2nd box
  // grids[4][board[2][4]] += 1; // 2nd box
  // grids[5][board[2][5]] += 1; // 2nd box

  // grids[6][board[0][6]] += 1; // 3rd box
  // grids[7][board[0][7]] += 1; // 3rd box
  // grids[8][board[0][8]] += 1; // 3rd box
  // grids[6][board[1][6]] += 1; // 3rd box
  // grids[7][board[1][7]] += 1; // 3rd box
  // grids[8][board[1][8]] += 1; // 3rd box
  // grids[6][board[2][6]] += 1; // 3rd box
  // grids[7][board[2][7]] += 1; // 3rd box
  // grids[8][board[2][8]] += 1; // 3rd box

  // grids[0][board[3][0]] += 1; // 4th box
  // grids[1][board[3][1]] += 1; // 4th box
  // grids[2][board[3][2]] += 1; // 4th box
  // grids[0][board[4][0]] += 1; // 4th box
  // grids[1][board[4][1]] += 1; // 4th box
  // grids[2][board[4][2]] += 1; // 4th box
  // grids[0][board[5][0]] += 1; // 4th box
  // grids[1][board[5][1]] += 1; // 4th box
  // grids[2][board[5][2]] += 1; // 4th box

  for (let i = boardLength - 1; i >= 0; i -= 1) {
    const rowArr = board[i];
    const rowLength = rowArr.length;

    // constraint: board[i].length == 9
    if (rowLength !== 9) return false;

    const countRow = {
      '.': 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    };

    for (let j = rowLength - 1; j >= 0; j -= 1) {
      const char = rowArr[j];

      // constraint: board[i][j] is a digit 1-9 or '.'
      if (chars[char] !== char && chars[0] !== char) return false;
      countRow[char] += 1;

      const isDigit = char !== chars[0];

      // rule: Each row must contain the digits 1-9 without repetition.
      if (isDigit && countRow[char] > 1) return false;

      // columns[j][board[i][j]] += 1;

      columns[j][char] += 1;

      // rule: Each column must contain the digits 1-9 without repetition.
      if (isDigit && columns[j][char] > 1) return false;

      // rule: Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
      // grids[j][char] += 1;

      if (!isDigit) continue;

      /*
        0 '1x1': i=0,1,2; j=0,1,2
        1 '1x2': i=0,1,2; j=3,4,5
        2 '1x3': i=0,1,2; j=6,7,8
        3 '2x1': i=3,4,5; j=0,1,2
        4 '2x2': i=3,4,5; j=3,4,5
        5 '2x3': i=3,4,5; j=6,7,8
        6 '3x1': i=6,7,8; j=0,1,2
        7 '3x2': i=6,7,8; j=3,4,5
        8 '3x3': i=6,7,8; j=6,7,8
      */

      // rows 1-3

      if (i === 0 || i === 1 || i === 2) {
        // columns 1-3
        if (j === 0 || j === 1 || j === 2) {
          grids[0][char] += 1;
          if (grids[0][char] > 1) return false;
        }

        // columns 4-6
        else if (j === 3 || j === 4 || j === 5) {
          grids[1][char] += 1;
          if (grids[1][char] > 1) return false;
        }

        // columns 7-9
        else if (j === 6 || j === 7 || j === 8) {
          grids[2][char] += 1;
          if (grids[2][char] > 1) return false;
        }
      }
      // rows 4-6
      else if (i === 3 || i === 4 || i === 5) {
        // columns 1-3
        if (j === 0 || j === 1 || j === 2) {
          grids[3][char] += 1;
          if (grids[3][char] > 1) return false;
        }

        // columns 4-6
        else if (j === 3 || j === 4 || j === 5) {
          grids[4][char] += 1;
          if (grids[4][char] > 1) return false;
        }

        // columns 7-9
        else if (j === 6 || j === 7 || j === 8) {
          grids[5][char] += 1;
          if (grids[5][char] > 1) return false;
        }
      }
      // rows 7-9
      else if (i === 6 || i === 7 || i === 8) {
        // columns 1-3
        if (j === 0 || j === 1 || j === 2) {
          grids[6][char] += 1;
          if (grids[6][char] > 1) return false;
        }

        // columns 4-6
        else if (j === 3 || j === 4 || j === 5) {
          grids[7][char] += 1;
          if (grids[7][char] > 1) return false;
        }

        // columns 7-9
        else if (j === 6 || j === 7 || j === 8) {
          grids[8][char] += 1;
          if (grids[8][char] > 1) return false;
        }
      }
    }
  }

  return true;
};

// Example 1:
const input1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
const output1 = isValidSudoku(input1);
console.log(output1); // true

/**
 * Example 2:
 * Explanation: Same as Example 1,
 * except with the 5 in the top left corner being modified to 8.
 * Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 */
const input2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
const output2 = isValidSudoku(input2);
console.log(output2); // false
