
### Формулировка
Напишите программу для расчета факториала числа.

### Пояснение
Программа должна принимать на вход число N и вычислять его факториал. Факториал числа N — это произведение всех натуральных чисел от 1 до N включительно. Реализация может быть разбита на функции для ввода числа, вычисления факториала и печати результата.

### Тесты

1. **Пример 1:**
   - Вход: N = 5
   - Ожидаемый вывод: 5! = 120

2. **Пример 2:**
   - Вход: N = 0
   - Ожидаемый вывод: 0! = 1

3. **Пример 3:**
   - Вход: N = 10
   - Ожидаемый вывод: 10! = 3628800

### JavaScript
```javascript
function factorial(N) {
    if (N === 0 || N === 1) {
        return 1;
    }
    return N * factorial(N - 1);
}

function inputNumber() {
    return parseInt(prompt("Введите число для расчета факториала:"));
}

function printResult(result) {
    console.log(`Факториал числа ${result[0]}! = ${result[1]}`);
}

let number = inputNumber();
let result = [number, factorial(number)];
printResult(result);
```

