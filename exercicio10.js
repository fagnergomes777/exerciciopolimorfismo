// Implemente uma hierarquia de classes para representar dispositivos eletrônicos. A
// classe base Eletronico deve ter o método ligar. Crie classes derivadas como Smartphone
// e Notebook, sobrescrevendo esse método. Armazene objetos dessas classes em um
// array e itere chamando o método ligar

class Eletronico {
    ligar() {
        throw new Error("O método ligar deve ser sobrescrito pelas subclasses.");
    }
}

class Smartphone extends Eletronico {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }

    ligar() {
        console.log(`O smartphone ${this.modelo} está ligando e se conectando à rede móvel.`);
    }
}

class Notebook extends Eletronico {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }

    ligar() {
        console.log(`O notebook ${this.modelo} está ligando e conectando à rede Wi-Fi.`);
    }
}

const smartphone = new Smartphone('iPhone 13');
const notebook = new Notebook('Dell XPS 13');

const eletronicos = [smartphone, notebook];

for (const eletronico of eletronicos) {
    eletronico.ligar();
}