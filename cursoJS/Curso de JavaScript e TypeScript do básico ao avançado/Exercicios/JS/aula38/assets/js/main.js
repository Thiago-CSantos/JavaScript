const paragrafos = document.querySelectorAll('p')

const estilos_body = getComputedStyle(document.body)

const bgColor_body = estilos_body.backgroundColor

console.log(bgColor_body)

for (let ps of paragrafos){
  ps.style.backgroundColor = bgColor_body
  ps.style.color = 'white'
  ps.style.paddingLeft = '50px'
}