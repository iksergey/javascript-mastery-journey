### Формулировка
Напишите программу для вычисления среднего арифметического последовательности чисел.

### Пояснение
Программа должна запрашивать у пользователя N чисел, затем вычислять и выводить их среднее арифметическое. Реализация должна быть разделена на функции для ввода чисел, вычисления среднего и печати результата.

### Тесты

1. **Пример 1:**
   - Вход: 5, 10, 15
   - Ожидаемый вывод: 10

2. **Пример 2:**
   - Вход: 2, 4, 6, 8, 10
   - Ожидаемый вывод: 6

3. **Пример 3:**
   - Вход: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
   - Ожидаемый вывод: 5.5

### JavaScript
```javascript
function calculateAverage(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}

function inputNumbers() {
    let input = prompt("Введите числа через запятую:");
    return input.split(',').map(Number);
}

function printAverage(average) {
    console.log("Среднее арифметическое: " + average);
}

function main() {
    let numbers = inputNumbers();
    let average = calculateAverage(numbers);
    printAverage(average);
}

main();
```

