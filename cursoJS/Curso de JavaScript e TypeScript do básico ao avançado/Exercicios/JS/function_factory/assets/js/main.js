//Factory function (Função fábrica)
//ou Constructor function (Função construtora)
function criaPessoa(nome2, sobrenome2, idade, a, p) {
    return{
        nome: nome2,
        sobrenome: sobrenome2,
        fala: function(assunto){
            return `${this.nome} está falando ${assunto}`
        },
        altura: a,
        peso: p,
        //Getter
        get imc(){
            const indice = this.peso /(this.altura * this.altura)
            return indice.toFixed(2)
        },
        // imc(){
        //     const indice = this.peso /(this.altura * this.altura)
        //     return indice.toFixed(2)
        // }

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // nomeCompleto(){
        //     return `${this.nome} ${this.sobrenome}`
        // },

        //Setter é obrigatorio criar um paramentro
        set nomeCompleto(valor){
            valor = valor.split(' ') // virou um vetor retorna um vetor

            this.nome = valor.shift() // shift remove o primeiro elemnto do vetor e o retorna
            console.log(valor);

            this.sobrenome = valor.join(' ')
            console.log(this.sobrenome)
        },
    }
}

const p1 = criaPessoa('Thiago','Santos',null,1.80,80)
console.log("ola "+p1.fala('Assunto importante\n'))
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)
// console.log(p1.imc())

console.log(p1.nomeCompleto)
// console.log(p1.nomeCompleto())

p1.nomeCompleto = 'Santos Carretero dos Thiago'

console.log("Esse virou o nome: "+ p1.nome)

console.log("Esse virou o sobrenome: "+ p1.sobrenome)