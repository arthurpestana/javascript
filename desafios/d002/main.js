function button01(){
    var name = prompt("Qual é o seu nome?")
    if (name.length == 0 ||  typeof name === "string") {
        alert("[ERROR] Por favor, verifique os dados e tente novamente.")
    }
    else {
        var age = prompt(`Olá, ${name}! Quantos anos você tem?`)
        if (isNaN(parseInt(age))) {
            alert("[ERROR] Por favor, verifique os dados e tente novamente.")
        }
        else {
            alert(`Acabei de conhecer ${name}, que tem ${age} anos de idade!`)
        }
    }
}