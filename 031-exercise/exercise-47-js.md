
### Формулировка
Напишите программу, которая задает массив из 15 случайных целых чисел и определяет, сколько среди них положительных, отрицательных и нулевых значений.

### Пояснение
Программа должна создавать массив из 15 случайных целых чисел, затем подсчитывать количество положительных, отрицательных и нулевых значений в этом массиве.

### Тесты

1. **Пример 1:**
   - Ожидаемый вывод: Положительных: 8, Отрицательных: 4, Нулевых: 3

2. **Пример 2:**
   - Ожидаемый вывод: Положительных: 7, Отрицательных: 5, Нулевых: 3

3. **Пример 3:**
   - Ожидаемый вывод: Положительных: 6, Отрицательных: 7, Нулевых: 2

### JavaScript
```javascript
function countNumbers(arr) {
    let positive = 0, negative = 0, zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    return { positive, negative, zero };
}

function main() {
    const arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 21) - 10);
    console.log("Случайный массив:", arr);
    const counts = countNumbers(arr);
    console.log("Положительных:", counts.positive);
    console.log("Отрицательных:", counts.negative);
    console.log("Нулевых:", counts.zero);
}

main();
```

