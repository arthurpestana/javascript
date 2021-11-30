let num = [9, 5, 2, 6, 3, 10, 23]
num.push(1)
num.sort(function(a, b){return a-b})
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if(pos>=0){
    console.log(`O valor 2 está na posição ${pos}`)
}
else {
    console.log("O valor não foi encontrado!")
}