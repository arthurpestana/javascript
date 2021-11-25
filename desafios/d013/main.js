var btn = document.querySelector("input#btn01")
var res = document.querySelector("div#res")
btn.addEventListener("click", verificar)

function verificar() {
    let nome = prompt("Qual é o nome do Aluno?")
    if (nome.length == 0 || isNaN(nome) === false) {
        alert("[ERROR] Por favor, verifique os dados e tente novamente.")
    }
    else {
        let nota1 = prompt(`Primeira nota de ${nome}:`)
        if (nota1.length == 0 || isNaN(Number(nota1)) || nota1 > 10) {
            alert("[ERROR] Por favor, verifique os dados e tente novamente. Além disso, a nota máxima é 10!\nSempre utilize o '.' ao invés de ','")
        }
        else {
            let nota2 = prompt(`Segunda nota de ${nome}:`)
            if (nota2.length == 0 || isNaN(Number(nota2)) || nota2 > 10) {
                alert("[ERROR] Por favor, verifique os dados e tente novamente. Além disso, a nota máxima é 10!\nSempre utilize o '.' ao invés de ','")
            }
            else {
                let nota01 = Number(nota1)
                let nota02 = Number(nota2)
                nota1 = Number(nota1).toFixed(1).toString().replace(".", ",")
                nota2 = Number(nota2).toFixed(1).toString().replace(".", ",")
                let media = (nota01+nota02)/2
                res.innerHTML = `<h3>Analisando a situação de ${nome}</h3>`
                res.innerHTML += `Com as notas ${nota1} e ${nota2}, a <strong>média é ` + parseFloat(media.toFixed(2)).toString().replace(".", ",") + `</strong>.<br>`
                if (media < 3) {
                    res.innerHTML += `Com média abaixo de 3,0, o aluno está <span class="repro">reprovado<span>!`
                }
                else if (media < 6) {
                    res.innerHTML += `Com média entre 3,0 e 6,0, o aluno está em <span class="recu">recuperação<span>!`
                }
                else {
                    res.innerHTML += `Com média acima de 6,0, o aluno está <span class="apro">aprovado<span>!`
                }
            }
        }
    }
}