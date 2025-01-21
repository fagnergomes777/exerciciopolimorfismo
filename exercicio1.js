// Implemente uma hierarquia de classes para representar formas geométricas. Uma
// classe base Forma deve conter um método calcularArea que é sobrescrito pelas
// classes derivadas Circulo e Quadrado.
// No final, instancie um objeto de cada classe e armazene-os em um array. Itere pelo array
// chamando o método calcularAreapara cada objeto, demonstrando o uso do
// polimorfismo.

class Forma {
    calcularArea() {
        throw new Error("O método calcularArea deve ser sobrescrito pelas subclasses.");
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    
    calcularArea() {
        return Math.pow(this.lado, 2);
    }
}

const circulo = new Circulo(5);
const quadrado = new Quadrado(4);

const formas = [circulo, quadrado];

formas.forEach(forma => {
    console.log(`A área da forma é: ${forma.calcularArea().toFixed(2)}`);
});
