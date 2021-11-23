function comprar() {
    var prod = prompt("Qual o produto que você está comprando?")

    if (prod.length == 0){
        alert("[ERROR] Por favor, verifique os dados e tente novamente.")
    }
    else {
        var prec = prompt(`Quanto custa o produto(${prod}) que você está comprando?`)
        var dinh = prompt(`Qual foi o valor que você deu para pagar o produto(${prod})?`)
        if (prec.length == 0 || dinh.length == 0) {
            alert("[ERROR] Por favor, verifique os dados e tente novamente.")
        }
        else {
            prec = Number(prec)
            dinh = Number(dinh)
            if (prec > dinh) {
                alert(`Você não pode comprar o produto(${prod}), pois está faltando dinheiro!`)
            }
            else {
                alert(`Você comprou ${prod} que custou R$ ${prec},00.\nVocê deu R$ ${dinh},00 em dinheiro e vai receber R$ ${dinh-prec},00 de troco.\nVolte sempre!`)
            }
        }   
    }
}