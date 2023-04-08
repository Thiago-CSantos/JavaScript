// Retonar a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (soma tudo)

const numeros = [11, 22, 9, 66, 99, 5, 1, 2, 3, 4, 5, 8, 6, 7, 33,]

const numerosPares = numeros.filter((valor) => {
    return valor % 2 === 0
}).map((valor2) => {
    // console.log("map",valor2);
    return valor2 * 2
}).reduce((acumulador, valorAtual) => {
    acumulador = acumulador + valorAtual
    return acumulador
}, 0)

console.log(numerosPares);