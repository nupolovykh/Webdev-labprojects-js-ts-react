// console.log("fourth lab")

function firstTask(){
  var WayVKI = [];
  WayVKI.push("ст. Черепаново");
  WayVKI.push("Электричка Чер-НСК");
  WayVKI.push("Станция Бердск");
  WayVKI.push("Остановка пл. Горького");
  WayVKI.push("Маршрутка 27");
  WayVKI.push("остановка НииСистем");
  WayVKI.push("500 метров на запад");
  WayVKI.push("ВКИ");

  for(var i = WayVKI.length - 1; i >= 0; i--){
      if (WayVKI[i].indexOf("запад") !== -1) {
        console.log(WayVKI[i].replace("запад", "восток"))}
      else if (WayVKI[i].indexOf("восток") !== -1) {
        console.log(WayVKI[i].replace("восток", "запад"))}
      else if (WayVKI[i].indexOf("север") !== -1) {
        console.log(WayVKI[i].replace("север", "юг"))}
      else if (WayVKI[i].indexOf("юг") !== -1) {
        console.log(WayVKI[i].replace("юг", "север"))}
      else console.log(WayVKI[i])
  }
}

//console.log("////////////////");

function secondTask(){
  var WayVKI = [];
  WayVKI.push("ст. Черепаново");
  WayVKI.push("Электричка Чер-НСК");
  WayVKI.push("Станция Бердск");
  WayVKI.push("Остановка пл. Горького");
  WayVKI.push("Маршрутка 27");
  WayVKI.push("остановка НииСистем");
  WayVKI.push("500 метров на запад");
  WayVKI.push("ВКИ");

  WayVKI.pop()
  WayVKI.pop()
  WayVKI.push("2км на восток")

  let f = 0
  while(f < WayVKI.length) console.log(WayVKI[f++])//alert(WayVKI[f++])
  console.log("\n путь назад \n")
  for(var i = WayVKI.length - 1; i >= 0; i--){
      if (WayVKI[i].indexOf("запад") !== -1) {
        console.log(WayVKI[i].replace("запад", "восток"))}
      else if (WayVKI[i].indexOf("восток") !== -1) {
        console.log(WayVKI[i].replace("восток", "запад"))}
      else if (WayVKI[i].indexOf("север") !== -1) {
        console.log(WayVKI[i].replace("север", "юг"))}
      else if (WayVKI[i].indexOf("юг") !== -1) {
        console.log(WayVKI[i].replace("юг", "север"))}
      else console.log(WayVKI[i])
  }
}

//console.log("////////////////");

function thirdTask(){
  var WayVKI = [];
  WayVKI.push("ст. Черепаново");
  WayVKI.push("Электричка Чер-НСК");
  WayVKI.push("Станция Бердск");
  WayVKI.push("Остановка пл. Горького");
  WayVKI.push("Маршрутка 27");
  WayVKI.push("остановка НииСистем");
  WayVKI.push("500 метров на запад");
  WayVKI.push("ВКИ");

  WayVKI.pop()
  WayVKI.pop()
  WayVKI.push("2км на восток")

  let f = 0
  while(f < WayVKI.length) console.log(WayVKI[f++])
  WayVKI.splice(WayVKI.length - 1, 0, "Перейти дорогу")
  console.log("\n путь назад \n")
  for(var i = WayVKI.length - 1; i >= 0; i--){
      if (WayVKI[i].indexOf("запад") !== -1) {
        console.log(WayVKI[i].replace("запад", "восток"))}
      else if (WayVKI[i].indexOf("восток") !== -1) {
        console.log(WayVKI[i].replace("восток", "запад"))}
      else if (WayVKI[i].indexOf("север") !== -1) {
        console.log(WayVKI[i].replace("север", "юг"))}
      else if (WayVKI[i].indexOf("юг") !== -1) {
        console.log(WayVKI[i].replace("юг", "север"))}
      else console.log(WayVKI[i])
  }
}

//console.log("////////////////");

function fourthTask(){
  var N = 3// parseInt(prompt("Введите границу интервала"));
  var primes = [];

  for (var num = 1; num <= N; num++) {
    var isPrime = true;

    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }
  }

  console.log("Простые числа в интервале [1..." + N + "]:");
  for (var j = 0; j < primes.length; j++) {
    console.log(primes[j]);
  }
}

/////////////////////////

fourthTask();


