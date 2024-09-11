type Address = {
    street: string
    number: number
}

type User =  {
    name?: string //Adicionar uma interrogação permite que seja um atributo condicional
    age: number
    address: Address
}

type userProperty = keyof User

function getProperty(user: User, property: userProperty) {
    return user[property]
}

const user: User = {
    name: "Arthur",
    age: 18,
    address: {
        street: "Rua Guanabara",
        number: 4
    }
}

console.log(getProperty(user, "age"))

const video = {
    title: "Using TypeScript",
    duration: 180,
}

type Video = typeof video
type VideoKey = keyof typeof video

type getPropertyReturnType = ReturnType<typeof getProperty>

type userWithoutAddress = Omit<User, "name">

type userWithAddresAndName = Pick<User, 'address' | "name">

type userPartial = Partial<User>

type DbConfig = {
    name: string
    url: string
    timeout?: number
}

const conn1 = {name: "postgress", url: 'postgress://'} as DbConfig //Forçar uma tipagem de dados, mesmo se não haver nada, não constará error

const conn2: DbConfig = {name: "postgress", url:'postgress://', timeout: 500} //Considera apenas a tipagem dos dados definidos no type, e não na inserção dos dados

const timeout2 = conn2.timeout

const conn3 = {name: "postgress", url:'postgress://', timeout: 1000} satisfies DbConfig //Junção de todos, permite realizar a inferência e análisa o tipo do dado pela definição

const timeout3 = conn3.timeout


function pickProperty<ObjType extends Record<string, any>>(obj: ObjType, property: keyof ObjType) {
    return obj[property]
}

pickProperty({name: "arthur", idade: 109}, 'name')
pickProperty(video, "title")
