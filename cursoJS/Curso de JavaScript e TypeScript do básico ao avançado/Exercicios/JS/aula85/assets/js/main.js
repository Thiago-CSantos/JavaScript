class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario')
    this.eventos()
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const camposValidos = this.checaCampos()
    const senhasValidas = this.senhasSaoValidas()

    if(camposValidos && senhasValidas){
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  checaCampos() {
    let valid = true

    for (let msgError of this.formulario.querySelectorAll('.msg-error')) {
      msgError.remove()
    }

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;

      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (campo.classList.contains('cpf')) {
        if (this.validarCpf(campo)) {
          valid = false
        }
      }

      if (campo.classList.contains('usuario')) {
        if (this.validaUsuario(campo)) {
          valid = false
        }
      }

    }
    return valid
  }

  senhasSaoValidas() {
    let valid = true

    const senha = this.formulario.querySelector('.senha')
    const repetirSenha = this.formulario.querySelector('.repetir-senha')

    if (senha.value !== repetirSenha.value) {
      this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.')
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
      valid = false
    }

    if (senha.value.length < 6 || senha.value.length > 12){
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
      valid = false
    }
    return valid
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  validarCpf(campo) {
    const cpf = new ValidaCPF(campo.value)

    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF invalido')
      return false
    }
    return true
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