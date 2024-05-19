// Получаем ссылку на кнопку и контейнер списка
const addListBtn = document.getElementById("addListBtn");
const listContainer = document.getElementById("listContainer");

// Добавляем обработчик события клика на кнопку
addListBtn.addEventListener("click", function () {
    for (let i = 0; i < 5; i++) {
        // Создаем новый элемент списка
        const listItem = document.createElement("li");
        listItem.textContent = `${i + 1}-й элемент списка`;

        // Добавляем элемент в контейнер списка
        listContainer.appendChild(listItem);
    }
});