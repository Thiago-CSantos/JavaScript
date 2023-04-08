// Não é aconselhavel usar o metodo reduce() dessa forma 
// se precisar alterar valores utilize o metodo map()

const numeros = [11, 22, 66, 99, 1, 2, 3, 4, 5, 8, 6, 7,]

const total = numeros.reduce((acumulador, valor, indice, array) => {

    acumulador.push(valor * 2)

    return acumulador

}, [])

console.log(total);