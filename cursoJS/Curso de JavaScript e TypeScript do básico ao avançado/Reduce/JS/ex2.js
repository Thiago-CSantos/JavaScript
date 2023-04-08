// Não é aconselhavel usar o metodo reduce() dessa forma 
// se precisar filtrar valores utilize o metodo filter()

const numeros = [11, 22, 9, 66, 99, 5, 1, 2, 3, 4, 5, 8, 6, 7, 33,]

const total = numeros.reduce((acumulador, valor, indice, array) => {

    if(valor % 2 === 0){
        acumulador.push(valor)
    }
    return acumulador

}, [])

console.log(total);