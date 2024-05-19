// Создание массива с использованием литералов массива []
const arr1 = [1, 2, 3, 4, 5];


// Создание массива с использованием конструктора new Array()
const arr2 = new Array("apple", "banana", "orange");

// Доступ к элементам массива по индексу
const arr = ["apple", "banana", "orange"];
console.log(arr[0]); // Выведет "apple"

// Добавление и удаление элементов массива
arr.push("grape"); // Добавляет элемент "grape" в конец массива
console.log(arr); // Выведет ["apple", "banana", "orange", "grape"]

arr.pop(); // Удаляет последний элемент массива
console.log(arr); // Выведет ["apple", "banana", "orange"]

arr.unshift("kiwi"); // Добавляет элемент "kiwi" в начало массива
console.log(arr); // Выведет ["kiwi", "apple", "banana", "orange"]

arr.shift(); // Удаляет первый элемент массива
console.log(arr); // Выведет ["apple", "banana", "orange"]

// Обход массива с использованием цикла for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Обход массива с использованием цикла for...of
for (let fruit of arr) {
    console.log(fruit);
}
// Использование цикла for...of для вывода значений массива array
const array = [10, 20, 30, 40, 50];
for (const value of array) {
    console.log(value); // Выведет значения массива
}


// Обход массива с использованием цикла for...in (не рекомендуется для массивов)
for (let index in arr) {
    console.log(arr[index]);
}

// Использование метода splice для удаления и вставки элементов
arr.splice(1, 1, "grape", "watermelon"); // Удаляет один элемент с индексом 1 и вставляет "grape" и "watermelon" на его место
console.log(arr); // Выведет ["apple", "grape", "watermelon", "orange"]

// Использование метода slice для создания подмассива
const subArray = arr.slice(1, 3); // Создает подмассив, начиная с индекса 1 (включительно) и заканчивая индексом 3 (не включительно)
console.log(subArray); // Выведет ["grape", "watermelon"]

// Использование метода concat для объединения массивов
const newArr = arr.concat(["pineapple", "melon"]); // Создает новый массив, объединяя текущий массив и переданный массив
console.log(newArr); // Выведет ["apple", "grape", "watermelon", "orange", "pineapple", "melon"]

// Использование метода reverse для изменения порядка элементов
arr.reverse(); // Меняет порядок элементов в массиве на обратный
console.log(arr); // Выведет ["orange", "watermelon", "grape", "apple"]

// Использование метода sort для сортировки элементов
arr.sort(); // Сортирует элементы массива в алфавитном порядке
console.log(arr); // Выведет ["apple", "grape", "orange", "watermelon"]


/**

// Обход массива с использованием метода forEach
arr.forEach(function (element) {
    console.log(element);
});

 */