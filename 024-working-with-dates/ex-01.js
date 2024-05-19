// Создание объекта Date, представляющего текущую дату и время
let now = new Date();
console.log(now);

// Создание объекта Date из строки в формате ISO 8601
let dateStr = new Date("2064-07-10");
console.log(dateStr);

// Создание объекта Date из компонентов даты и времени
// Месяцы считаются с 0!
let dateComponents = new Date(2024, 2, 10, 14, 30, 0);
console.log(dateComponents);

// Создание объекта Date из миллисекунд с начала эпохи Unix
let dateFromMs = new Date(0); // Эпоха Unix
console.log(dateFromMs);

// Получение года текущей даты
console.log(now.getFullYear());


// Получение месяца текущей даты (0-11)
console.log(now.getMonth());


// Получение дня текущей даты (1-31)
console.log(now.getDate());


// Получение часов текущей даты (0-23)
console.log(now.getHours());


// Получение минут текущей даты (0-59)
console.log(now.getMinutes());


// Получение секунд текущей даты (0-59)
console.log(now.getSeconds());


// Получение миллисекунд текущей даты (0-999)
console.log(now.getMilliseconds());


// Получение дня недели текущей даты (0-6)
// 0 - воскресенье, 1 - понедельник, и так далее
console.log(now.getDay());


// Установка года текущей даты
now.setFullYear(2024);
console.log(`.setFullYear(2024): ${now}`);

// Установка месяца текущей даты (0-11)
now.setMonth(2); // Месяцы считаются с 0!
console.log(`.setMonth(2): ${now}`);


// Установка дня текущей даты (1-31)
now.setDate(10);
console.log(`.setDate(10): ${now}`);


// Установка часов текущей даты (0-23)
now.setHours(14);
console.log(`.setHours(14): ${now}`);


// Установка минут текущей даты (0-59)
now.setMinutes(30);
console.log(`.setMinutes(30): ${now}`);


// Установка секунд текущей даты (0-59)
now.setSeconds(0);
console.log(`.setSeconds(0): ${now}`);


// Установка миллисекунд текущей даты (0-999)
now.setMilliseconds(0);
console.log(`.setMilliseconds(0): ${now}`);


// Получение разницы в минутах между местным временем и UTC
let timezoneOffset = now.getTimezoneOffset();
console.log(timezoneOffset);


// Преобразование даты в строку в местном часовом поясе
console.log(now.toString());


// Преобразование даты в строку в формате ISO 8601 в UTC
console.log(now.toISOString());


// Получение строкового представления даты и времени в соответствии с локалью пользователя
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());