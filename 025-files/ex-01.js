const fs = require('fs');
// Данные для записи
const data = "Пример текста для записи в файл.";

// Асинхронная запись в файл
fs.writeFile('example.txt', data, 'utf8', (err) => {
    if (err) {
        console.error("Ошибка при записи файла: ", err);
        return;
    }
    console.log("Файл был успешно записан.");
});

// Асинхронное чтение из файла
fs.readFile('example2.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Ошибка при чтении файла: ", err);
        return;
    }
    console.log("Содержимое файла: ", data);
});