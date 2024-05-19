
### Формулировка
Напишите программу, которая заполняет массив случайными буквами и находит частоту встречаемости каждой буквы в массиве.

### Пояснение
Программа должна сгенерировать массив заданного размера, заполненный случайными буквами, а затем подсчитать, сколько раз каждая буква встречается в массиве.

### Тесты

1. **Пример 1:**
   - Размер массива: 20
   - Ожидаемый вывод: {'a': 4, 'b': 3, 'c': 1, 'd': 2, 'e': 2, 'f': 1, 'g': 1, 'h': 1, 'i': 1, 'j': 1, 'k': 1, 'l': 1, 'm': 1, 'n': 1, 'o': 1, 'p': 1, 'q': 1, 'r': 1, 's': 1, 't': 1}

2. **Пример 2:**
   - Размер массива: 30
   - Ожидаемый вывод: {'a': 5, 'b': 2, 'c': 2, 'd': 1, 'e': 4, 'f': 1, 'g': 1, 'h': 1, 'i': 1, 'j': 1, 'k': 1, 'l': 1, 'm': 2, 'n': 1, 'o': 1, 'p': 1, 'q': 1, 'r': 2, 's': 1, 't': 1, 'u': 1, 'v': 1, 'w': 1, 'x': 1, 'y': 1, 'z': 1}

3. **Пример 3:**
   - Размер массива: 25
   - Ожидаемый вывод: {'a': 3, 'b': 2, 'c': 1, 'd': 2, 'e': 1, 'f': 1, 'g': 1, 'h': 2, 'i': 1, 'j': 1, 'k': 1, 'l': 1, 'm': 1, 'n': 1, 'o': 1, 'p': 1, 'q': 1, 'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 1, 'w': 1, 'x': 1, 'y': 1, 'z': 1}

### JavaScript
```javascript
function generateRandomLetters(length) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => letters[Math.floor(Math.random() * letters.length)]);
}

function countLetterFrequency(arr) {
    const frequency = {};
    for (const letter of arr) {
        frequency[letter] = (frequency[letter] || 0) + 1;
    }
    return frequency;
}

function main() {
    const size = 20; // Размер массива
    const arr = generateRandomLetters(size);
    console.log("Сгенерированный массив:", arr);
    const frequency = countLetterFrequency(arr);
    console.log("Частота встречаемости каждой буквы:", frequency);
}

main();
```

