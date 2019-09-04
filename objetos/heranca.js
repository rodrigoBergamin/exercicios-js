const pai = {nome: 'Pedro',   corCabelo: 'preto'}

const filha1 =  Object.create(pai)
filha1.nome = 'Ana'

const filha2 = Object.create(pai, {nome: {value:'Bia', writable: false, enumerable: true}})
//console.log(`${filha2.nome} tem cabelo da cor ${filha2.corCabelo}`)

/*for(let key in filha2){
    filha2.hasOwnProperty(key) ? //exibe se um atributo pertence a filha2 ou se pertence ao seu objeto pai
    console.log(key) : console.log(`Por herança ${key}`)
}
*/

Object.keys(filha1)
