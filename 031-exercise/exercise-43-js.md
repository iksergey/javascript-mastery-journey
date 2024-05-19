
### Формулировка
Напишите программу, которая находит самое длинное слово в предложении и выводит его длину.

### Пояснение
Программа должна принимать предложение от пользователя, находить в нем самое длинное слово и выводить его длину.

### Тесты

1. **Пример 1:**
   - Входные данные: "Это тестовая строка для примера"
   - Ожидаемый вывод: 8

2. **Пример 2:**
   - Входные данные: "Самое длинное слово - это пневматоултразвукова"
   - Ожидаемый вывод: 25

3. **Пример 3:**
   - Входные данные: "Длина длинного слова"
   - Ожидаемый вывод: 7

### JavaScript
```javascript
function findLongestWordLength(sentence) {
    let words = sentence.split(' ');
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

function main() {
    const sentence = prompt("Введите предложение:");
    const longestWordLength = findLongestWordLength(sentence);
    console.log(longestWordLength);
}

main();
```

