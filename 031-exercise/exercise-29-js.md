
### Формулировка
Напишите программу для определения, является ли заданное число простым.

### Пояснение
Программа должна принимать на вход число и проверять, является ли оно простым. Число считается простым, если оно больше 1 и делится нацело только на 1 и на себя. Реализация может быть разбита на функции для ввода числа, проверки на простоту и печати результата.

### Тесты

1. **Пример 1:**
   - Вход: 7
   - Ожидаемый вывод: "Число 7 является простым."

2. **Пример 2:**
   - Вход: 12
   - Ожидаемый вывод: "Число 12 не является простым."

3. **Пример 3:**
   - Вход: 29
   - Ожидаемый вывод: "Число 29 является простым."

### JavaScript
```javascript
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function inputNumber() {
    return parseInt(prompt("Введите число:"));
}

function printResult(number, isPrime) {
    if (isPrime) {
        console.log(`Число ${number} является простым.`);
    } else {
        console.log(`Число ${number} не является простым.`);
    }
}

let number = inputNumber();
let prime = isPrime(number);
printResult(number, prime);
```

