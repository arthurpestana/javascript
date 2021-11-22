function contar(){
    var inicio = document.querySelector("input#txtinicio")
    var fim = document.querySelector("input#txtfim")
    var passo = document.querySelector("input#txtpasso")
    var res = document.querySelector("div#res")
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar!"
        alert("ERROR! Faltam dados")
    }
    else {
        res.innerHTML = "Contando: <br>"
        var ini = Number(inicio.value)
        var fi = Number(fim.value)
        var pas = Number(passo.value)

        if (passo == 0){
            alert("Passo inválido! Considerando PASSO 1")
            passo = 1
        }

        if (ini <= fi) {
            for (var i=ini; i<=fi; i+=pas){
                res.innerHTML += ` ${i} \u{27A1}`
            }
        }
        else if (ini >= fi) {
            for (var i=ini; i>=fi; i-=pas){
                res.innerHTML += ` ${i} \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}