const fs = require('fs')
const caminho = __dirname + '/arquivo.json'
//leitura de arquivo síncrona

const conteudo = fs.readFileSync(caminho, 'utf-8')

//console.log(conteudo) //arquivo em JSON

//leitura assíncrona

fs.readFile(caminho, 'utf-8', (err, conteudo) =>{ //passando uma callback para readFile
    const config = JSON.parse(conteudo) //convertendo JSON em objeto
   //console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') //lendo um arquivo json diretamente com require sem importar fs

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos.join(',')) // readdir gera uma lista com arquivos do diretório, join transforma o array em string
})


const b = __dirname //dirname sempre será o diretório atual por padrão
//console.log(b)