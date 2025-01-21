// Crie uma classificação de classes para representar dispositivos eletrônicos. Uma classe
// base Dispositivodeve ter o método ligar. As classes derivadas Celulare
// Tabletdevem Notebooksobrescrever esse método para exibir mensagens específicas
// sobre como cada dispositivo está conectado.
// Crie instâncias de cada classe, armazene-as em um array e utilize um loop para
// demonstrar polimorfismo ao chamar o método ligar.

class Dispositivo {
    ligar() {
        throw new Error("O método ligar deve ser sobrescrito pelas subclasses.");
    }
}

class Celular extends Dispositivo {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }

    ligar() {
        console.log(`O celular ${this.modelo} está conectando à rede móvel.`);
    }
}

class Tablet extends Dispositivo {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }

    ligar() {
        console.log(`O tablet ${this.modelo} está conectando à Wi-Fi.`);
    }
}

class Notebook extends Dispositivo {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }

    ligar() {
        console.log(`O notebook ${this.modelo} está conectando à rede cabeada.`);
    }
}

const celular = new Celular('Samsung Galaxy S21');
const tablet = new Tablet('iPad Pro');
const notebook = new Notebook('MacBook Pro');

const dispositivos = [celular, tablet, notebook];

for (const dispositivo of dispositivos) {
    dispositivo.ligar();
}