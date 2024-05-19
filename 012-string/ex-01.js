// Создание строк
let str1 = 'Привет, мир!';
let str2 = "Hello, world!";
let str3 = `Это шаблонная строка`;

// Доступ к символам
let str = "JavaScript";
//         0123456789
console.log(str[0]); // Выведет "J"
console.log(str.charAt(1)); // То же, что и str[1]; выведет "a"

// Длина строки
console.log(str.length); // Выведет 10

// Сложение строк
str1 = "Hello, ";
str2 = "world!";
let result = str1 + str2;
console.log(result); // Выведет "Hello, world!"

// Методы преобразования
str = "JavaScript";
str.toUpperCase();
console.log(str.toUpperCase()); // Выведет "JAVASCRIPT"
console.log(str.toLowerCase()); // Выведет "javascript"

// Поиск подстроки
str = "JavaScript";
console.log(str.indexOf("Script")); // Выведет 4
console.log(str.lastIndexOf("a")); // Выведет 3
console.log(str.includes("Java")); // Вернет true

// Обрезка строки
str = "JavaScript";
console.log(str.substring(0, 4)); // Выведет "Java"
console.log(str.slice(-6)); // Выведет "Script"
console.log(str.slice(4)); // Выведет "Script"
// console.log(str.substr(4, 6)); // Выведет "Script"

// trimStart, trim, trimEnd
str = "   Hello, world!   ";
console.log(str.trimStart()); // "Hello, world!   "
console.log(str.trimEnd());   // "   Hello, world!"
console.log(str.trim());      // "Hello, world!"

// split
str = "JavaScript is awesome";
console.log(str.split(" ")); // ["JavaScript", "is", "awesome"]

// replace
str = "JavaScript";
console.log(str.replace("Java", "Type")); // "TypeScript"