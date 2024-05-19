// npm install moment

// Импорт библиотек Moment.js
const moment = require('moment');

// Добавление 10 дней к текущей дате
let now = moment();
console.log(`Добавление 10 дней к текущей дате: ${now.add(10, 'days').toString()}`);

// Вычитание 1 месяца
console.log(`Вычитание 1 месяца из текущей даты: ${now.subtract(1, 'months').toString()}`);

// npm install date-fns
// Импорт библиотеки Date-fns
const dateFns = require('date-fns');

// Добавление 10 дней к текущей дате
let currentDate = new Date();
console.log(`Добавление 10 дней к текущей дате: ${dateFns.addDays(currentDate, 10)}`);

// Вычитание 1 месяца
console.log(`Вычитание 1 месяца из текущей даты: ${dateFns.subMonths(currentDate, 1)}`);

// npm install luxon   
// Импорт библиотеки Luxon
const { DateTime } = require('luxon');

// Добавление 10 дней к текущей дате
let luxonNow = DateTime.now();
console.log(`Добавление 10 дней к текущей дате: ${luxonNow.plus({ days: 10 }).toISO()}`);

// Вычитание 1 месяца
console.log(`Вычитание 1 месяца из текущей даты: ${luxonNow.minus({ months: 1 }).toISO()}`);

// npm install dayjs
// Импорт библиотеки Day.js
const dayjs = require('dayjs');

// Добавление 10 дней к текущей дате
let dayjsNow = dayjs();
console.log(`Добавление 10 дней к текущей дате: ${dayjsNow.add(10, 'day').format()}`);

// Вычитание 1 месяца
console.log(`Вычитание 1 месяца из текущей даты: ${dayjsNow.subtract(1, 'month').format()}`);
