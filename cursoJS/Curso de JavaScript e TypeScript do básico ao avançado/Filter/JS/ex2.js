// Array com objetos
const pessoas = [
    {nome: 'Luiz', idade: 18},
    {nome: 'Maria', idade: 23},
    {nome: 'Edu', idade: 62},
    {nome: 'Thiago', idade: 16},
    {nome: 'Wallace', idade: 47},
    {nome: 'Leticia', idade: 52},
]

const pessoaNomeCompleto = pessoas.filter(function (valor) {
    return valor.nome.length >= 6  
})

const pessoaVelha = pessoas.filter((valor) =>{return valor.idade > 50})

const pessoaTerminaA = pessoas.filter(function (valor) {
    return valor.nome.toLowerCase().endsWith('a')
})

console.log(pessoaNomeCompleto);
console.log(pessoaVelha);
console.log(pessoaTerminaA);