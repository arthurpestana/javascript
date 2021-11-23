var btn01 = document.querySelector("#btn01")
btn01.addEventListener("click", converter)

function converter() {
    var medida = Number(prompt("Digite uma distância em metros(m): "))
    var res = document.querySelector("div#res")
    if (medida == 0) {
        alert("[ERROR!] Por favor, digite um valor para a medida de metros(m)!")
    }
    else if (isNaN(parseFloat(medida))) {
        alert("[ERROR!] Por favor, digite o valor da medida usando '.' ao invés de ',' para números decimais!")
    }
    else {
        res.innerHTML = `<h3>A distância de ` + medida.toString().replace(".", ",") + ` metros, corresponde a...</h3>`
        res.innerHTML += parseFloat((medida/1000).toFixed(4)).toString().replace(".", ",") + ` quilômetros (Km)<br>`
        res.innerHTML += parseFloat((medida/100).toFixed(3)).toString().replace(".", ",") + ` hectômetros (Hm)<br>`
        res.innerHTML += parseFloat((medida/10).toFixed(3)).toString().replace(".", ",") + ` decâmetros (Dam)<br>`
        res.innerHTML += parseFloat((medida*10).toFixed(3)).toString().replace(".", ",") + ` decímetros (dm)<br>`
        res.innerHTML += parseFloat((medida*100).toFixed(3)).toString().replace(".", ",") + ` centímetros (cm)<br>`
        res.innerHTML += parseFloat((medida*1000).toFixed(3)).toString().replace(".", ",") + ` milímetros (mm)<br>`
    }
}