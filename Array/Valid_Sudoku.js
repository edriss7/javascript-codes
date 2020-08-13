// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// A partially filled sudoku which is valid.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Example 1:

// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:

// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being 
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let index = 0; index < board.length; index++) {
        if(checkRow(board, index) === false) {
            return false;
        }
    }
    for(let index = 0; index < board[0].length; index++) {
        if(checkCol(board, index) === false) {
            return false;
        }
    }
    for(let rowI = 0; rowI < 3; rowI++) {
        for(let colI = 0; colI < 3; colI++) {
            if(checkGroup(board, rowI, colI) === false) {
                return false;
            }
        }
    }
    return true;
    
};
function checkRow(board, rowNum) {
    let rowObj = {};
    for(let index = 0; index < board[rowNum].length; index++) {
        if(board[rowNum][index] != "." && rowObj[board[rowNum][index]]) {
            return false;
        } else {
            rowObj[board[rowNum][index]] = true;
        }
    }
    return true;
}
function checkCol(board, colNum) {
    let colObj = {};
    for(let index = 0; index < board.length; index++) {
        if(board[index][colNum] != "." && colObj[board[index][colNum]]) {
            return false;
        } else {
            colObj[board[index][colNum]] = true;
        }
    }
    return true;
}
function checkGroup(board, rowGroup, colGroup) {
    let groupObj = {};
    for(let rowI = (rowGroup * 3); rowI < (rowGroup+1)*3; rowI++) {
        for(let colI = (colGroup * 3); colI < (colGroup+1)*3; colI++) {
            if(board[rowI][colI] != "." && groupObj[board[rowI][colI]]) {
                return false;
            } else {
                groupObj[board[rowI][colI]] = true;
            }
        }
    }
    return true;
}