console.log("second lab")

console.log("////////////////");

// var Dino = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10];
// console.log(Dino.length); // вычисляется длина массива
// // массив в массиве функция считает за один элемент
// console.log(Dino[1],Dino[2][1]);

var animals = [2]
animals[0] = "Кот"
animals[1] = "Пёс"
animals.push("Уткогор")
for(var i = 0; i < animals.length; i++) console.log(animals[i])

console.log("////////////////");

let buffer = animals[0]
animals[0] = animals[2]
animals[2] = buffer
for(var i = 0; i < animals.length; i++) console.log(animals[i])

console.log("////////////////");

var animals = ["лев", "леопард", "медоед", "гепард", "секретарь"]
animals.unshift("НикитаЙоу")
let last = animals[animals.length - 1], bestOfTheBest = animals[0]
animals.pop()
animals.shift()
animals.push(bestOfTheBest)
for(var i = 0; i < animals.length; i++) console.log(animals[i])

console.log("////////////////");

var trava = ["cow", "deer", "vegan"]
var meat = ["wolf", "fox", "human"]

var conCat = trava.concat(meat);
var buffer2 = trava[0];
conCat[0] = conCat[conCat.length - 1]
conCat[conCat.length - 1] = buffer2
for(var i = 0; i < conCat.length; i++) console.log(conCat[i])

console.log("////////////////");

var me = ["nikita", "chelovekovich", "wow"]
me.unshift("господин")
me.pop(); me.pop()
var new_me = me.join('@')
console.log(new_me)