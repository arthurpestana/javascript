let btnNum = document.getElementsByClassName("calc__btnNum")
let btnAction = document.getElementsByClassName("calc__btnAction")

for (let i=0; i<=9; i++) {
    btnNum[i].onclick = numAdd
}

for (let i=0; i<=5; i++) {
    btnAction[i].onclick = addAction
}

let visor = document.querySelector(".calc__visor")

function numAdd(num) {
    let digito = num.target.value
    visor.value += digito
}

function addAction(act) {
    let acao = act.target.value
    playOperation(acao)
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