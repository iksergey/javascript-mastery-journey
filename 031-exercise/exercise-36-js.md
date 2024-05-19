
### Формулировка
Напишите программу, которая сравнивает две строки без учета регистра и определяет, равны ли они.

### Пояснение
Программа должна запрашивать у пользователя ввод двух строк и сравнивать их без учета регистра.

### Тесты

1. **Пример 1:**
   - Ввод: "Привет", "привет"
   - Ожидаемый вывод: true

2. **Пример 2:**
   - Ввод: "Hello", "hello"
   - Ожидаемый вывод: true

3. **Пример 3:**
   - Ввод: "Привет", "hello"
   - Ожидаемый вывод: false

### JavaScript
```javascript
function compareStringsIgnoreCase(string1, string2) {
    return string1.toLowerCase() === string2.toLowerCase();
}

function main() {
    let string1 = prompt("Введите первую строку:");
    let string2 = prompt("Введите вторую строку:");
    let result = compareStringsIgnoreCase(string1, string2);
    console.log(result);
}

main();
```

