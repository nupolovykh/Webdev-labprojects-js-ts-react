import test from './test.js';

const topics = [
    "Космонавтика",
    "Информатика",
    "Программирование на JS",
    "Млекопитающие",
    "Музыка",
    "Кино",
    "Автомобили"
];

// Функция для выбора случайной темы теста
function chooseRandomTopic() {
    const randomIndex = Math.floor(Math.random() * topics.length);
    return topics[randomIndex];
}

function pasteTheLabels(text) {
    for (var i = 1; i <= 10; i++) {
        var label = document.getElementById(i.toString());
        label.textContent = test[text].questions[i - 1];
    }
}

async function checking(text){
    var answers = [];

    for (var i = 1; i <= 10; i++) {
        var answer = document.getElementById("q" + i).value;
        answers.push(answer);
    }

    var allCorrect = true;

    for (var i = 0; i < 10; i++) {
        if (answers[i] !== test[text].answers[i]) {
            allCorrect = false;
            document.getElementById("q" + (i + 1)).style.backgroundColor = "red";
        } else {
            document.getElementById("q" + (i + 1)).style.backgroundColor = "green";
        }
    }

    return allCorrect;
}

window.onload = function() {
    const text = chooseRandomTopic();
    var caption = document.getElementById("caption");
    caption.textContent = "Выбранная тема для теста: " + text;
    pasteTheLabels(text);
    
    document.getElementById("check").addEventListener("click", function() {
        checking(text).then(result => {
            if (result) {
                alert("You're right!");
            } else {
                alert("Some answers are incorrect");
            }
        });
    });
}

