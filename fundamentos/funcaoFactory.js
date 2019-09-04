const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}

// repetição de objetos

//Factory é uma função que retorna um objeto. Ela tem o objetivo de fabricar a instância de um objeto

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Gomes'
    }
}

console.log(criarPessoa())

//Factory com parâmetros

function criarProduto(nome, preco){
    return {
        nome: nome,
        preco: preco,
        desconto: preco = preco * 0.5
    }
}

console.log(criarProduto('Smartwatch O92', 2999))
console.log(criarProduto('Notebook i7 Predator', 4599))

//Factory pode gerar objeto com agrupamento de funções