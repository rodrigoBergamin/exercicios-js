// Object.preventExtensions (não consegue adicionar novos atributos)

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco:1.99, tag:'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

//Object.seal (não consegue remover nem adicionar novos atributos)

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Sealed:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.nome = 'Vitorino'

console.log(pessoa)