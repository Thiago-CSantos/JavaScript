const ajax_Request = (obj) => {
  const xhr = new XMLHttpRequest()
  xhr.open(obj.method, obj.url, true)
  xhr.send(null)

  xhr.addEventListener('load', (e) => {
    if (xhr.status >= 200 && xhr.status <= 300){
      obj.success(xhr.responseText)
    }
    else{
      obj.error(xhr.statusText, xhr.status)
    }
  })
}

document.addEventListener('click',(e) => {
  const el = e.target
  console.log(el);
  const tag = el.tagName.toLowerCase()

  if(tag === 'a'){
    e.preventDefault()
    carregaPagina(el)
  }
})

function carregaPagina(el){
  const href = el.getAttribute('href')
  console.log(href);

  ajax_Request({
    method: 'GET',
    url: href,
    success(response){
      carregarResultado(response)
    },
    error(){

    }
  })
}

function carregarResultado(response){
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}

