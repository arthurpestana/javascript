let visor = document.querySelector("input.visor")
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

    //Pr??ximo passo ?? fazer um loop for com o n??mero de ??ndices do numpart, em seguida fazer uma verifica????o com o if para analisar se ?? necess??rio colocar o operador agora ou n??o, em caso de precisar do operador haver?? outra condi????o para analisar qual o operador do ??ndice atual, + - / *, e ent??o fazer a opera????o com o resultado j?? obtido antes de usar o operador. Quando o ??ndice do la??o chegar em -2 do numpart.length n??o ser?? mais necess??rio analisar qual ?? o operador, j?? que ?? o ultimo n??mero antes de obter o resultado completo.

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
}