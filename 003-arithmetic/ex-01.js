// Часть 1: Операторы
let x = 10;
let y = 5;
console.log(`Сумма: ${x + y}`); // Сумма: 15
console.log(`Разность: ${x - y}`); // Разность: 5
console.log(`Произведение: ${x * y}`); // Произведение: 50
console.log(`Частное: ${x / y}`); // Частное: 2
console.log(`Частное: ${10 / 4}`); // Частное: 2.5
console.log(`Остаток: ${x % y}`); // Остаток: 0
console.log(`Частное: ${10 % 4}`); // Частное: 2

// Часть 2: Операторы и приоритет операций
let a = 9;
let b = 2;
console.log(`Порядок операций: ${(2 + a) * b}`); // Порядок операций: 20

// Часть 3: Инкремент и декремент
let count1 = 5;
count1++;
console.log(`Инкремент: ${count1}`); // Инкремент: 6

let count2 = 10;
count2--;
console.log(`Декремент: ${count2}`); // Декремент: 9

// Часть 4: Присваивание с арифметикой
let num = 5;
// num = num + 3;
num += 3;
console.log(`Присваивание с добавлением: ${num}`); // Присваивание с добавлением: 8
num -= 2;
console.log(`Присваивание с вычитанием: ${num}`); // Присваивание с вычитанием: 6
num *= 4;
console.log(`Присваивание с умножением: ${num}`); // Присваивание с умножением: 24
num /= 10;
console.log(`Присваивание с делением: ${num}`); // Присваивание с умножением: 24


let count = 10;
let newCount = 0;
console.log(`count: ${count}; newCount: ${newCount}`);
// newCount = count++;
// newCount = count--;
// newCount = ++count;
newCount = --count;
console.log(`count: ${count}; newCount: ${newCount}`);

