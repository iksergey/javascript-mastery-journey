function calculateTipAmount(billAmount, tipPercentage) {
    return billAmount * (tipPercentage / 100);
}

function calculateTotalAmount(billAmount, tipAmount) {
    return billAmount + tipAmount;
}

function calculatePerPersonAmount(totalAmount, numberOfPeople) {
    return totalAmount / numberOfPeople;
}

// Получаем ссылку на кнопку
var calculateButton = document.getElementById("calculateButton");

// Назначаем обработчик события на кнопку
calculateButton.addEventListener("click", function () {
    // Получаем значения из полей ввода
    var billAmount = parseInt(document.getElementById("billAmount").value);
    var tipPercentage = parseInt(document.getElementById("tipPercentage").value);
    var numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);

    // Проверяем, все ли поля заполнены корректно
    if (isNaN(billAmount)
        || isNaN(tipPercentage)
        || isNaN(numberOfPeople)
        || billAmount <= 0
        || tipPercentage < 0
        || numberOfPeople <= 0) {
        alert("Пожалуйста, введите корректные значения.");
        return;
    }

    // Вычисляем чаевые и общую сумму
    var tipAmount = calculateTipAmount(billAmount, tipPercentage);
    var totalAmount = calculateTotalAmount(billAmount, tipAmount);

    // Вычисляем сумму для каждого человека
    var perPersonAmount = calculatePerPersonAmount(totalAmount, numberOfPeople);

    // Выводим результаты
    document.getElementById("tipAmount").innerText = tipAmount.toFixed(2);
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
    document.getElementById("perPersonAmount").innerText = perPersonAmount.toFixed(2);
});
