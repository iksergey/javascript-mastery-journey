

### Формулировка
Напишите программу, которая преобразует каждое слово в строке так, чтобы оно начиналось с заглавной буквы, а остальные были строчными.

### Пояснение
Программа должна принимать строку от пользователя, преобразовывать каждое слово в строке и выводить измененную строку.

### Тесты

1. **Пример 1:**
   - Входные данные: "санкт-петербург"
   - Ожидаемый вывод: "Санкт-Петербург"

2. **Пример 2:**
   - Входные данные: "москва"
   - Ожидаемый вывод: "Москва"

3. **Пример 3:**
   - Входные данные: "нью-йорк"
   - Ожидаемый вывод: "Нью-Йорк"

### JavaScript
```javascript
function capitalizeWords(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
}

function main() {
    const sentence = prompt("Введите строку:");
    const capitalizedSentence = capitalizeWords(sentence);
    console.log(capitalizedSentence);
}

main();
```

