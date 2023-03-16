function mostrarHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', { hour12: false })
}

// function funcaoIntervalo() {
//     console.log(mostrarHora())
// }

let timer = setInterval(function () {
    console.log(mostrarHora())
}, 1000)

setTimeout(function () {
    clearInterval(timer)
}, 1000)
// setTimeout(só executa uma unica vez)
// clearInterval(para um setInterval)

setTimeout(() => { console.log('Olá! Mundo') }, 3000)
