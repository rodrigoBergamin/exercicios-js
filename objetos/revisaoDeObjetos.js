/*const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)
*/

//Exemplo 2


const carro = {
    nome: 'A4',
    valor: 99999,
        proprietario: {
            nome: 'Raul',
            idade: 56,
            endereco: {
                logradouro: 'Rua ABC',
                numero: 123

            }
        },
        condutores: [{
            nome: 'Junior',
            idade: 25
        }, {
            nome: 'Andreia',
            idade: 38,
        }],
        
        calcularValorDoSeguro: function(){
            //....
        }
}

carro.proprietario.endereco.numero = 1000
console.log(carro.condutores[0].nome) //acessando valores dos objetos por notação ponto
//delete carro.proprietario.endereco
//delete carro.calcularValorDoSeguro

//console.log(carro)
//console.log(carro.condutores) // É possível acessar um atributo de um objeto mesmo q ele não exista, mas retornará undefined