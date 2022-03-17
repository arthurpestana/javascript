//THEMES
let theme = document.querySelector(".themes__input").addEventListener("click", themeChooser)
let html = document.querySelector("html")
html.classList.toggle("theme01")
let themesNum = 1

function themeChooser() {
    if (themesNum==1) {
        themesNum = 2
        html.classList.remove("theme01")
        html.classList.toggle("theme02")
    }
    else if (themesNum==2) {
        themesNum = 3
        html.classList.remove("theme02")
        html.classList.toggle("theme03")
    }
    else {
        themesNum = 1
        html.classList.remove("theme03")
        html.classList.toggle("theme01")
    }
}

//CALCULATOR
let btnNum = document.getElementsByClassName("calc__btnNum")
let btnAction = document.getElementsByClassName("calc__btnAction")

for (let i=0; i<=9; i++) {
    btnNum[i].onclick = numAdd
}

for (let i=0; i<=7; i++) {
    btnAction[i].onclick = addAction
}

let visor = document.querySelector(".calc__visor")
let numpart = new Array
let digito = new Array
let operador = new Array
let visorInfo = new Array
let point = 0
let symbol = 0
let resul = 0
let resAtivo = false

function numAdd(num) {
    if (resAtivo) {
        visor.value = ""
        digito = []
        numpart = []
        visorInfo = []
        resAtivo = false
    }
    symbol = 0
    let numbers = num.target.value
    digito.push(Number(numbers))
    visorInfo.push(digito[digito.length-1])
    visor.value += numbers
}

function addAction(event) {
    let acao = event.target.value
    playOperation(acao)
}

function playOperation(acao) {
    if (acao==".") {
        if (visorInfo==0 || symbol==1) {
            visorInfo.push("0")
            visorInfo.push(".")
            visor.value += "0,"
            point = 1
            symbol = 1
        }
        else if (point==1) {
            
        }
        else {
            resAtivo = false
            visorInfo.push(".")
            visor.value += ","
            point = 1
        }
    }
    else if (acao=="d") {
        visorInfo.pop()
        visor.value = visorInfo.join("")
        if (isNaN(visorInfo[visorInfo.length-1])) {
            symbol = 1
        }
        else {
            symbol = 0
        }
    }
    else if (acao=="+") {  
        verificaVisor(acao)
    }
    else if (acao=="-") {
        verificaVisor(acao)
    }
    else if (acao=="*") {
        verificaVisor(acao)
    }
    else if (acao=="/") {
        verificaVisor(acao)
    }
    else if (acao=="c") {
        visor.value = ""
        visorInfo = []
        digito = []
        numpart = []
        operador = []
    }
    else if (acao=="=") {
        numpart = []
        operador = []
        digito = []
        visor.value = "="
        for (let i=0; i<=visorInfo.length-1; i++) {
            if (visorInfo[i]=="+" || visorInfo[i]=="-" || visorInfo[i]=="*" || visorInfo[i]=="/") {
                numpart.push(Number(digito.join("")))
                operador.push(visorInfo[i])
                digito = []
            }
            else {
                digito.push(visorInfo[i])
            }
        }
        numpart.push(Number(digito.join("")))
        
        for (let i=0; i<=numpart.length; i++) {
            if (i==0) {
                resul = 0
                resul = numpart[i]
            }
            else {
                if (operador[i-1]=="+") {
                    resul += numpart[i]
                }
                else if (operador[i-1]=="-") {
                    resul -= numpart[i]
                }
                else if (operador[i-1]=="*") {
                    resul *= numpart[i]
                }
                else if (operador[i-1]=="/") {
                    resul /= numpart[i]
                }
            }
        }
        visor.value += resul
        resAtivo = true
        digito = []
        numpart = []
        operador = []
        visorInfo = []
        visorInfo.push(resul)
    }
}

function verificaVisor(opera) {
    if (visor.value=="") {
        resAtivo = false
        visor.value += `0${opera}`
        symbol = 1
        point = 0
        visorInfo.push(0)
        visorInfo.push(`${opera}`)
    }
    else if (symbol==1) {

    }
    else {
        resAtivo = false
        visor.value += `${opera}`
        symbol = 1
        point = 0
        visorInfo.push(`${opera}`)
    }
}