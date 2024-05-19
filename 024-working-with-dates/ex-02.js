// Создаем объект Date для текущей даты и времени
let now = new Date();
console.log(`Текущая дата и время: ${now}`);

// Вычисляем разницу между двумя датами
let startDate = new Date("2024-01-01");
let endDate = new Date("2024-03-10");
let differenceInMilliseconds = endDate.getTime() - startDate.getTime();
console.log(`Разница между датами в миллисекундах: ${differenceInMilliseconds}`);

// Преобразуем разницу в дни
let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
console.log(`Разница между датами в днях: ${differenceInDays}`);

// Добавляем 10 дней к текущей дате
let newDate = new Date(now);
newDate.setDate(now.getDate() + 10);
console.log(`Дата после добавления 10 дней: ${newDate}`);

// Вычитаем 3 месяца из текущей даты
let subtractedDate = new Date(now);
subtractedDate.setMonth(now.getMonth() - 3);
console.log(`Дата после вычитания 3 месяцев: ${subtractedDate}`);

// Добавляем 2 года к текущей дате
let addedYearsDate = new Date(now);
addedYearsDate.setFullYear(now.getFullYear() + 2);
console.log(`Дата после добавления 2 лет: ${addedYearsDate}`);
