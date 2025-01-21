// Crie uma classificação de classes para representar notificações. Uma classe base
// Notificacaodeve ter o método enviar. As classes derivadas Email, SMSe Pushdevem
// sobrescrever o método para exibir mensagens específicas sobre como cada notificação
// é enviada.
// Crie instâncias de cada classe, armazene-as em um array e demonstre o polimorfismo ao
// chamar o método enviarem cada instância.

class Notificacao {
    enviar() {
        throw new Error("O método enviar deve ser sobrescrito pelas subclasses.");
    }
}

class Email extends Notificacao {
    constructor(destinatario) {
        super();
        this.destinatario = destinatario;
    }

    enviar() {
        console.log(`Enviando e-mail para ${this.destinatario}...`);
    }
}

class SMS extends Notificacao {
    constructor(numero) {
        super();
        this.numero = numero;
    }

    enviar() {
        console.log(`Enviando SMS para o número ${this.numero}...`);
    }
}

class Push extends Notificacao {
    constructor(identificador) {
        super();
        this.identificador = identificador;
    }

    enviar() {
        console.log(`Enviando notificação Push para o identificador ${this.identificador}...`);
    }
}

const email = new Email('exemplo@dominio.com');
const sms = new SMS('123-456-7890');
const push = new Push('user123');

const notificacoes = [email, sms, push];

for (const notificacao of notificacoes) {
    notificacao.enviar();
}