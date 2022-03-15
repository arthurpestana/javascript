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
let point = 0
let symbol = 0

function numAdd(num) {
    symbol = 0
    let numbers = num.target.value
    digito.push(numbers)
    visor.value += numbers
}

function addAction(event) {
    let acao = event.target.value
    playOperation(acao)
}

function playOperation(acao) {
    if (acao==".") {
        if (digito.length==0) {
            digito.push("0")
            digito.push(".")
            visor.value += "0,"
            point = 1
        }
        else if (point==1) {
            
        }
        else {
            digito.push(".")
            visor.value += ","
            point = 1
        }
    }
    else if (acao=="d") {
        digito.pop()
        visor.value = digito.join("")
    }
    else if (acao=="+") {
        if (visor.value=="") {
            numpart.push(0)
            visor.value += "0+"
            digito = []
            symbol = 1
            point = 0
        }
        else if (digito.lastIndexOf()==",") {
            visor.value = ""
        }
        else if (symbol==1) {

        }
        else {
            numpart.push(digito.join(""))
            visor.value += "+"
            digito = []
            symbol = 1
            point = 0
        }
        
    }
    else if (acao=="-") {
        numpart.push(digito.join(""))
        visor.value += "-"
        digito = []
    }
    else if (acao=="*") {
        numpart.push(digito.join(""))
        visor.value += "x"
        digito = []
    }
    else if (acao=="/") {
        numpart.push(digito.join(""))
        visor.value += "/"
        digito = []
    }
    else if (acao=="c") {
        visor.value = ""
        digito = []
        numpart = []
    }
}

/*let visor = document.querySelector("input.visor")
let numbers = new Array()
let numpart = new Array()
let operador = new Array()
let resul = 0
let resAtivo = false

function btn01() {
    if (resAtivo) {
        visor.value = ""
        numbers = []
        resAtivo = false
    }
    numbers.push(1)
    visor.value += numbers[numbers.length-1]
}

function btn02() {
    if (resAtivo) {
        visor.value = ""
        numbers = []
        resAtivo = false
    }
    numbers.push(2)
    visor.value += numbers[numbers.length-1]
}

function btn03() {
    if (resAtivo) {
        visor.value = ""
        numbers = []
        resAtivo = false
    }
    numbers.push(3)
    visor.value += numbers[numbers.length-1]
}

function btn04() {
    if (resAtivo) {
        visor.value = ""
        numbers = []
        resAtivo = false
    }
    numbers.push(4)
    visor.value += numbers[numbers.length-1]
}

function btn05() {
    if (resAtivo) {
        visor.value = ""
        numbers = []
        resAtivo = false
    }
    numbers.push(5)
    visor.value += numbers[numbers.length-1]
}

function btn06() {
    if (resAtivo) {
        visor.value = ""
        numbers = []
        resAtivo = false
    }
    numbers.push(6)
    visor.value += numbers[numbers.length-1]
}

function btn07() {
    if (resAtivo) {
        visor.value = ""
        numbers = []
        resAtivo = false
    }
    numbers.push(7)
    visor.value += numbers[numbers.length-1]
}

function btn08() {
    if (resAtivo) {
        visor.value = ""
        numbers = []
        resAtivo = false
    }
    numbers.push(8)
    visor.value += numbers[numbers.length-1]
}

function btn09() {
    if (resAtivo) {
        visor.value = ""
        numbers = []
        resAtivo = false
    }
    numbers.push(9)
    visor.value += numbers[numbers.length-1]
}

function btn00() {
    if (resAtivo) {
        visor.value = ""
        numbers = []
        resAtivo = false
    }
    numbers.push(0)
    visor.value += numbers[numbers.length-1]
}

function btnSomar() {
    resAtivo = false
    visor.value = ""
    numpart.push(Number(numbers.join("")))
    operador.push("+")
    numbers = []
}

function btnSubtrair() {
    resAtivo = false
    visor.value = ""
    numpart.push(Number(numbers.join("")))
    operador.push("-")
    numbers = []
}

function btnDividir() {
    resAtivo = false
    visor.value = ""
    numpart.push(Number(numbers.join("")))
    operador.push("/")
    numbers = []
}

function btnMulti() {
    resAtivo = false
    visor.value = ""
    numpart.push(Number(numbers.join("")))
    operador.push("*")
    numbers = []
}

function btnLimpar() {
    location.reload()
}

function btnResul() {
    visor.value = ""
    numpart.push(Number(numbers.join("")))

    //Próximo passo é fazer um loop for com o número de índices do numpart, em seguida fazer uma verificação com o if para analisar se é necessário colocar o operador agora ou não, em caso de precisar do operador haverá outra condição para analisar qual o operador do índice atual, + - / *, e então fazer a operação com o resultado já obtido antes de usar o operador. Quando o índice do laço chegar em -2 do numpart.length não será mais necessário analisar qual é o operador, já que é o ultimo número antes de obter o resultado completo.

    for (let i=0; i<=numpart.length-1; i++) {
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
    visor.value = parseFloat(resul.toFixed(8)).toString().replace(",", ".")
    resAtivo = true
    numpart = []
    numbers = []
    operador = []
    numbers.push(resul)
    resul = 0
}*/