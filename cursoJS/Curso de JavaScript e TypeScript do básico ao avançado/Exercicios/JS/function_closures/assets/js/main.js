function retornaFuncao(nome) {
  return function () {
    return nome
  }
}

const funcao = retornaFuncao("Thiago")
const funcao2 = retornaFuncao('Santos')

console.log(funcao())
console.log(funcao2())