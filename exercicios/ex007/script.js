var corpo = document.getElementsByTagName("body")
body.addEventListener("load", loading())

function loading(){
    var msg = document.querySelector("div#msg")
    var img = document.querySelector("img#imagem")
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.src = "./images/foto-manha.png"
        document.body.style.background = "#febb88"
    }
    else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = "./images/foto-tarde.png"
        document.body.style.background = "#dd7f3b"
    }
    else {
        // BOA NOITE!
        img.src = "./images/foto-noite.png"
        document.body.style.background = "#183537"
    }
}
