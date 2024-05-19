let billAmount = Number.parseFloat(prompt("Сумма счёта"));
let tipPercentage = parseFloat(prompt("Процент чаевых"));
let numberOfPeople = Number.parseInt(prompt("Сколько человек участвовало в обеде"));

if (isNaN(billAmount)
    || isNaN(tipPercentage)
    || isNaN(numberOfPeople)
    || billAmount <= 0
    || tipPercentage < 0
    || numberOfPeople <= 0
) {
    alert("Ошибка ввода данных");
} else {
    let tipAmount = 1000 * tipPercentage / 100;
    let totalAmount = billAmount + tipAmount;
    let perPersonAmount = totalAmount / numberOfPeople;

    alert("Общий счёт: " + totalAmount);
    alert("Процент чаевых: " + String(tipPercentage) + "%");
    alert(`С каждого: ${perPersonAmount}`);
}