// Пример с использованием if
let age = 25;

if (age >= 18) {
    console.log("Ура!");
}

if (age >= 18) {
    console.log("Вы совершеннолетний");
} else {
    console.log("Вы несовершеннолетний");
}

// Пример с использованием if...else if...else
let num = 0;

if (num > 0) {
    console.log("Число положительное");
} else if (num < 0) {
    console.log("Число отрицательное");
} else {
    console.log("Число равно нулю");
}

// Пример с использованием нескольких блоков else if
let temperature = 25;

if (temperature < 0) {
    console.log("На улице морозно");
} else if (temperature >= 0 && temperature < 15) {
    console.log("На улице прохладно");
} else if (temperature >= 15 && temperature < 25) {
    console.log("На улице тепло");
} else {
    console.log("На улице жарко");
}

// Пример с использованием вложенного if
let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    if (num1 % 2 === 0) {
        console.log("num1 больше num2 и является четным числом");
    } else {
        console.log("num1 больше num2, но не является четным числом");
    }
} else {
    console.log("num1 не больше num2");
}