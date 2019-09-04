let valor // não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco) // preço de produto não inicializado(não definido)

console.log(produto)

produto.preco = 3.50

console.log(produto)

delete produto.preco // deletar um par chave-valor de um objeto
console.log(produto)