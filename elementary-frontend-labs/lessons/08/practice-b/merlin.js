const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

function initializeBoard(size) {
    let board = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
}

function printBoard(board) {
    for (let row of board) {
        console.log(row.join(' | '));
    }
}

function isMoveValid(board, row, col) {
    return board[row][col] === ' ';
}

function isGameOver(board) {
    // Check for a winner
    // ... (You can implement the logic for checking the win condition)

    // Check for a draw
    // ... (You can implement the logic for checking the draw condition)

    return false; // Return true if the game is over
}

function playerMove(board) {
    rl.question('Enter your move (row and column, e.g. 1 1): ', (input) => {
        let [row, col] = input.split(' ').map(num => parseInt(num) - 1);
        if (isMoveValid(board, row, col)) {
            board[row][col] = 'X';
            printBoard(board);
            if (!isGameOver(board)) {
                computerMove(board);
            } else {
                console.log('You win!');
                rl.close();
            }
        } else {
            console.log('Invalid move. Try again.');
            playerMove(board);
        }
    });
}

function computerMove(board) {
    // Implement computer's move logic here
    // ... (You can implement the algorithm for the computer's move)

    printBoard(board);
    if (!isGameOver(board)) {
        playerMove(board);
    } else {
        console.log('Computer wins!');
        rl.close();
    }
}

// rl.question('Enter the size of the board: ', (size) => {
//     const board = initializeBoard(parseInt(size));
//     printBoard(board);
//     playerMove(board);
// });






////////////////////    minot algorithm

function log(field, lenght) {
    console.log()
    for (var i = 0; i < lenght; i++) {
        console.log(field[i])
    }
    console.log()
}

function FullCheckingMinor(board, lenght) {
    for (var i = 0; i < lenght - 2; i++) {
        for (var j = 0; j < lenght - 2; j++) {
            var minor = [];
            for (var row = 0, i2 = i; i2 < i + 3; i2++, row++) {
                minor[row] = Array(3).fill(0);
                for (var column = 0, j2 = j; j2 < j + 3; j2++, column++) {
                    minor[row][column] = board[i2][j2];
                }
            }
            log(minor, 3);
            var win = checkWinInThreeXThree(minor);
            if (win) return 2;
        }
    }
    for (var j = 0; j < 3; j++) {
        for (var j2 = 0; j2 < 3; j2++) {
            if (board[j][j2] == 0) return 1;
        }
    }
    return 0;
}

function checkWinInThreeXThree(board, some_player) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === some_player && board[i][1] === some_player && board[i][2] === some_player) return true;
    }
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === some_player && board[1][i] === some_player && board[2][i] === some_player) return true;
    }
    if ((board[0][0] === some_player && board[1][1] === some_player && board[2][2] === some_player) ||
        (board[0][2] === some_player && board[1][1] === some_player && board[2][0] === some_player)) return true;
    return false;
}

let field = [];
for (var i = 0; i < 5; i++) {
    field[i] = Array(5).fill(0);
    for (var j = 0; j < 5; j++) {
        field[i][j] = Math.floor(Math.random() * 10);
    }
}

log(field, 5);

console.log()
FullCheckingMinor(field, 5);