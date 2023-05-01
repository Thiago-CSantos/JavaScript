axios('pessoas.json').then(resposta => carregarElementosPagina(resposta.data))

function carregarElementosPagina(json) {

  const tabela = document.createElement('table')

  for (pessoa of json) {

    const tr = document.createElement('tr')

    let td = document.createElement('td')
    td.innerHTML = pessoa.nome
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = '|' + pessoa.idade + '|'
    tr.appendChild(td)


    td = document.createElement('td')
    td.innerHTML = '|' + pessoa.salario
    tr.appendChild(td)

    tabela.appendChild(tr)
  }

  const resultado = document.querySelector('.resultado')
  resultado.appendChild(tabela)
}

