var button = document.querySelector("input#verificar")
button.addEventListener("click", verificar)

function verificar(){
    var date = new Date()
    var anoAtual = date.getFullYear()
    var txtano = document.querySelector("input#txtano")
    var ano = Number(txtano.value)
    var res = document.querySelector("div#res")
    if (ano == 0 || ano > anoAtual) {
        window.alert("[ERROR] Verifique os dados e tente novamente!")
    }
    else {
        var idade = anoAtual-ano
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        var sexo = document.getElementsByName("radsex")
        var gen = ""
        if (sexo[0].checked){
            gen = "Homem"
            if (idade >= 0 && idade <= 10){
                // CRIANÇA
                img.setAttribute("src", "./images/foto-bebe-m.png")
            }
            else if (idade < 25){
                // JOVEM
                img.setAttribute("src", "./images/foto-jovem-m.png")
            }
            else if (idade < 50){
                // ADULTO
                img.setAttribute("src", "./images/foto-adulto-m.png")
            }
            else {
                // IDOSO
                img.setAttribute("src", "./images/foto-idoso-m.png")
            }
        }
        else {
            gen = "Mulher"
            if (idade >= 0 && idade <= 10){
                // CRIANÇA
                img.setAttribute("src", "./images/foto-bebe-f.png")
            }
            else if (idade < 25){
                // JOVEM
                img.setAttribute("src", "./images/foto-jovem-f.png")
            }
            else if (idade < 50){
                // ADULTO
                img.setAttribute("src", "./images/foto-adulto-f.png")
            }
            else {
                // IDOSO
                img.setAttribute("src", "./images/foto-idoso-f.png")
            }
        }
        res.innerHTML = `Detectamos uma pessoa ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}