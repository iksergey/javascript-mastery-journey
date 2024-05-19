// Ничего не возвращают
// Ничего не принимают
function printHello() {
    console.log("Привет!");
}

// Ничего не возвращают
// Принимают аргументы
function printHello(nickname) {
    console.log(`Привет ,${nickname}!`);
}

// Возвращают результат
// Ничего не принимают
function getHelloText() {
    return "Привет!";
}

// Возвращают результат
// Принимают аргументы
function getHelloTextForUser(nickname) {
    return `Привет ,${nickname}!`;
}

// Пример объявления и вызова именованной функции
function greet(username) {
    console.log(`Привет, ${username}!`);
}

greet("Аля"); // Выведет "Привет, Аля!"

// Пример функции с возвращаемым значением
// function add(a, b) {
//     return a + b;
// }

// let result = add(3, 5); // result равен 8

// Пример использования переменных внутри функции
function sayHello(username) {
    let message = `Привет, ${username}!`;
    console.log(message);
}

sayHello("Иван"); // Выведет "Привет, Иван!"

// ***
// Пример замыкания (closures)
function outerFunction() {
    let outerVariable = "Я снаружи!";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Выведет "Я снаружи!"

// Пример функции высшего порядка: функция, принимающая другую функцию в качестве аргумента
function applyOperation(x, y, operation) {
    return operation(x, y);
}

// function add(x, y) {
//     return x + y;
// }

const add = (x, y) => x + y;
const div = (x, y) => x / y;

let result1 = applyOperation(12, 3, div); // Возвращает 4

// Пример объявления и вызова анонимной функции
const multiply = function (a, b) {
    return a * b;
};

let result2 = multiply(4, 6); // result2 равен 24

const sayHi = function (firstName) {
    console.log(`Привет, ${firstName}!`);
};

sayHi("Юля"); // Выведет "Привет, Юля!"

// Пример стрелочной функции

// function assistantMin(num1, num2) {
//     let tempMin;

//     if (num1 < num2) {
//         tempMin = num1;
//     } else {
//         tempMin = num2;
//     }
//     console.log("+");
//     return tempMin;
// }

const assistantMin = (num1, num2) => num1 < num2 ? num1 : num2;


let res = assistantMin(14, 21);
console.log(res);
