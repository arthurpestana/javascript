var btn = document.querySelector("input#btn01")
var res = document.querySelector("div#res")
btn.addEventListener("click", calcular)

function calcular() {
    let a = prompt("Qual é o valor de a?")
    if (isNaN(parseFloat(a)) || a.length == 0) {
        alert("[ERROR] Por favor, verifique os dados e tente novamente.")
    }
    else {
        let b = prompt("Qual é o valor de b?")
        if (isNaN(parseFloat(b)) || b.length == 0) {
            alert("[ERROR] Por favor, verifique os dados e tente novamente.")
        }
        else {
            let c = prompt("Qual é o valor de c?")
            if (isNaN(parseFloat(c)) || c.length == 0) {
                alert("[ERROR] Por favor, verifique os dados e tente novamente.")
            }
            else {
                let bask = b**2 - 4*a*c
                res.innerHTML = `<h3>Resolvendo o cálculo da Bhaskara:</h3>`
                res.innerHTML += `A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong><br>`
                res.innerHTML += `O calculo realizado será <strong>\u0394 = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong><br>`
                res.innerHTML += `O valor calculado foi <strong><span>\u0394 = ${bask}</span></strong>`
            }
        }
    }
}