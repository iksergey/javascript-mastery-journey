
### Формулировка
Напишите программу для генерации уникальных идентификаторов (ID) фиксированной длины.

### Пояснение
Программа должна генерировать уникальный идентификатор заданной длины, используя комбинацию цифр и букв. Длина ID и символы, используемые для его генерации, задаются пользователем.

### Тесты

1. **Пример 1:**
   - Длина ID: 6
   - Ожидаемый вывод: Строка из 6 случайных символов (например, "aBcDeF")

2. **Пример 2:**
   - Длина ID: 8
   - Ожидаемый вывод: Строка из 8 случайных символов (например, "1a2b3c4d")

3. **Пример 3:**
   - Длина ID: 10
   - Ожидаемый вывод: Строка из 10 случайных символов (например, "XyZ987AbCd")

### JavaScript
```javascript
function generateRandomID(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        id += chars.charAt(randomIndex);
    }
    return id;
}

function main() {
    const length = prompt("Введите длину ID:");
    const randomID = generateRandomID(parseInt(length));
    console.log(randomID);
}

main();
```

