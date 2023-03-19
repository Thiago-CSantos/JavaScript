function numeroAleatorio(max = 3000, min = 1000){
    num = Math.random() *(max - min) + min
    return Math.round(num)
}

function f1(callback) {// aqui callback é um parâmetro
    setTimeout(()=>{
        console.log('f1')
        if(callback){ // se callback for true, é retornado como função
            callback()
        }
    },numeroAleatorio())
}

function f2(callback) {// aqui callback é um parâmetro
    setTimeout(()=>{
        console.log('f2')
        if(callback){ // se callback for true, é retornado como função
            callback()
        }
    },numeroAleatorio())
}

function f3(callback) {// aqui callback é um parâmetro
    setTimeout(()=>{
        console.log('f3')
        if(callback){ // se callback for true, é retornado como função
            callback()
        }
    }, numeroAleatorio())
}

f1(f1CallBack)

function f1CallBack() {
    f2(f2CallBack)
}

function f2CallBack(){
    f3(f3CallBack)
}

function f3CallBack(){
    console.log("Ola! Mundo")
}

// f1(function (){
//     f2(function () {
//         f3(function (){
//             console.log("Ola! Mundo")
//         })
//     })
// })
