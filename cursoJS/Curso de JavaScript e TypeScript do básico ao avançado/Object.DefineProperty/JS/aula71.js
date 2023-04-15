// defineProperty() - defineProperties()

function Produto(nome,preco, estoque) {

    Object.defineProperty(this, 'preco', {
        enumerable: true, // true mostra chave - false não ostra chave
        value: preco, // valor
        writable: true, // true pode alterar conteudo - false não pode alterar conteudo
        configurable: true // permite que seja configurada ou seja pode sobrescrever
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value : nome,
            writable: false,
            configurable: true    
        }
    })
}

const p1 = new Produto('Celular', 200.03, 3)
console.log(Object.keys(p1));
p1.nome = 'oj' // writable: false, não permetiu a alteração  direta
console.log(p1.nome);