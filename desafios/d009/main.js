function reajustar() {
    let name = prompt("Qual é o nome do funcionário?")
    let res = document.querySelector("div#res")
    if (name.length == 0 || isNaN(name) == false) {
        alert("[ERROR] Por favor, verifique os dados e tente novamente.")
    }
    else {
        let salario = Number(prompt(`Qual é o salário de ${name}?`))
        if (salario == 0 || isNaN(parseFloat(salario))) {
            alert("[ERROR] Por favor, verifique os dados e tente novamente.\n\nUtilize '.' ao invés de ','!")
        }
        else {
            let porcent = Number(prompt(`O salário de ${name} vai ser reajustado em qual porcentagem?`))
            if (porcent == 0 || isNaN(parseFloat(porcent))) {
                alert("[ERROR] Por favor, verifique os dados e tente novamente.\n\nUtilize '.' ao invés de ','!")
            }
            else {
                res.innerHTML = `<h3>${name} recebeu um reajuste salarial!</h3>`

                res.innerHTML += `O salário atual era ` + parseFloat(salario.toFixed(2)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + `.<br>`

                res.innerHTML += `Com um aumento de ${porcent}%, o salário vai aumentar em ` + parseFloat(((porcent/100)*salario).toFixed(2)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + ` no próximo mês.<br>`

                res.innerHTML += `E a partir daí, ${name} vai passar a ganhar ` + parseFloat((salario+(porcent/100)*salario).toFixed(2)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + `.`
            }
        }
    }
}