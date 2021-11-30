/*function parimp(num) {
    if (num%2 != 0) {
        return "ímpar"
    }
    else {
        return "par"
    }
}

console.log(`O número 9 é ${parimp(9)}`)*/

function parimp(number) {
    if (number%2 == 0) {
        return "Par!"
    }
    else {
        return "Ímpar!"
    }
}

let res = parimp(9)
console.log(res)