
const numeros = [11, 22, 33, 66, 99, 5, 1, 2, 3, 4, 5, 8, 6, 7, 9,]

let numDobrado = numeros.map(function (valor, /*indice*/ /*array*/) {
    console.log(valor);
    // console.log(indice);
    // console.log(array);
    return valor *2
})

console.log(numDobrado);