// IIFE -> Immediately invoked function expression

(function (idade, peso,altura) {
   const sobreNome = 'Santos'

   function criaNome(nome) {
    return nome + ' ' + sobreNome
   }

   function falaNome() {
        console.log(criaNome('Thiago'))
   }
 falaNome()
 console.log(idade,peso,altura)
})(19, 66, 1.76)