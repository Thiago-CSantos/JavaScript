let vetor = [5,3,6,9];

vetor.push(1) //adicionar no vetor
vetor.sort() // ordenar vetor
console.log(vetor)

for(let i =0; i<vetor.length; i++){
    console.log(vetor[i])
}

console.log(`ForIn`)
for(let posicao in vetor){
    console.log(vetor[posicao])
}
