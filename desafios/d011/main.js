var res = document.querySelector("div#res")

function verificar() {
    let year = prompt("Qual é o ano que você quer verificar?")
    if (year.length == 0 || isNaN(parseInt(year))) {
        alert("[ERROR] Por favor, verifique os dados e tente novamente.")
    }
    else {
        res.innerHTML = `<h3>Analisando o ano de ${year}...</h3>`
        let bis
        if ((year/4)%1 === 0 && (year/100)%1 !== 0) {
            res.innerHTML += `O ano de ${year} <span class="bis">É BISSEXTO</span> \u2714`
        }
        else if ((year/100)%1 === 0 && (year/400)%1 === 0) {
            res.innerHTML += `O ano de ${year} <span class="bis">É BISSEXTO</span> \u2714`
        }
        else {
            res.innerHTML += `O ano de ${year} <span class="notbis">NÃO É BISSEXTO</span> \u274C`
        }
    }
}