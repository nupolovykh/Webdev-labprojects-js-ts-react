console.log("fifth lab")

function firstTask(){
    var numbers = [];
    for (var i = 0; i < 10; i++) {
        var input = Math.floor(Math.random() * 10);//parseInt(prompt("Введите целое число"));
        numbers.push(input);
    }
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    console.log("Отсортированный массив в порядке возрастания:");
    console.log(numbers);
}

//console.log("////////////////");

function secondTask(){
    var str = prompt("Введите текст")
    str = str.replace("Вася", "Никита")
    str = str.split(' ')
    console.log(str)
}

//console.log("////////////////")

function encryptText(text, step) {
    var array = text;
    array = array.split(' ');
    var Rvalue = [];
    for (let it of array) {
        for(var i = 1; i < step; i++){ Rvalue.push("sobaka")}
        Rvalue.push(it);
    }
    return Rvalue.join(' ')
}
function decryptText(encryptedText, step) {
  var encryptedWords = encryptedText.split(' ');
  var decryptedWords = [];
  for (var i = 0; i < encryptedWords.length; i++) {
    if ((i + 1) % step === 0) {
      decryptedWords.push(encryptedWords[i]);
    }
  }
  var decryptedText = decryptedWords.join(' ');
  return decryptedText;
}

function thirdTask(){
    var originalText = "Этот текст нужно зашифровать с шагом 3"
    var encryptedText = encryptText(originalText, 3)
    console.log(encryptedText)
    var encryptedText = decryptText(encryptedText, 3)
    console.log(encryptedText)
}

//console.log("////////////////")

function fourthTask(){
    var cords = [1, 4, -6, -8]
    var answer = Math.sqrt(Math.pow(cords[0] - cords[2], 2) + Math.pow(cords[1] - cords[3], 2))
    console.log(answer)
}

//console.log("////////////////")

function fifthTask() {
    var phrases = [
        "Звучит неплохо",
        "Да, это определенно надо сделать",
        "Не думаю, что это хорошая идея",
        "Может, не сегодня?",
        "Компьютер говорит нет"
        ];
    
    var killyourself = true;
    while(killyourself){
        var question = prompt("Задайте вопрос");
        if(question == 'q') break
        var randomIndex = Math.floor(Math.random() * phrases.length);
        var randomPhrase = phrases[randomIndex];
        console.log(randomPhrase);
    }
}

//console.log("////////////////")

function sixthTask(){
    var DICTIONARY = [
        ["apple", "яблоко"],
        ["banana", "банан"],
        ["cat", "кошка"],
        ["dog", "собака"],
        ["elephant", "слон"],
        ["flower", "цветок"],
        ["guitar", "гитара"],
        ["house", "дом"],
        ["ice cream", "мороженое"],
        ["jacket", "куртка"]
    ]
    
    var englishPhrase = "orthneokhmwermrogmergjrk car cat bomber dog"//prompt("Введите английскую фразу")
    var englishWords = englishPhrase.split(" ")
    
    var russianPhrase = ""

    for (var i = 0; i < englishWords.length; i++) {
        var foundTranslation = false
        for (var j = 0; j < DICTIONARY.length; j++) {
            if (englishWords[i] === DICTIONARY[j][0]) {
                russianPhrase += DICTIONARY[j][1] + " "
                foundTranslation = true
                break
            }
        }
        if (!foundTranslation) {
            russianPhrase += "? "
        }
    }
    
    console.log(russianPhrase.trim())
}

///////////////////////////

sixthTask()

