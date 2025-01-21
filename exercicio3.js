// Implemente uma classificação de classes para representar métodos de pagamento. Uma
// classe base Pagamentodeve conter um método processarPagamento, que é sobrescrito
// pelas classes derivadas CartaoDeCredito, Boletoe Pix.
// Cada classe derivada deve exibir uma mensagem específica no método
// processarPagamento. Crie instâncias de cada classe, armazene-as em um array e itere
// chame o método processarPagamentopara demonstrar polimorfismo.

class Pagamento {
    processarPagamento() {
        throw new Error("O método processarPagamento deve ser sobrescrito pelas subclasses.");
    }
}

class CartaoDeCredito extends Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }

    processarPagamento() {
        console.log(`Pagamento processado com o cartão de crédito: ${this.numeroCartao}`);
    }
}

class Boleto extends Pagamento {
    constructor(codigoBarras) {
        super();
        this.codigoBarras = codigoBarras;
    }

    processarPagamento() {
        console.log(`Pagamento processado com o boleto, código de barras: ${this.codigoBarras}`);
    }
}

class Pix extends Pagamento {
    constructor(chavePix) {
        super();
        this.chavePix = chavePix;
    }

    processarPagamento() {
        console.log(`Pagamento processado com Pix, chave: ${this.chavePix}`);
    }
}

const pagamentoCartao = new CartaoDeCredito('1234-5678-9012-3456');
const pagamentoBoleto = new Boleto('123456789012345678901234567890');
const pagamentoPix = new Pix('chavepix@dominio.com');

const pagamentos = [pagamentoCartao, pagamentoBoleto, pagamentoPix];

pagamentos.forEach(pagamento => {
    pagamento.processarPagamento();
});
