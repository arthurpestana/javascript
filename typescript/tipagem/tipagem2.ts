interface Carros {
    modelo: string;
    ano: number;
    preco: number;
}

class CarrosHonda implements Carros {
    modelo: string;
    ano: number;
    preco: number;

    constructor(modelo: string, ano: number, preco: number) {
        this.modelo = modelo
        this.ano = ano
        this.preco = preco
    }

    calcFIPE(): number {
        return this.preco/this.ano
    }
}

const Civic: Carros = new CarrosHonda("Civic", 2022, 200000)