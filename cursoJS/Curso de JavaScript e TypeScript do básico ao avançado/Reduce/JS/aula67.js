// É mais utilizado para reducir um array em um unico elemento

const numeros = [11, 22, 9, 66, 99, 5, 1, 2, 3, 4, 5, 8, 6, 7, 33,]

const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador = acumulador + valor 
    // console.log(acumulador, valor);
    return acumulador
},0) // também pode receber um valor iniciara o acumulador

console.log(total);