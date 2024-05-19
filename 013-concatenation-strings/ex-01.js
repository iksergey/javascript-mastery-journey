// Оператор +
let str1 = "Hello, ";
let str2 = "world!";
let result = str1 + str2;
console.log(result); // Выведет "Hello, world!"

// Шаблонные строки
let firstName = "Alice";
let greeting = `Привет, ${firstName}!`;
console.log(greeting); // Выведет "Привет, Alice!"

// Метод concat()
str1 = "Hello, ";
str2 = "world!";
result = str1.concat(str2);
console.log(result); // Выведет "Hello, world!"


let age = 30;
firstName = "Alice";
greeting = "Привет, {firstName}! Тебе уже {age} лет."
    .replace("{firstName}", firstName)
    .replace("{age}", age);

console.log(greeting); // Выведет "Привет, Alice! Тебе уже 30 лет."

/////

// Интерполяция строк в JavaScript 
// с использованием шаблонных литералов:

// Интерполяция переменных

firstName = "Alice";
age = 30;
greeting = `Привет, ${firstName}! Тебе уже ${age} лет.`;
console.log(greeting); // Выведет "Привет, Alice! Тебе уже 30 лет."


// Интерполяция выражений

let x = 10;
let y = 5;
result = `Сумма ${x} и ${y} равна ${x + y} `;
console.log(result); // Выведет "Сумма 10 и 5 равна 15"

// Многострочные строки
let multiLine = `
Это
многострочная
строка
`;
console.log(multiLine);
// Выведет:
// Это
// многострочная
// строка

// Интерполяция символов
let symbol = `\u{1F60A}`; // Смайлик
console.log(symbol); // Выведет 😊

multiLine = 'Это\nмн\'огострочная\nстрока';

console.log(multiLine);
