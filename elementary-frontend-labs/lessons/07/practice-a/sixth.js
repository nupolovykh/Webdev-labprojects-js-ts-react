console.log("sixth lab")

function firstTask(){
  var planets = [
    { name: "Меркурий", distance: 0.39 },
    { name: "Венера", distance: 0.72 },
    { name: "Земля", distance: 1 },
    { name: "Марс", distance: 1.52 },
    { name: "Юпитер", distance: 5.20 },
    { name: "Сатурн", distance: 9.58 },
    { name: "Уран", distance: 19.18 },
    { name: "Нептун", distance: 30.07 }
  ];
  
  for (var i = 0; i < planets.length; i++) {
    if (planets[i].distance <= 1) {
      console.log(planets[i].name);
    }
  }
}

// console.log("////////////////")

function secondTask(){
  var basketballPlayers = [
    { name: "Иванов", height: 191, weight: 75 },
    { name: "Петров", height: 195, weight: 82 },
    { name: "Сидоров", height: 185, weight: 70 },
    { name: "Смирнов", height: 200, weight: 90 },
    { name: "Кузнецов", height: 190, weight: 80 }
  ];
  
  for (var i = 0; i < basketballPlayers.length; i++) {
      if (basketballPlayers[i].height > 190 && basketballPlayers[i].weight < 80) {
          console.log(basketballPlayers[i].name);
      }
  }
}

// console.log("////////////////")

var calorieCounter = {};

calorieCounter.product1 = {
  name: "Яблоко",
  weight: 100,
  calories: 52
};

calorieCounter.product2 = {
  name: "Морковь",
  weight: 150,
  calories: 41
};

calorieCounter.product3 = {
  name: "Куриное филе",
  weight: 200,
  calories: 180
};

calorieCounter.product4 = {
  name: "Огурец",
  weight: 120,
  calories: 14
};

calorieCounter.product5 = {
  name: "Картофель",
  weight: 250,
  calories: 110
};

calorieCounter.product6 = {
  name: "Гречка",
  weight: 100,
  calories: 360
};

calorieCounter.product7 = {
  name: "Творог",
  weight: 120,
  calories: 103
};

function thirdAndfourthTask(){
  var minCalories = Number.MAX_SAFE_INTEGER;
  var minProducts = [];
  var N = 3;//parseInt(prompt("Введите количество продуктов"));

  for (var i = 0; i < N; i++) {
    minCalories = Number.MAX_SAFE_INTEGER;
    var bestChoice;
    for (var key in calorieCounter) {
      var product = calorieCounter[key];
      if ((product.calories < minCalories) && (minProducts.indexOf(product.name) === -1)) {
        minCalories = product.calories;
        bestChoice = product.name;
      }
    }
    minProducts.push(bestChoice)
  }

  console.log("Нужно съесть следующие продукты:");
  console.log(minProducts.join(", "));
  console.log("Суммарный вес продуктов: " + minProducts.length * 100 + " г");
}

/////////////////////
thirdAndfourthTask();



