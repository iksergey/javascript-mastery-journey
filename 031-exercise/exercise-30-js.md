
### Формулировка
Напишите программу для печати всех делителей заданного числа.

### Пояснение
Программа должна принимать на вход целое число N и выводить все его натуральные делители. Делитель - это натуральное число, на которое заданное число делится нацело. Реализация должна быть разделена на функции для ввода числа, вычисления делителей и печати результата.

### Тесты

1. **Пример 1:**
   - Вход: N = 6
   - Ожидаемый вывод: 1, 2, 3, 6

2. **Пример 2:**
   - Вход: N = 12
   - Ожидаемый вывод: 1, 2, 3, 4, 6, 12

3. **Пример 3:**
   - Вход: N = 17
   - Ожидаемый вывод: 1, 17

### JavaScript
```javascript
function calculateDivisors(N) {
    let divisors = [];
    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function printDivisors(divisors) {
    console.log(divisors.join(', '));
}

function inputNumber() {
    return parseInt(prompt("Введите целое число:"));
}

function main() {
    let N = inputNumber();
    let divisors = calculateDivisors(N);
    printDivisors(divisors);
}

main();
```

