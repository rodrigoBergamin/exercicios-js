const fs = require('fs')

const produto = {
    nome: 'Celular',
    valor: 1259,
    desconto: 0.15
}

fs.writeFile(_dirname + 'arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})