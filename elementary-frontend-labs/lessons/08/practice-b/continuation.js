const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function Input(comment) {
    return new Promise((resolve, reject) => {
        readline.question(comment, (input) => {
            if (input == "bebra") reject("bebra!!");
            resolve(input);
        });
    });
}

function Condition(a, b, r) {
    if (Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) > r) return false;
    return true;
}

async function Axis() {
    var a, b, r;
    a = parseInt(await Input("X: "));
    b = parseInt(await Input("Y: "));
    r = parseInt(await Input("R: "));
    console.log(Condition(a, b, r));
    readline.close();
}
//Axis();

/////////////////

function RowVerify(board, lenght, symbol) {
    for (var i = 0; i < lenght; i++) {
        var element = board[i][0];
        var j;
        for (j = 1; j < lenght; j++) {
            if (element != board[i][j]) break;
        }
        if (j == lenght && element == symbol) return true;
    }
    return false;
}

function ColumnVerify(board, length, symbol) {
    for (var i = 0; i < length; i++) {
        var element = board[0][i];
        var j;
        for (j = 1; j < length; j++) {
            if (element != board[j][i]) break;
        }
        if (j == length && element == symbol) return true;
    }
    return false;
}

function diagonalsVerify(board, length, symbol) {
    var mainDiagonalElement = board[0][0];
    var i;
    for (i = 1; i < length; i++) {
        if (mainDiagonalElement !== board[i][i]) break;
    }
    if(i == length && mainDiagonalElement == symbol) return true;
    var secondaryDiagonalElement = board[0][length - 1];
    for (i = 1; i < length; i++) {
        if (secondaryDiagonalElement !== board[i][length - 1 - i]) break;
    }
    if(i == length && secondaryDiagonalElement == symbol) return true;
    return false;
}



function FullChecking(board, lenght, symbol) {
    if(RowVerify(board, lenght, symbol) || ColumnVerify(board, lenght, symbol) || diagonalsVerify(board, lenght, symbol)) return 2;
    else {
        for(var i = 0; i < lenght; i++){
            for(var j = 0; j < lenght; j++){
                if(board[i][j] == 0) return 1;
            }
        }
        return 0;
    }
}

// ход игрока
async function inputPlayer(field, player_symbol) {
    var cond = false;
    while (!cond) {
        x = parseInt(await Input("Y: "));
        y = parseInt(await Input("X: "));
        if (field[x][y] == 0) {
            field[x][y] = player_symbol;
            break;
        }
    }
}

// ход компьютера
function inputComputer(field, computer, lenght) {
    var computer_x, computer_y;
    cond = false;
    while (!cond) {
        computer_x = Math.floor(Math.random() * lenght);
        computer_y = Math.floor(Math.random() * lenght);
        if (field[computer_x][computer_y] == 0) {
            field[computer_x][computer_y] = computer;
            break;
        }
    }
}

// вывод текущего массива
function log(field, lenght) {
    console.log()
    for (var i = 0; i < lenght; i++) {
        console.log(field[i])
    }
    console.log()
}


// главная функция
async function start() {
    var winPlayer = 1, winComputer = 1;
    var field = [];

    var player_symbol, computer_symbol;
    if ((Math.floor(Math.random() * 10)) % 2 == 0) {
        player_symbol = -1;
        computer_symbol = 1;
    } else {
        player_symbol = 1;
        computer_symbol = -1;
    }

    var side = parseInt(await Input("A(min = 3): "));
    for (var i = 0; i < side; i++) {
        field[i] = Array(side).fill(0);
        console.log(field[i])
    }
    console.log()

    while (winPlayer == 1 && winComputer == 1) {
        console.log(player_symbol)
        if (player_symbol == 1) {
            //ход
            await inputPlayer(field, player_symbol);
            log(field, side);
            winPlayer = FullChecking(field, side, player_symbol);
            if (winPlayer == 2) {
                console.log("Player win. Congratulations!")
                break;
            }
            else if (winPlayer == 0) {
                console.log("You have no victory!")
                break;
            }
            //ход
            inputComputer(field, computer_symbol, side);
            log(field, side);
            winComputer = FullChecking(field, side, computer_symbol);
            if (winComputer == 2) {
                console.log("Computer win. Congratulations!")
                break;
            }
            else if (winComputer == 0) {
                console.log("You have no victory!")
                break;
            }
        }
        else {
            //ход
            inputComputer(field, computer_symbol, side);
            log(field, side)
            winComputer = FullChecking(field, side, computer_symbol);
            if (winComputer == 2) {
                console.log("Computer win. Congratulations!")
                break;
            }
            else if (winComputer == 0) {
                console.log("You have no victory!")
                break;
            }
            //ход
            await inputPlayer(field, player_symbol);
            log(field, side);
            winPlayer = FullChecking(field, side, player_symbol);
            if (winPlayer == 2) {
                console.log("Player win. Congratulations!")
                break;
            }
            else if (winPlayer == 0) {
                console.log("You have no victory!")
                break;
            }
        }
    }
    readline.close();
}
start();




