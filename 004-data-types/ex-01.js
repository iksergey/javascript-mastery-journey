// 1. Число (Number)
let num = 10;
console.log(` >> num`);
console.log(num); // 10
console.log(typeof num); // number

console.log(` >> floatNum`);
let floatNum = 3.14;
console.log(floatNum); // 3.14
console.log(typeof floatNum); // number

// 2. Строка (String)
let str = "Привет, мир!"; // " ", ' ', ` `
console.log(str); // Привет, мир!
console.log(typeof str); // string

// 3. Логический (Boolean)
let isTrue = true;
console.log(isTrue); // true
console.log(typeof isTrue); // boolean

let isFalse = false;
console.log(isFalse); // false
console.log(typeof isFalse); // boolean

// 4. Null
let nullValue = null;
console.log(nullValue); // null
console.log(typeof nullValue); // object

// 5. Undefined
let undefinedValue;
console.log(undefinedValue); // undefined
console.log(typeof undefinedValue); // undefined

// 6. Массив (Array)
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
console.log(typeof arr); // object

// 7. Объект (Object)
let obj = {
    name: "Jane",
    age: 30,
    city: "Smolensk"
};
console.log(obj); // {name: "Jane", age: 30, city: "Smolensk"}
console.log(typeof obj); // object

// 8. Функция (Function)
function greet(name) {
    console.log("Привет, " + name + "!");
}
// const greet2 = (name) => console.log("Привет, " + name + "!");
console.log(greet); // [Function: greet]
console.log(typeof greet); // function

// 9. Символ (Symbol)
let sym = Symbol("описание");
console.log(sym); // Symbol(описание)
console.log(typeof sym); // symbol

// 10. BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
const bigNumber1 = 1234567890123456789012345678901234567890;
console.log(bigNumber); // 1234567890123456789012345678901234567890n
console.log(bigNumber1); // 1234567890123456789012345678901234567890n
console.log(typeof bigNumber); // bigint
console.log(typeof bigNumber1); // bigint