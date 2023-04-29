const ajax_Request = (obj) => {
  return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send(null)

    xhr.addEventListener('load', (e) => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.responseText)
      }
      else {
        reject(xhr.statusText, xhr.status)
      }
    })

  })
}

document.addEventListener('click', (e) => {
  const el = e.target
  console.log(el);
  const tag = el.tagName.toLowerCase()

  if (tag === 'a') {
    e.preventDefault()
    carregaPagina(el)
  }
})

function carregaPagina(el) {
  const href = el.getAttribute('href')
  console.log(href);

  const objConfig ={
    method: 'GET',
    url: href,
  }

  ajax_Request(objConfig).then((response) => {
    carregarResultado(response)
  }).catch((error) => {
    console.log(error);
  })
}

function carregarResultado(response) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}

