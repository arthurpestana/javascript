var btn01 = document.querySelector("#btn01")
btn01.addEventListener("click", button01)

function button01() {
    var number = prompt("Digite um número inteiro qualquer: ")
    var num = Number.parseInt(number)
    alert(`Antes de ${num}, temos o número ${num-1}.\nDepois de ${num}, temos o número ${num+1}.`)
}