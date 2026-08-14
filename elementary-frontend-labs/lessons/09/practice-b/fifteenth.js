function firstTask() {
    var mainHeadingElement = document.getElementById("textarea");
    var newMainHeadingText = prompt("Введите новый заголовок для основного заголовка:");
    mainHeadingElement.innerHTML = newMainHeadingText;
}

function secondTask() {
    var mainHeadingElement = document.getElementById("textarea");
    var userInput = prompt("Введите 'одномерный' или 'двумерный' для вывода соответствующего массива:");
    if (userInput === "одномерный") {
        var array1D = [1, 2, 3, 4, 5];
        mainHeadingElement.innerHTML = "{" + array1D + "}";
    } else if (userInput === "двумерный") {
        var array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        mainHeadingElement.innerHTML = "{" + array2D[0] + "} {" + array2D[1] + "} {" + array2D[2] + "}";
    } else {
        mainHeadingElement.innerHTML = "Ошибка: введите 'одномерный' или 'двумерный'.";
    }
}

function thirdTask() {
    var mainHeadingElement = document.getElementById("textarea");
    mainHeadingElement.innerHTML = "Нет инициализации массивов";
}

function fourthTask() {
    var mainHeadingElement = document.getElementById("textarea");
    var userInput = prompt("Введите имя писателя: ");
    switch (userInput) {
        case "Пушкин":
            mainHeadingElement.innerHTML = "Печален ты; признайся, что с тобой».<br>— Люблю, мой друг! — «Но кто ж тебя пленила?»<br>— Она.— «Да кто ж? Глидера ль, Хлоя, Лила?»<br>— О, нет! — «Кому ж ты жертвуешь душой?»<br>— Ах! ей! — «Ты скромен, друг сердечный!<br>Но почему ж ты столько огорчен?<br>И кто виной? Супруг, отец, конечно…»<br>— Не то, мой друг! — «Но что ж!» — Я ей не он.";
            break;
        case "Лермонтов":
            mainHeadingElement.innerHTML = "У врат обители святой<br>Стоял просящий подаянья<br>Бедняк иссохший, чуть живой<br>От глада, жажды и страданья.<br>Куска лишь хлеба он просил,<br>И взор являл живую муку,<br>И кто-то камень положил<br>В его протянутую руку.<br>Так я молил твоей любви<br>С слезами горькими, с тоскою;<br>Обмануты навек тобою!";
            break;
        case "Маяковский":
            mainHeadingElement.innerHTML = "Тщетно отчаянный ветер<br>бился нечеловече.<br>Капли чернеющей крови»<br>стынут крышами кровель.<br>И овдовевшая в ночи<br>вышла луна одиночить.";
            break;
        default:
            mainHeadingElement.innerHTML = "На сайте остуствуют стихотворения данного автора.";
            break;
    }
}