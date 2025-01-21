// Crie uma ordem de aulas para representar animais. Uma classe base Animaldeve ter o
// método emitirSom. As classes derivadas Cachorroe Gatodevem Passarosobrescrever
// esse método para selecionar sons específicos.
// Instancie objetos de cada classe, armazene-os em um array e itere chame o método
// emitirSompara demonstrar polimorfismo.

class Animal {
    emitirSom() {
        throw new Error("O método emitirSom deve ser sobrescrito pelas subclasses.");
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super();
        this.nome = nome;
    }

    emitirSom() {
        console.log(`${this.nome} diz: Au Au!`);
    }
}

class Gato extends Animal {
    constructor(nome) {
        super();
        this.nome = nome;
    }

    emitirSom() {
        console.log(`${this.nome} diz: Miau!`);
    }
}

class Passaro extends Animal {
    constructor(nome) {
        super();
        this.nome = nome;
    }

    emitirSom() {
        console.log(`${this.nome} diz: Piu Piu!`);
    }
}

const cachorro = new Cachorro('Rex');
const gato = new Gato('Miau');
const passaro = new Passaro('Piu');

const animais = [cachorro, gato, passaro];

animais.forEach(animal => {
    animal.emitirSom();
});
