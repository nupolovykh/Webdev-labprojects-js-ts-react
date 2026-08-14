// Создание массива слов для игры
var words = ["программа", "кошка", "бегемот", "студент", "параметризация"];

// Выбор случайного слова из массива
var word = words[Math.floor(Math.random() * words.length)];

// Создание массива для отслеживания угаданных букв
var guessedLetters = new Array(word.length).fill("_");

var attempts = Math.max(Math.ceil(word.length / 2), 4);
var wrong = 0;

// Функция, отображающая состояние игры
function displayGameState() {
    var wordState = guessedLetters.join(" ");
    alert("Угадано: " + wordState);
}

// Функция для игрока, пытающегося угадать букву
function guessLetter() {
    var letter = prompt("Введите букву:");
    if (letter === null || letter === "ё") {
        alert("Игра окончена.");
        return false;
    } else if (letter.length !== 1 || !/[а-я]/i.test(letter)) {
        alert("Пожалуйста, введите одну букву кириллицы.");
    } else {
        checkLetter(letter.toLowerCase());
    }
    return true;
}

// Функция проверки угаданной буквы
function checkLetter(letter) {
    var found = false;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            guessedLetters[i] = letter;
            found = true;
        }
    }
    if (!guessedLetters.includes("_")) {
        alert("Поздравляем! Вы угадали слово: " + word);
    } else if (!found) {
        wrong++;
        alert("Буква не угадана.");
    }
}

var space = "|                  \n";
var space_with = "|         |        \n";

var lose_picture = ["|        (О)        \n", "|        /()\\        \n", "|        /\\        \n" ];
for(let i = 0; i < attempts - 4; i++){
    lose_picture.unshift(space_with);
}

function draw(attempts, wrong){
    let picture = [];
    let i = 0;
    picture.unshift("._________.        \n");
    for(; i < wrong; i++){
        picture.push(lose_picture[i]);
    }
    for(; i < attempts; i++){
        picture.push(space);
    }
    alert(picture.join(''));
}

// Основной игровой цикл
function playHangman() {
    while (guessedLetters.includes("_") && wrong < attempts) {
        displayGameState();
        draw(attempts, wrong);
        if(guessLetter() == false) break;
    }
    if (!guessedLetters.includes("_")) {
        alert("Поздравляем! Вы угадали слово: " + word);
    } else {
        alert("Вы проиграли. Загаданное слово было: " + word);
    }
}

// Запуск игры
playHangman();
