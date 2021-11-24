let btn = document.querySelector("input#btn01")
btn.addEventListener("click", calcular)

function calcular() {
    let product = prompt("Qual é o produto que você está comprando? ")
    let res = document.querySelector("div#res")
    if (product.length == 0) {
        alert("[ERROR] Por favor, verifique os dados e tente novamente.")
    }
    else {
        let price = Number(prompt(`Qual é o preço do produto(${product})?`))
        if (price == 0 || isNaN(parseFloat(price))) {
            alert("[ERROR] Por favor, verifique os dados e tente novamente.\n\nUtilize '.' ao invés de ','!")
        }
        else {
            res.innerHTML = `<h3>Calculando o desconto de 10% para ${product}</h3>`

            res.innerHTML += `O preço original era ` + parseFloat(price.toFixed(2)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + `.<br>`

            res.innerHTML += `Você acaba de ganhar ` + parseFloat((0.1*price).toFixed(2)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + ` de desconto (-10%).<br>`

            res.innerHTML += `No fim, você vai pagar ` + parseFloat((price-(0.1*price)).toFixed(2)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + ` no produto ${product}.`
        }
    }
}