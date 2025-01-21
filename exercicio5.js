// Crie uma hierarquia de classes para representar meios de transporte. Uma classe base
// Transportedeve ter o método mover. As classes derivadas Carroe Bicicletadevem
// Aviaosobrescrever esse método para exibir mensagens específicas sobre como se
// mover.
// Crie instâncias de cada classe, armazene-as em um array e utilize um loop para chamar o
// método moverem cada instância, demonstrando polimorfismo.

class Transporte {
    mover() {
        throw new Error("O método mover deve ser sobrescrito pelas subclasses.");
    }
}

class Carro extends Transporte {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }

    mover() {
        console.log(`O carro ${this.modelo} está dirigindo na estrada.`);
    }
}

class Bicicleta extends Transporte {
    constructor(tipo) {
        super();
        this.tipo = tipo;
    }

    mover() {
        console.log(`A bicicleta ${this.tipo} está sendo pedalada.`);
    }
}

class Aviao extends Transporte {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }

    mover() {
        console.log(`O avião ${this.modelo} está voando no céu.`);
    }
}

const carro = new Carro('Fusca');
const bicicleta = new Bicicleta('Mountain Bike');
const aviao = new Aviao('Boeing 747');

const transportes = [carro, bicicleta, aviao];

for (const transporte of transportes) {
    transporte.mover();
}