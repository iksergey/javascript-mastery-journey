let score = 0;
let question = "Что означает слово 'cat'? [кошка, собака]";
let answer = prompt(question);
if (answer.toUpperCase() === "КОШКА") {
    score = score + 10;
    alert("Всё верно! 😎");
}
else {
    alert("Нужно подумать ещё 🫣");
}
question = "Что означает слово 'dog'? [кошка, собака]";
answer = prompt(question).toUpperCase();
if (answer === "СОБАКА") {
    score = score + 10;
    alert("Всё верно! 😎");
}
else {
    alert("Нужно подумать ещё 🫣");
}

alert("Счёт: " + score);