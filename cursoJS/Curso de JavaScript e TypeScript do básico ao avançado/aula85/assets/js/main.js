class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario')
    this.eventos()
  }

  eventos() {
    this.formulario.addEventListener('submit', (e) => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const camposValidos = this.checaCampos()
  }

  checaCampos() {
    let valid = true

    for (let campo of this.formulario.querySelectorAll('.validar')) {

      const label = campo.previousElementSibling.innerText

      if (campo.value == false) {
        this.criaErro(campo, `Campo ${label} não pode estar em branco.`)
        valid = false
      }

      console.log(campo);
    }
  }

  criaErro(campo, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('msg-error')
    campo.insertAdjacentElement('afterEnd', div)
    div.style = 'color: red'
  }

}

const validar = new ValidaFormulario()