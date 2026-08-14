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

async function getAlphabetLetter() {
    try {
        var language = await Input("Выберите язык: ");
        if (language.toLowerCase() === 'кириллица') {
            var letter = await Input("Введите номер буквы в русском алфавите (1-33): ");
            letter = String.fromCharCode(1071 + parseInt(letter));
            console.log('Буква: ' + letter);

        } else if (language.toLowerCase() === 'латиница') {
            var letter = await Input("Введите номер буквы в английском алфавите (1-26): ");
            letter = String.fromCharCode(96 + parseInt(letter));
            console.log('Letter: ' + letter);
        }
    }
    catch (error) {
        console.error('An error occurred: ' + error);
    }
    finally {
        readline.close();
    }
}
//getAlphabetLetter();

/////////////////

async function countEvenLetters() {
    try {
        var sentence = await Input("Enter the input: ");
        //console.log(sentence);
        sentence = sentence.replace(/\s/g, '');
        //console.log(sentence);
        var count = 0;
        for (var i = 0; i < sentence.length; i++) {
            if ((i + 1) % 2 === 0) {
                count++;
            }
        }
        console.log('Number of even letters:', count);
    }
    catch (error) {
        console.error('An error occurred: ' + error);
    }
    finally {
        readline.close();
    }
}
//countEvenLetters();

/////////////////

function calculateRectangleArea(length, width) {
    return length * width;
}

async function rectangle() {
    var a, b;
    a = parseInt(await Input("A: "));
    b = parseInt(await Input("B: "));
    console.log(calculateRectangleArea(a, b));
    readline.close();
}
//rectangle();

/////////////////

function recurtionPower(S, N) {
    if (S === 0) {
        return 1;
    } else {
        return N * recurtionPower(S - 1, N);
    }
}

async function powerN() {
    var s, n;
    s = parseInt(await Input("S: "));
    n = parseInt(await Input("N: "));
    console.log(recurtionPower(s, n));
    readline.close();
}
//powerN();

/////////////////

function getMedalByScore(score) {
    let medal;
    switch (true) {
        case (score < 10):
            medal = "Нет медали";
            break;
        case (score >= 10 && score <= 15):
            medal = "Бронзовая медаль";
            break;
        case (score > 15 && score <= 20):
            medal = "Серебряная медаль";
            break;
        default:
            medal = "Золотая медаль";
    }
    return medal;
}

// let score = 25;
// console.log(getMedalByScore(score));
// readline.close();

/////////////////

function areArraysSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 3, 4, 5];
console.log(areArraysSame(array1, array2));
readline.close();