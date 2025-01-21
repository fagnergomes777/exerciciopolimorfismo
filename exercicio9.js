// Crie uma hierarquia de classes para diferentes tipos de contas bancárias. A classe base
// ContaBancaria deve ter o método calcularJuros. Crie classes derivadas como
// ContaPoupanca e ContaCorrente, sobrescrevendo esse método. No final, itere por uma
// lista de contas, chamando o método de forma polimórfica.

class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }

    calcularJuros() {
        throw new Error("O método calcularJuros deve ser sobrescrito pelas subclasses.");
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(saldo, taxaJuros) {
        super(saldo);
        this.taxaJuros = taxaJuros;
    }

    calcularJuros() {
        const juros = this.saldo * this.taxaJuros;
        console.log(`Juros da conta poupança: R$ ${juros.toFixed(2)}`);
        return juros;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(saldo, taxaJuros) {
        super(saldo);
        this.taxaJuros = taxaJuros;
    }

    calcularJuros() {
        const juros = this.saldo * this.taxaJuros;
        console.log(`Juros da conta corrente: R$ ${juros.toFixed(2)}`);
        return juros;
    }
}

const contaPoupanca = new ContaPoupanca(1000, 0.03);
const contaCorrente = new ContaCorrente(2000, 0.01);

const contas = [contaPoupanca, contaCorrente];

for (const conta of contas) {
    conta.calcularJuros();
}