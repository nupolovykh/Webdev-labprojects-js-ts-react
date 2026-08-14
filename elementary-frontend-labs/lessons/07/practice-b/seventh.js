function firstTask() {
    var name = prompt("Введите ваше имя:");
    if (name.length > 5) {
        document.getElementById("textarea").innerHTML = "Какое длинное имя!";
    } else {
        document.getElementById("textarea").innerHTML = "Коротко, но миленько!";
    }
}

/////////////////

function secondTask() {
    var cats = ["Валера", "Алина", "Кристина", "Александр", "Никита", "Геннадий", "Георгий", "Валерия"]
    var dogs = ["Лёха", "Артём", "Саня", "Дима", "Гриша", "Максим", "Родион", "Илья"]

    var name = prompt("Введите ваше имя:");
    let condition = 0;
    for (var i = 0; i < 8; i++) {
        if (name === cats[i]) {
            condition = 1;
            break;
        }
        else if (name === dogs[i]) {
            condition = 2;
            break;
        }
    }
    var string;
    var link;
    switch (condition) {
        case 0:
            string = "Вы человек :(";
            link = "https://en.wikipedia.org/wiki/Australopithecine";
            break;
        case 1:
            string = "Вы котек :)";
            link = "https://en.wikipedia.org/wiki/Cat";
            break;
        case 2:
            string = "Вы пёс :(";
            link = "https://en.wikipedia.org/wiki/Dog"
            break;
    }
    alert(string);
    document.getElementById("textarea").innerHTML = string;
    window.open(link)
}

/////////////////

function thirdTask() {
    var breakfastPlans = [
        { day: "Понедельник", breakfast: "Корнфлекс", plan: "Идти в колледж" },
        { day: "Вторник", breakfast: "Омлет", plan: "Идти в колледж" },
        { day: "Среда", breakfast: "Тосты", plan: "Идти в колледж" },
        { day: "Четверг", breakfast: "Яичница", plan: "Идти в колледж" },
        { day: "Пятница", breakfast: "Гранола", plan: "Идти в колледж" },
        { day: "Суббота", breakfast: "Круассаны", plan: "Идти в театр" },
        { day: "Воскресенье", breakfast: "Блины", plan: "Идти в кино" }
    ];
    var today = prompt("Какой сегодня день недели?");
    var website;

    for (var i = 0; i < breakfastPlans.length; i++) {
        if (breakfastPlans[i].day === today) {
            current = breakfastPlans[i];
            break;
        }
    }
    alert("Сегодня будет завтрак: " + current.breakfast)
    document.getElementById("textarea").innerHTML = "Сегодня будет завтрак: " + current.breakfast;
    
    switch (current.plan) {
        case "Идти в колледж":
            website = "https://ci.nsu.ru/";
            break;
        case "Идти в театр":
            website = "https://www.globus-nsk.ru/";
            break;
        case "Идти в кино":
            website = "https://www.afisha.ru/novosibirsk/cinema/sedmoe-nebo-2918/";
            break;
    }
    if (website) {
        window.location.href = website;
    }
}

/////////////////

function fourthTask(){
    var startDate = new Date("December 16, 2018");
    var currentDate = new Date();
    
    var timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    var daysPassed = Math.ceil(timeDiff / (1000 * 3600 * 24));

    document.getElementById("textarea").innerHTML = "С момента 16 декабря 2018 года прошло " + daysPassed + " дней.";
}

//Скрипт высчитывает разницу в миллисекундах между текущей датой и датой 16 декабря 2018 года, затем преобразует это в дни и выводит сообщение с количеством прошедших дней.