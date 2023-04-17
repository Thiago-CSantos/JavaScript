const nomePrivado =  Symbol() // torna uma variavel privada

class Pessoa{
    constructor(nome, sobrenome, idade){
        this[nomePrivado] = nome
        this.sobrenome = sobrenome
        this.idade =  idade
    }

    falar(){
        console.log(this.nomePrivado + "Esta falando");
    }

    get getNome(){
        return this[nomePrivado]
    }

    set setNome(valor){
        if(typeof valor !== "string"){console.log("SEtter"); return}
        this[nomePrivado] = valor
    }
}

class Funcionario extends Pessoa{
    constructor(nomePrivado, sobrenome, idade, cargo){
        super(nomePrivado,sobrenome,idade)
        this.cargo = cargo
    }
    // Sobre escreveer o metodo falar() @Overrride
    falar(){
        console.log(this[nomePrivado] + ", Funcionario falar, cargo: " + this.cargo)
    }
}
const f1 = new Funcionario('Thiago', 'Santos', 16, 'Engenheiro de Software')
f1.falar()