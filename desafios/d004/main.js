function comprar() {
    var prod = prompt("Qual o produto que você está comprando?")
    var prec = Number(prompt(`Quanto custa o produto(${prod}) que você está comprando?`))
    var dinh = Number(prompt(`Qual foi o valor que você deu para pagar o produto(${prod})?`))

    if (prec > dinh) {
        alert(`Você não pode comprar o produto(${prod}), pois está faltando dinheiro!`)
    }
    else {
        alert(`Você comprou ${prod} que custou R$ ${prec},00.\nVocê deu R$ ${dinh},00 em dinheiro e vai receber R$ ${dinh-prec},00 de troco.\nVolte sempre!`)
    }
}