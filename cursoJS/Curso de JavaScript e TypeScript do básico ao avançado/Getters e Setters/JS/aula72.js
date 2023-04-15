// Getters e Setter 

function Produto(nome,preco, estoque) {
    this.nome = nome
    this.estoque = estoque

    let precoPrivado = preco
    Object.defineProperty(this, 'preco', {
        enumerable: true, 
        // value: preco, 
        // writable: false,
        configurable: true,
        get: function () {
            return precoPrivado
        },
        set: function(valor){
            if(typeof valor != 'number'){
                console.log('Valor invalido');
                return
            }

            precoPrivado = valor
            
        }
    })

    
}

const p1 = new Produto('Celular', 200.03, 3)
console.log(p1); //Produto { nome: 'Celular', estoque: 3, preco: [Getter/Setter] }
p1.preco = 60000 // altera valor
console.log(p1.preco);