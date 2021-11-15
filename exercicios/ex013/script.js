var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora>=6 && hora<12) {
    console.log(`Agora é de manhã`)
}
else if (hora<=18) {
    console.log(`Agora é de tarde`)
}
else {
    console.log(`Agora é de noite`)
}