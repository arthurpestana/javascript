/*let num = []
for(var i=0; i<10; i++){
    num[i] = i
    console.log(num[i])
}*/

/*let valores = [1, 2, 3, 4, 5, 6]
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

let valores = [1, 2, 3, 4, 5, 6]
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(valores.indexOf(7))