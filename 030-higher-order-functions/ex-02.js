
// Функция высших порядков - это функция, которая принимает функцию как аргумент или возвращает функцию как результат

// Пример 1: Функция, принимающая другую функцию как аргумент
function repeat(times, action) {
    for (let i = 0; i < times; i++) {
        action(i); // Вызов переданной функции
    }
}

// Использование функции высших порядков
repeat(3, console.log); // Выведет 0, 1, 2 в консоль

// Пример 2: Функция, возвращающая другую функцию
function multiplier(factor) {
    return function (number) {
        return number * factor; // Возвращаемая функция умножает аргумент на factor
    };
}

let twice = multiplier(2); // Создание функции, которая удваивает значение
console.log(twice(5)); // Выведет 10

// Пример 3: Использование функций высших порядков с массивами
const numbers = [1, 2, 3, 4, 5];

// Функция map принимает другую функцию и применяет её к каждому элементу массива
const doubled = numbers.map(function (number) {
    return number * 2; // Удваиваем каждое число
});
console.log(doubled); // Выведет [2, 4, 6, 8, 10]

// Функция filter также принимает функцию и использует её для выбора элементов массива
const evens = numbers.filter(function (number) {
    return number % 2 === 0; // Оставляем только четные числа
});
console.log(evens); // Выведет [2, 4]

// Пример 4: Функции высших порядков в современном JavaScript с использованием стрелочных функций
const tripled = numbers.map(number => number * 3); // Утраиваем каждое число
console.log(tripled); // Выведет [3, 6, 9, 12, 15]

const greaterThanThree = numbers.filter(number => number > 3); // Оставляем числа больше 3
console.log(greaterThanThree); // Выведет [4, 5]
