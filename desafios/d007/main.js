function converter() {
    let cota = Number(prompt("Antes de mais nada. Quanto está a cotação do dólar agora? "))
    let res = document.querySelector("div#res")
    if (cota == 0 || isNaN(parseFloat(cota))) {
        alert("[ERROR] Por favor, verifique os dados e tente novamente!\nUtilize o '.' ao invés da ','!")
    }
    else {
        let real = Number(prompt("Quantos R$ você tem na carteira?"))
        if (real == 0) {
            alert("Você não tem dinheiro suficiente para comprar o dólar!")
        }
        else if (isNaN(parseFloat(real))) {
            alert("[ERROR] Por favor, verifique os dados e tente novamente!\nUtilize o '.' ao invés da ','!")
        }
        else {
            let dolar = real/cota
            res.innerHTML = `Você consegue comprar ` + parseFloat(dolar.toFixed(2)).toString().replace(".", ",") + ` US$ com os reais que você tem na carteira. De acordo com a cotação informada anteriormente.`
        }
    }
}