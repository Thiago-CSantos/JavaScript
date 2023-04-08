// Array com objetos
const pessoas = [
    { nome: 'Luiz', idade: 18 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Edu', idade: 62 },
    { nome: 'Thiago', idade: 16 },
    { nome: 'Wallace', idade: 47 },
    { nome: 'Leticia', idade: 52 },
]

const nomes = pessoas.map(function (valor) {
    return valor.nome
})

const idades = pessoas.map((valor) => {
    // delete valor.nome
    // return valor
    return { idade: valor.idade }
})

const IDs = pessoas.map((valor, indice) => {
    let novoObjeto = { ...valor }
    novoObjeto.id = indice
    return novoObjeto
})
console.log(nomes);
console.log(idades);
console.log(IDs);