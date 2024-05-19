
### Формулировка
Напишите программу, которая определяет, содержит ли строка только цифры.

### Пояснение
Программа должна принимать строку от пользователя и проверять, состоит ли она только из цифр.

### Тесты

1. **Пример 1:**
   - Входные данные: "12345"
   - Ожидаемый вывод: True

2. **Пример 2:**
   - Входные данные: "123a5"
   - Ожидаемый вывод: False

3. **Пример 3:**
   - Входные данные: "abc123"
   - Ожидаемый вывод: False

### JavaScript
```javascript
function containsOnlyDigits(inputString) {
    return /^\d+$/.test(inputString);
}

function main() {
    const inputString = prompt("Введите строку:");
    const result = containsOnlyDigits(inputString);
    console.log(result);
}

main();
```

