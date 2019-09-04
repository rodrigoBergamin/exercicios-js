const produtos = [
    {nome: 'iPad', preco: 2555, fragil: true},
    {nome: 'Notebook', preco: 4999, fragil:true},
    {nome: 'Caneca', preco: 5, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 5000
}))

function frageis(p){//será passada como callback
    return p.fragil === true
}

console.log(produtos.filter(frageis))