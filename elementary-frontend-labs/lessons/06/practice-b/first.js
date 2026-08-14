console.log("first lab")

// console.log(3 + 10)                     //1

// var drawCats = function (howManyTimes) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");
//     }
// };
// drawCats(10);

console.log("////////////////");

let str = "!!!! приВЕдд, Я мЕДвед!!!"      //2
let str2 = str.slice(11,23)
str = "Приве" + str2.toLowerCase();
str2 = str.replace("м", "М")
console.log(str2)

console.log("////////////////");

let a = 4, b = false, c = 7;                //3
if(a != b || a >= c) console.log(true);

console.log("////////////////");

var dinosaursAndNumbers = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10];                                        //4
let len = dinosaursAndNumbers[2].length
console.log(len)
for(var i = 0; i < len; i++) console.log(dinosaursAndNumbers[2][i])

console.log("////////////////");

var st_nahe = "наша Таня громко плачет";
st_nahe = st_nahe.toLowerCase();
st_nahe = st_nahe.replace(/а/g, "А");
alert(st_nahe);
