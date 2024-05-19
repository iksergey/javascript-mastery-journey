
### Формулировка
Напишите программу, которая заменяет все вхождения заданного символа в строке на другой символ.

### Пояснение
Программа должна запрашивать у пользователя ввод строки, символы для замены и заменять все вхождения указанного символа на другой символ.

### Тесты

1. **Пример 1:**
   - Ввод: "баллада", заменяемый символ: 'а', символ замены: 'о'
   - Ожидаемый вывод: "боллодо"

2. **Пример 2:**
   - Ввод: "hello world", заменяемый символ: 'l', символ замены: 'x'
   - Ожидаемый вывод: "hexxo worxd"

3. **Пример 3:**
   - Ввод: "programming", заменяемый символ: 'm', символ замены: 'z'
   - Ожидаемый вывод: "prozgraazing"

### JavaScript
```javascript
function replaceChar(inputString, charToReplace, replacementChar) {
    return inputString.split(charToReplace).join(replacementChar);
}

function main() {
    let inputString = prompt("Введите строку:");
    let charToReplace = prompt("Введите символ для замены:");
    let replacementChar = prompt("Введите символ, на который заменить:");
    let replacedString = replaceChar(inputString, charToReplace, replacementChar);
    console.log(replacedString);
}

main();
```

