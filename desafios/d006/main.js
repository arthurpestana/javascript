function converter() {
    var celcius = Number(prompt("Digite uma temperatura em ºC (Celsius)"))
    var res = document.querySelector("div#res")
    if (celcius == 0 || isNaN(parseFloat(celcius))) {
        alert("[ERROR] Por favor, verifique os dados e tente novamente. \n\nSempre utilize '.' ao invés de ','")
    }
    else {
        let fahren = celcius * 1.8 + 32
        let kelvin = celcius + 273.15
        res.innerHTML = `A temperatura de ` + celcius.toString().replace(".", ",") + `ºC, corresponde a...<br><br>`
        res.innerHTML += parseFloat((kelvin).toFixed(1)).toString().replace(".", ",") + "ºK (Kelvin)<br>"
        res.innerHTML += parseFloat((fahren).toFixed(1)).toString().replace(".", ",") + "ºF (Fahrenheit)"
    }
}