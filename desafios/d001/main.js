var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
btn1.addEventListener("click", button01)
btn2.addEventListener("click", button02)
btn3.addEventListener("click", button03)

function button01() {
    alert("Você clicou no 1º Botão")
}

function button02() {
    alert("Você clicou no 2º Botão")
}

function button03() {
    alert("Você clicou no 3º Botão")
}