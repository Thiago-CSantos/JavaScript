// 705.484-52 070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {

        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, ''), //expressão regular replace(/\D+/g,"") para deixar somente numero

            writable: false, // não pode alterar conteudo
            configurable: false //permite que seja configurada ou seja pode sobrescrever
        })
    }

    geraNovoCpf() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfSemDigito)
        const digito2 = this.geraDigito(cpfSemDigito + digito1)

        this.novoCpf = cpfSemDigito + digito1 + digito2
    }

    geraDigito(cpfSemDigitos) {
        let total = 0
        let reverse = cpfSemDigitos.lenght + 1

        for (let stringNumerica of cpfSemDigitos) {
            total += reverse * Number(stringNumerica)
            reverse--
        }

        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }

    validaSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    valida() {
        if (!this.cpfLimpo) {
            return false
        }
        if (typeof this.cpfLimpo !== "string") {
            return false
        }
        if (this.validaSequencia()) {
            return false
        }

        this.geraNovoCpf()
        console.log(this.novoCpf);
        return this.novoCpf === this.cpfLimpo
    }
}

const validaCPF = new ValidaCPF('070.987.720-03')
console.log(validaCPF.valida());