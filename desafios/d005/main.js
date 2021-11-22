var btn01 = document.querySelector("#btn01")
btn01.addEventListener("click", converter)

function converter() {
    var medida = Number(prompt("Digite uma distância em metros(m): "))
    var res = document.querySelector("div#res")
    if (medida == 0) {
        alert("[ERROR!] Por favor, digite um valor para a medida de metros(m)")
    }
    else {
        res.innerHTML = `<h3>A distância de ` + medida.toString().replace(".", ",") + ` metros, corresponde a...</h3>`
        res.innerHTML += (medida/1000).toString().replace(".", ",") + ` quilômetros (Km)<br>`
        res.innerHTML += (medida/100).toString().replace(".", ",") + ` hectômetros (Hm)<br>`
        res.innerHTML += (medida/10).toString().replace(".", ",") + ` decâmetros (Dam)<br>`
        res.innerHTML += (medida*10).toString().replace(".", ",") + ` decímetros (dm)<br>`
        res.innerHTML += (medida*100).toString().replace(".", ",") + ` centímetros (cm)<br>`
        res.innerHTML += (medida*1000).toString().replace(".", ",") + ` milímetros (mm)<br>`
    }
}