//console.log("thirteenth lab")


function firstTask(){
    var m1 = [];
    for (var i = 0; i < 4; i++) {
        m1[i] = [];
        for (var j = 0; j < 4; j++) {
            m1[i][j] = Math.floor(Math.random() * 4);
        }
    }
    var m2 = [];
    for (var i = 0; i < 4; i++) {
        m2[i] = [];
        for (var j = 0; j < 4; j++) {
            m2[i][j] = Math.floor(Math.random() * 4);
        }
    }
    console.log(m1 + m2);
}

//firstTask();

/////////////////

function secondTask(a, b){
    var m2 = [];
    for (var i = 0; i < a; i++) {
        m2[i] = [];
        for (var j = 0; j < b; j++) {
            m2[i][j] = Math.floor(Math.random() * 9);
        }
    }
    return m2;
}

var rows = 5, columns = 10;
var array = secondTask(rows, columns);
log(array);


function log(field){
    for(var i = 0; i < field.length; i++){
        console.log(field[i])
    }
    console.log()
}

/////////////////

function ThirdTask(a){
    var m2 = [];
    var index = Math.floor(Math.random() * 9);
    for (var i = 0; i < a; i++) {
        m2[i] = [];
        for (var j = 0; j < a; j++) {
            if(i == j || j == a - i - 1){
                m2[i][j] = index;
                continue;
            }
            m2[i][j] = Math.floor(Math.random() * 9);
        }
    }
    return m2;
}

// var rows = 5;
// var array = ThirdTask(rows);
// log(array);

// for(var i = 0; i < array.length; i++){
//     for(var j = 0; j < array[i].length; j++){
//         process.stdout.write(`${array[i][j]} `);
//     }
//     process.stdout.write("\n");
// }

/////////////////
