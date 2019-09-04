Array.prototype.map2 = function(callback){
    const newArray = []
    for(i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome" : "Borracha", "preco": 3.45}',
    '{"nome" : "Caderno", "preco": 41.22}'
]

let carrinho2 = carrinho.map(function(e){
    return JSON.parse(e)
})

console.log(carrinho2)

let apenasOsPrecos = carrinho2.map(function(e){
    let precos = e.preco
    return precos
})

console.log(apenasOsPrecos)
