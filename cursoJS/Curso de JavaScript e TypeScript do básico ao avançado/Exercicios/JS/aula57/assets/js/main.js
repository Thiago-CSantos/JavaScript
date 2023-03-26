function criaCalculadora() {
  return {

    display: document.querySelector('.display'),

    inincia: function () {
      this.cliqueBotoes()
      this.pressionaEnter()
    },

    pressionaEnter: function(){
      this.display.addEventListener('keypress', function (e) {
        if(e.keyCode === 13){
          this.realizaConta()
        }
        console.log(e)
      }.bind(this))
    },

    apagarUm: function (){
      this.display.value = this.display.value.slice(0,-1) //slice(0,-1) é a posição da string menos 1
    },

    clearDisplay: function (){
      this.display.value = ''
    },

    realizaConta: function(){
      let conta = this.display.value

      try {
        conta =  eval(conta)

        if(!conta){
          alert('conta invalida')
          return
        }
        this.display.value = conta
      } catch (error) {
        alert('conta invalida')
      }
    },

    cliqueBotoes: function () {
      document.addEventListener('click', function (e) {
        const el = e.target
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText)
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if (el.classList.contains('btn-apagar')) {
          this.apagarUm()
        }

        if (el.classList.contains('btn-igual')) {
          this.realizaConta()
        }

      }.bind(this))//vincula a o this da função, pq por padrão pega o this.document.addEventListener('click', function (e)
    },

    btnParaDisplay: function (valor) {
      this.display.value = this.display.value + valor //+'está concatenando'
    }

  }
}

const calculador = criaCalculadora()
calculador.inincia()