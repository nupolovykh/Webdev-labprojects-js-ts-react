const alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя ";

function encodeText(text) {
    let encodedText = "";
    for (var i = 0; i < text.length; i++) {
        let char = text[i];
        let index = alphabet.indexOf(text[i]);
        if (index !== -1) {
            encodedText += (index + 1) + "|";
        } else {
            encodedText += char + "|";
        }
    }
    encodedText = encodedText.split("|");
    encodedText.pop();
    return encodedText
}

function decodeText(codes) {
    let decodedText = "";
    for (let i = 0; i < codes.length; i++) {
        let code = parseInt(codes[i]);
        if (!isNaN(code) && code >= 1 && code <= alphabet.length) {
            decodedText += alphabet[code - 1];
        } else {
            decodedText += codes[i];
        }
    };
    return decodedText
}

function firstTask() {
    let text = prompt("Введите текст для кодирования:");
    let encodedText, decodedText, reversedText;
    if (alphabet.indexOf(text[0]) !== -1) {
        encodedText = encodeText(text);
        //alert(encodedText)
        decodedText = decodeText(encodedText);
        reversedText = decodedText.split('').reverse().join('');
    }
    else {
        encodedText = decodeText(text.split(','));
        decodedText = encodeText(encodedText).join(',');
        reversedText = decodedText.split(',')
        reversedText.reverse().join(',');
    }
    document.getElementById("textarea").innerHTML =
        "Исходный текст: " + text +
        "<br>Закодированный текст: " + encodedText +
        "<br>Раскодированный текст: " + decodedText +
        "<br>Обратный текст: " + reversedText;
}

/////////////////

function decimalToBase(number, base) {
    if (base < 2 || base > 10) {
        return "Ошибка: система счисления должна быть от 2 до 10.";
    }
    if (number < 0 || !Number.isInteger(number)) {
        return "Ошибка: входное число должно быть натуральным.";
    }
    if (number === 0) {
        return "0";
    }
    let result = "";
    while (number > 0) {
        let remainder = number % base;
        result = remainder.toString() + result;
        number = Math.floor(number / base);
    }
    return result;
}

function secondTask() {
    let number = parseInt(prompt("Введите число для перевода чила N:"));
    let base = parseInt(prompt("В N-ричную систему счисления:"));
    let result = decimalToBase(number, base);
    document.getElementById("textarea").innerHTML =
        `Число ${number} в системе счисления с основанием ${base}:<br> ${result}`;
}

/////////////////

var cats = [
    { name: "Liza", price: 2500, food: "human meat", foodPriceForKg: 50 },
    { name: "Alex", price: 2900, food: "corn", foodPriceForKg: 150 },
    { name: "Arina", price: 599, food: "asparagus", foodPriceForKg: 250 },
    { name: "Kanye", price: 4200, food: "fish sticks", foodPriceForKg: 666 }
];

var dogs = [
    { name: "Gosha", price: 1500, food: "human meat", foodPriceForKg: 50 },
    { name: "Kika", price: 2300, food: "kale", foodPriceForKg: 5 },
    { name: "Dudy", price: 1599, food: "roaches", foodPriceForKg: 57 },
    { name: "Dilan", price: 100, food: "beetles", foodPriceForKg: 62 }
];

function firstAndSecondTask() {
    var name = prompt("Как вас зовут?");
    alert("Привет, " + name);
    var likesCats = confirm("Тебе нравятся кошки?");
    var output = "";
    var index = 1;

    var array, str;
    if (likesCats) array = cats, str = "котека";
    else array = dogs, str = "пса";
    for (var i = 0; i < array.length; i++) {
        output += `${index++} Имя ${str}: ` + array[i].name + '\n';
    }
    alert(output);
    var arrayIndex = prompt(`Выберите номер ${str}: (Введите число от 1 до ${array.length})`);
    output = "";
    output += `<p>Цена ${str}: ${array[arrayIndex - 1].price}</h2>`;
    output += `<p>Цена еды для ${str}: ${array[arrayIndex - 1].foodPriceForKg}</h2>`;
    output += `<p>Нужный продукт для кормления ${str}: ${array[arrayIndex - 1].food}</h2>`;
    document.getElementById("textarea").innerHTML = output;
}