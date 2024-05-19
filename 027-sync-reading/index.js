// npm install readline-sync

// Подключаем модуль readline-sync
const readlineSync = require('readline-sync');

// Запрашиваем имя пользователя
let name = readlineSync.question('Как тебя зовут? ');

// Выводим приветствие
console.log(`Привет, ${name}!`);