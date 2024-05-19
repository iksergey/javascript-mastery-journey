// Получаем ссылку на элемент и кнопку
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

// Добавляем обработчик события клика на кнопку
animateBtn.addEventListener("click", function () {
    // Анимируем изменение цвета фона
    box.style.transition = "background-color 1s ease-in-out";
    box.style.backgroundColor = "blue";

    // Анимируем изменение размера
    setTimeout(() => {
        box.style.transition = "width 1s ease-in-out, height 1s ease-in-out";
        box.style.width = "200px";
        box.style.height = "200px";
    }, 1000);
});