// Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos 

const numeros = [11,22,33,66,99,5,1,2,3,4,5,8,6,7,9,]

let numFilter = numeros.filter(function(valor, /*index*/ /*array*/){
    // console.log(valor);
    // console.log(index);
    // console.log(array);
    return valor > 10
})

console.log(numFilter);