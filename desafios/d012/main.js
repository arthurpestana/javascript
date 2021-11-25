var btn = document.querySelector("input#btn01")
var res = document.querySelector("div#res")
btn.addEventListener("click", verificar) 

function verificar() {
    let price1 = prompt("Qual era o preço anterior do produto?")
    if (isNaN(Number(price1)) || price1.length == 0) {
        alert("[ERROR] Por favor, verifique os dados e tente novamente!")
    }
    else {
        let price2 = prompt("Qual é o preço atual do produto?")
        if (isNaN(Number(price2)) || price2.length == 0) {
            alert("[ERROR] Por favor, verifique os dados e tente novamente!")
        }
        else {
            let price01 = Number(price1)
            let price02 = Number(price2)
            res.innerHTML = `<h3>Analisando os valores informados...</h3>`

            res.innerHTML += `O produto custava ` + parseFloat(price01.toFixed(2)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + ` e agora custa ` + parseFloat(price02.toFixed(2)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + `.<br>`

            if (price01 < price02) {
                res.innerHTML += `Hoje o produto está mais caro.<br>`
                res.innerHTML += `O preço subiu ` + parseFloat((price02-price01).toFixed(2)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + ` em relação ao preço anterior.<br>`
                res.innerHTML += `Uma variação de ` + parseFloat((price02/price01-1).toFixed(1)) + `% para cima.`
            }
            else {
                res.innerHTML += `Hoje o produto está mais barato.<br>`
                res.innerHTML += `O preço caiu ` + parseFloat((price01-price02).toFixed(2)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + ` em relação ao preço anterior.<br>`
                res.innerHTML += `Uma variação de ` + parseFloat((price02/price01-1).toFixed(1)).toString().replace(".", ",") + `% para baixo.`
            }
        }
    }
}