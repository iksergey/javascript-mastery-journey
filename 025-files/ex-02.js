const fs = require('fs');

const product = {
    "id": 123456,
    "name": "Smartphone",
    "brand": "Samsung",
    "model": "Galaxy S20",
    "price": 799.99,
    "features": {
        "processor": "Exynos",
        "ram": "8 GB",
        "storage": "128 GB",
        "battery": "4000 mAh"
    }
};
let jsonString = JSON.stringify(product);


// Асинхронная запись в файл
fs.writeFile('data.json', jsonString, 'utf8', (err) => {
    if (err) {
        console.error("Ошибка при записи файла: ", err);
        return;
    }
    console.log("Файл был успешно записан.");
});


// Асинхронное чтение из файла
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Ошибка при чтении файла: ", err);
        return;
    }
    const phone = JSON.parse(data);
    console.log("Прочитанный продукт:", phone);
    console.log(phone.features.ram);
});
