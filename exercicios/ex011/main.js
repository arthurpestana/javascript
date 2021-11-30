var button = document.querySelector("input#button")
button.addEventListener("click", tabuada)

function tabuada(){
    var num = document.querySelector("input#number")
    //var tab = document.querySelector("#seltab")
    var res = document.querySelector("div#res")
    if (num.value.length == 0){
        alert("[ERROR!] Por favor, digite um número!")
    }
    else {
        var n = Number(num.value)
        var tab = document.createElement("select")
        tab.setAttribute("size", "10")
        res.innerHTML = `Tabuada do número ${n}: <br>`
        res.appendChild(tab)
        tab.innerHTML = ""
        for(var i=1; i<=10; i++){
            var item = document.createElement("option")
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    } 
}