const idInputText = document.querySelector('#idInputText')
const btnAddTarefa = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas')


idInputText.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!idInputText.value) {
      return;
    }
    criarTarefa(idInputText.value)
  }
})


function criaLi() {
  const li = document.createElement('li')
  return li
}

function limparInput() {
  idInputText.value = ''
}

function criarBotaoApagar(li) {
  const btnApagar = document.createElement('button') // createElement('Cria uma tag HTML')
  btnApagar.innerText = 'Apagar'
  btnApagar.setAttribute('class', 'btn-apagar') // adicionar qualquer atributo tanto como class, id, title...
  li.appendChild(btnApagar)
}

function criarTarefa(textoInput) {
  const li = criaLi()
  li.innerText = textoInput + ' '
  tarefas.appendChild(li)
  limparInput()
  criarBotaoApagar(li)
  salvarTarefas()
}

btnAddTarefa.addEventListener('click', function () {
  if (!idInputText.value) {
    return;
  }
  criarTarefa(idInputText.value)
})

document.addEventListener('click', function (evento) {
  const elem = evento.target
  if(elem.classList.contains('btn-apagar')){
    elem.parentElement.remove()
    salvarTarefas()
  }
  
})

function salvarTarefas(){
  const liTarefas = tarefas.querySelectorAll('li')

  const listaDeTarefas = []

  for(let listTarefa of liTarefas){
    let tarefaTexto = listTarefa.innerText
    tarefaTexto =  tarefaTexto.replace('Apagar', '')
    listaDeTarefas.push(tarefaTexto)
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas)

  localStorage.setItem('tarefas', tarefasJSON)
  console.log(tarefasJSON)
}

function addTerefasSalvas(){
  const tarefas = localStorage.getItem('tarefas')

  const listaDeTarefas = JSON.parse(tarefas)

  for(let tarefa of listaDeTarefas){
    criarTarefa(tarefa)
  }
}
addTerefasSalvas()