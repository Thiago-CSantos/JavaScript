 const iniciar = document.querySelector('#iniciar')
const pausar = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')
const relogio = document.querySelector('#relogio')



function criaHoraSegundos(mileSegundos) {
  const data = new Date(mileSegundos *1000)
  return data.toLocaleTimeString('pt-Br', {
    hour12:false,
    timeZone: 'GMT'
  })
}

let segundos = 0
let timer;
function iniciarRelogio() {
  timer = setInterval(function () {
    segundos++
    relogio.innerHTML = criaHoraSegundos(segundos)
  }, 1000)
}

iniciar.addEventListener('click',() =>{
  relogio.classList.remove('pausar')
  clearInterval(timer)
  iniciarRelogio()
})
pausar.addEventListener('click', ()=>{
  relogio.classList.add('pausar')
  clearInterval(timer)
})
zerar.addEventListener('click',function() {
  relogio.innerHTML = '00:00:00',
  clearInterval(timer)
  segundos = 0
})

console.log(criaHoraSegundos(10000))