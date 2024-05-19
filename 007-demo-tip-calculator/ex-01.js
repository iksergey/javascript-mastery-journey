let billAmount = Number.parseFloat(prompt("Сумма счёта"));
let tipPercentage = parseFloat(prompt("Процент чаевых"));
let numberOfPeople = Number.parseInt(prompt("Сколько человек участвовало в обеде"));

let tipAmount = 1000 * tipPercentage / 100;
let totalAmount = billAmount + tipAmount;
let perPersonAmount = totalAmount / numberOfPeople;

alert("Общий счёт: " + totalAmount);
alert("Процент чаевых: " + String(tipPercentage) + "%");
alert(`С каждого: ${perPersonAmount}`);