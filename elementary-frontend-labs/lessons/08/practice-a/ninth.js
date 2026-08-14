function Samostoyatelynaya() {
    var randomInt = Math.floor(Math.random() * 100)
    attempts = 0;
    var start = new Date().getTime();
    while (true) {
        confirm(`Попробуйте угадать число || ${randomInt}`)
        var attempt = prompt();
        if (attempt == randomInt) {
            var end = new Date().getTime();
            alert("Вы победили!")
            break;
        }
        else attempts++;
    }
    document.getElementById("textarea").innerHTML = `Времени прошло ${(end - start) / 1000} <br> Попыток затрачено ${(attempts + 1)}`;
}

//console.log("ninth lab")

function question() {
    var condition = prompt("Какие числа угадывать? (чётные/нечётные)");
    var cond = 2;
    if (condition === "чётные") cond = 0;
    else if (condition === "нечётные") cond = 1;
    else {
        alert("Нет такого варианта");
    }
    return cond;
}

function firstTask() {
    var cond = question();
    var amount = 0;
    var output = "Результаты:";
    while (amount < 10) {
        if (cond === 0 && (amount % 2 === 0)) {
            output += `<br>Число ${amount * 2} от ${amount}`;
        }
        else if (cond === 1 && (amount % 2 === 1)) {
            output += `<br>Число ${amount * 2} от ${amount}`;
        }
        amount++;
    }
    document.getElementById("textarea").innerHTML = output;
}

/////////////////

function secondTask() {
    var sum = 0;
    var cond = question();
    for (var i = 1; i <= 20; i++) {
        if ((cond === 0 && i % 2 === 0) || (cond === 1 && i % 2 !== 0)) sum += i;
    }
    document.getElementById("textarea").innerHTML = `Сумма равна ${sum}`;
}

/////////////////

function calculateFactorial(isRecursive) {
    var num = parseInt(prompt("Введите число для расчета факториала:"));
    if (num < 0) {
        document.getElementById("textarea").innerHTML = "Факториал определен только для неотрицательных чисел";
    } else {
        var result = isRecursive ? recursiveFactorial(num) : iterativeFactorial(num);
        document.getElementById("textarea").innerHTML = "Факториал числа " + num + " равен " + result;
    }
}

function iterativeFactorial(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

/////////////////

function recursiveFactorial(num) {
    if (num === 0) return 1;
    else return num * recursiveFactorial(num - 1);
}

/////////////////

function calculateFibonacci() {
    var n = parseInt(prompt("Введите число N для вычисления N-го числа Фибоначчи:"));
    if (n < 1) {
        document.getElementById("textarea").innerHTML = "Введите натуральное число и не равное нулю";
    } else {
        var result = fibonacci(n - 1);
        document.getElementById("textarea").innerHTML = "N-е число Фибоначчи равно " + result;
    }
}

function fibonacci(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}