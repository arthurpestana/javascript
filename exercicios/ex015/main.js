let info = document.querySelector("div#info")
let res = document.querySelector("div#res")
let startbtn = document.querySelector("#startbtn")
let row=5, col=4, i, j
var nota = new Array(2)
let dados = new Array(row)
for(i=0; i<row; i++) {
    dados[i] = new Array(col)
}

function gerarMatricula() {
    return Math.floor(Math.random() * 1000)
}

function calcularMedia(n1, n2) {
    return (n1+n2)/2
}

function start() {
    startbtn.remove()
    for(i=0; i<row; i++) {
        for(j=0; j<col; j++) {
            if(j==0) {
                let matricula = gerarMatricula()
                dados[i][0] = matricula
            }

            else if(j==1) {
                info.innerHTML = "Digite a sua nota da Prova 01: "
                var nota01 = document.createElement("input")
                nota01.setAttribute("type", "number")
                nota01.setAttribute("id", "nota01")
                info.appendChild(nota01)
                info.innerHTML += "<br>Digite a sua nota da Prova 02: "
                var nota02 = document.createElement("input")
                nota02.setAttribute("type", "number")
                nota02.setAttribute("id", "nota02")
                info.appendChild(nota02)
                let lancarbtn = document.createElement("input")
                lancarbtn.setAttribute("type", "button")
                lancarbtn.setAttribute("value", "Enviar")
                info.appendChild(lancarbtn)
                lancarbtn.addEventListener("click", enviar)
            }
        }
    }    
}

function enviar() {
    nota[0] = Number(document.querySelector("#nota01"))
    nota[1] = Number(document.querySelector("#nota02"))
    var mediapro = calcularMedia(nota[0], nota[1])
}