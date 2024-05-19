function newNameBtnClick() {
    const tb = document.getElementById("textBox");
    tb.value = `Привет, ${tb.value}!`;
}

const btn = document.getElementById("btnAction");

btn.addEventListener("click", newNameBtnClick);