// Crie uma classificação de classes para veículos. Uma classe base Veiculo deve ter o
// método mover. As classes derivadas Carro e Bicicleta devem escrever o método
// mover com mensagens específicas.
// Instancia objetos de ambas as classes, armazena-os em um array, e itere chama o
// método moverde cada objeto, mostrando o comportamento polimórfico.

class Veiculo {
    mover() {
        throw new Error("O método mover deve ser sobrescrito pelas subclasses.");
    }
}

class Carro extends Veiculo {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }

    mover() {
        console.log(`O carro ${this.modelo} está dirigindo.`);
    }
}

class Bicicleta extends Veiculo {
    constructor(tipo) {
        super();
        this.tipo = tipo;
    }

    mover() {
        console.log(`A bicicleta ${this.tipo} está pedalando.`);
    }
}

const carro = new Carro('Fusca');
const bicicleta = new Bicicleta('Mountain Bike');

const veiculos = [carro, bicicleta];

veiculos.forEach(veiculo => {
    veiculo.mover();
});
