// Crie uma classificação de classes para representar ferramentas. Uma classe base
// Ferramentadeve ter o método usar. As classes derivadas Marteloe
// ChaveDeFendadevem Serrotesobrescrever o método para exibir mensagens
// específicas sobre como são usadas.
// Crie instâncias de cada classe, armazene-as em um array e itere chamando o método
// usarem cada instância para demonstrar polimorfismo.

class Ferramenta {
    usar() {
        throw new Error("O método usar deve ser sobrescrito pelas subclasses.");
    }
}

class Martelo extends Ferramenta {
    constructor(tipo) {
        super();
        this.tipo = tipo;
    }

    usar() {
        console.log(`O martelo ${this.tipo} está sendo usado para martelar pregos.`);
    }
}

class ChaveDeFenda extends Ferramenta {
    constructor(tipo) {
        super();
        this.tipo = tipo;
    }

    usar() {
        console.log(`A chave de fenda ${this.tipo} está sendo usada para apertar parafusos.`);
    }
}

class Serrote extends Ferramenta {
    constructor(tipo) {
        super();
        this.tipo = tipo;
    }

    usar() {
        console.log(`O serrote ${this.tipo} está sendo usado para cortar madeira.`);
    }
}

const martelo = new Martelo('Pneumático');
const chaveDeFenda = new ChaveDeFenda('Phillips');
const serrote = new Serrote('Manual');

const ferramentas = [martelo, chaveDeFenda, serrote];

for (const ferramenta of ferramentas) {
    ferramenta.usar();
}
