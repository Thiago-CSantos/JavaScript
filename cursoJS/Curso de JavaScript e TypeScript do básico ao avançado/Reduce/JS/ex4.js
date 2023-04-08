// Reduce mais utilizada para reduzir em apenas um elemnto só

// Array com objetos
const pessoas = [
    { nome: 'Luiz', idade: 18 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Edu', idade: 62 },
    { nome: 'Thiago', idade: 16 },
    { nome: 'Wallace', idade: 47 },
    { nome: 'Leticia', idade: 52 },
]

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade){
        return acumulador
    }
    return valor
})

console.log(maisVelha);