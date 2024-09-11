type User = {
    name: string;
    userDate: number;
}

function calcUserAge2(user: User){
    if (user.userDate >= 2024) {
        return "Error! Ano de Nascimento Inválido!"
    }

    return 2024 - user.userDate
}

function calcUserAge(user: User): number { 
    return 2024 - user.userDate
}

let idade: number = calcUserAge({name: 'Arthur', userDate: 2006})
