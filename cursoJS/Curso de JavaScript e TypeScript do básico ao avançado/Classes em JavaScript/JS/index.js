const nomePrivado =  Symbol() // torna uma variavel privada

class Pessoa{
    constructor(nome, sobrenome, idade){
        this[nomePrivado] = nome
        this.sobrenome = sobrenome
        this.idade =  idade
    }

    get getNome(){
        return this[nomePrivado]
    }

    set setNome(valor){
        if(typeof valor !== "string"){console.log("SEtter"); return}
        this[nomePrivado] = valor
    }
}

const p =  new Pessoa('Thiago', 'Santos', 19)

p.setNome = 'iuh'
console.log(p.getNome);