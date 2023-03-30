//function constructrs
function Calculadora(){

    this.display = document.querySelector('.display')

    this.inincia = function(){
        this.capturaClique()
        this.capturaEnter()
    }

    this.capturaClique = () =>{
        document.addEventListener('click', (event) => {
            this.display.focus()
            const el = event.target

            if(el.classList.contains('btn-num')){
                this.display.value += el.innerText
                this.display.focus()
            }
            if(el.classList.contains('btn-clear')){
                this.display.value = ''
            }
            if(el.classList.contains('btn-apagar')){
                this.display.value = this.display.value.slice(0,-1)
            }
            
            this.fazConta(el)
            console.log(el)
        })
    }

    this.capturaEnter = () =>{
        this.display.addEventListener('keypress', function (e) {
            if(e.keyCode === 13){
              this.realizaConta()
            }
            console.log(e)
          }.bind(this))
    }

    this.fazConta = (event)=>{
        if(event.classList.contains('btn-igual')){
            let conta = this.display.value

            try {
                conta = eval(conta)
                if (!conta) {
                    alert('conta invalida')
                    return;
                }    

                this.display.value = conta

            } 
            catch (error) {
                alert('erro na conta!')
                return;
            }
        }   
    }

    
}



let p1 = new Calculadora()

p1.inincia()